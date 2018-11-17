import jwt from 'jwt-simple'

const { JWT_SECRET } = process.env

const getToken = req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    // Authorization: Bearer g1jipjgi1ifjioj
    // Handle token presented as a Bearer token in the Authorization header
    return req.headers.authorization.split(' ')[1]
  }

  return null
}

export const authMiddleware = (req, res, next) => {
  const token = getToken(req)

  try {
    const payload = jwt.decode(token, JWT_SECRET)

    if (payload.userId) {
      req.userId = payload.userId
      next()
    } else {
      throw ''
    }
  } catch (err) {
    return next()
  }
}
