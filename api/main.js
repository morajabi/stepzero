import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { DateTime } from 'luxon'
import jwt from 'jwt-simple'
import shortid from 'shortid'

// Local
import { prisma } from './prisma/generated'
import generateTemperaryCode from './helpers/temporaryCode'
import sendEmail from './helpers/sendEmail'
import { authMiddleware } from './helpers/auth'

const { JWT_SECRET } = process.env

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.end('Step Zero API!')
})

app.post('/send-login-email', async (req, res) => {
  const { email } = req.body
  const { ip } = req

  const thisUserLogins = await prisma.userLogins({
    where: { OR: [{ email: email }, { ip: ip }] },
    orderBy: 'createdAt_DESC',
  })

  const twoMinAgo = DateTime.utc()
    .minus({ minutes: 2 })
    .toMillis()

  if (thisUserLogins.length > 3 && thisUserLogins[0].createdAt > twoMinAgo) {
    res.json(400, { ok: false, msg: 'Too many attempts' })
    return
  }

  const temporaryCode = generateTemperaryCode()

  const userLoginEntery = await prisma.createUserLogin({
    temporaryCode,
    ip,
    email,
  })

  if (!userLoginEntery) {
    res.json(400, { ok: false, msg: 'We could not save to db' })
    return false
  }

  sendEmail({
    To: email,
    TemplateId: 9002740,
    TemplateModel: {
      loginCode: temporaryCode,
    },
  })
    .then(() => {
      res.json({ ok: true, msg: 'Email sent!' })
    })
    .catch(() => {
      res.json(400, { ok: false, msg: 'We could not send email' })
    })
})

app.post('/login', async (req, res) => {
  let email = req.body.email && req.body.email.trim()
  let loginCode = req.body.loginCode && req.body.loginCode.trim()

  // Empty check
  if (!email || !loginCode) {
    res.json(400, { ok: false, msg: 'Empty ' })
    return
  }

  const loginEntry = await prisma.userLogins({
    where: { email: email, temporaryCode: loginCode },
  })

  if (!loginEntry) {
    res.json(400, { ok: false, msg: 'No login code matches this' })
    return
  }
  console.log({ email, loginCode })

  // Login the user!.....
  try {
    let [user] = await Promise.all([
      prisma.user({ email }),
      prisma.deleteManyUserLogins({ email }),
    ])
    // let user = users && users[0]

    if (!user) {
      // Not signed up yet, create user....
      user = await prisma.createUser({
        email,
        firstName: (email.split('@') || [''])[0],
        name: email,
      })
    }

    // Generate JWT!
    if (user) {
      // TODO: generate the JWT token
      const token = jwt.encode({ userId: user.id }, JWT_SECRET)
      res.json({ ok: true, token, user, msg: 'You are in!' })
    } else {
      throw new Error()
    }
  } catch (err) {
    res.json(400, { ok: false, msg: `We could not log you in ${err}` })
  }
})

// Get Idea
app.get('/idea', async (req, res) => {
  let hash = req.query.hash && req.query.hash.trim()

  try {
    const idea = await prisma.idea({ publicHash: hash })

    if (idea) {
      res.status(200).json(idea)
    } else {
      throw ''
    }
  } catch (err) {
    res.status(400).json({ ok: false })
  }
})

// Save Idea
app.post('/save-idea', authMiddleware, async (req, res) => {
  if (!req.userId) {
    res.status(400).json({ ok: false, msg: 'signin!' })
    return
  }

  let title = req.body.title && req.body.title.trim()
  let description = req.body.description && req.body.description.trim()

  if (!title) {
    res.status(400).json({ ok: false })
    return
  }

  try {
    const publicHash = shortid.generate()
    const idea = await prisma.createIdea({
      title,
      description,
      publicHash,
      author: { connect: { id: req.userId } },
    })

    if (idea) {
      res.status(200).json(idea)
    } else {
      throw ''
    }
  } catch (err) {
    res.status(400).json({ ok: false })
  }
})

// Save Idea
app.post('/update-idea', authMiddleware, async (req, res) => {
  if (!req.userId) {
    res.status(400).json({ ok: false, msg: 'signin!' })
    return
  }

  let id = req.body.id
  let title = req.body.title && req.body.title.trim()
  let description = req.body.description && req.body.description.trim()

  if (!id || !title) {
    res.status(400).json({ ok: false, msg: 'data msiing' })
    return
  }

  try {
    const ideas = await prisma.updateManyIdeas({
      where: {
        id,
        author: { id: req.userId },
      },
      data: {
        title,
        description,
      },
    })

    if (ideas.count && ideas.count > 0) {
      res.status(200).json({ ok: true })
    } else {
      throw ''
    }
  } catch (err) {
    res.status(400).json({ ok: false })
  }
})

app.listen(4000)