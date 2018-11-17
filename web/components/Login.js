import React from 'react'
import * as Side from './Sidebars'
import { PrimaryButton } from './Button'
import styled from 'styled-components'
import { sendLoginEmail, loginByCode } from '../utils/api'
import { setToken, isLoggedIn, saveUser, getUser, logout } from '../utils/auth'

export class Login extends React.Component {
  state = {
    email: '',
    loadingEmail: false,
    emailSent: false,
    loginCode: '',
    loggedIn: false,
  }

  componentDidMount() {
    const loggedIn = isLoggedIn()
    const user = getUser()
    console.log(loggedIn)
    if (loggedIn) {
      this.setState({ loggedIn: true })
      this.setState({ email: (user && user.email) || '' })
    }
  }

  render() {
    const { email, loadingEmail, emailSent, loggedIn } = this.state

    if (loggedIn) {
      return (
        <Side.Box>
          <Side.Title>
            You're in!
            {email && (
              <>
                <br />
                <span>({email})</span>
              </>
            )}
          </Side.Title>

          <Side.LinkItem href="#" onClick={logout}>
            Logout
          </Side.LinkItem>
        </Side.Box>
      )
    }

    return (
      <Side.Box>
        <Side.Title>Login</Side.Title>

        <form onSubmit={this.emailSubmitted}>
          <Input
            required
            type="email"
            placeholder="Type your email..."
            value={this.state.email}
            onChange={this.emailChanged}
          />
          <PrimaryButton type="submit" disabled={loadingEmail}>
            {loadingEmail ? 'Sending...' : 'Send Email'}
          </PrimaryButton>
        </form>

        {emailSent && <p>Check your email! Paste the code here:</p>}

        {emailSent && (
          <form onSubmit={this.loginCodeSubmitted}>
            <Input
              required
              type="text"
              placeholder="Paste the code"
              value={this.state.loginCode}
              onChange={this.loginCodeChanged}
            />
            <PrimaryButton type="submit">Check And Login</PrimaryButton>
          </form>
        )}
      </Side.Box>
    )
  }

  loginCodeChanged = e => {
    this.setState({ loginCode: e.target.value })
  }

  emailChanged = e => {
    this.setState({ email: e.target.value })
  }

  emailSubmitted = e => {
    e.preventDefault()

    // check if email is correct
    const { email } = this.state
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter valid email')
      return false
    }

    this.setState({ loadingEmail: true })

    sendLoginEmail({ email })
      .then(() => {
        this.setState({ emailSent: true, loadingEmail: false })
      })
      .catch(err => {
        this.setState({ loadingEmail: false })
        alert(`Oh no! There was an error: ${err} contact twitter.com/morajabi`)
      })

    return false
  }

  loginCodeSubmitted = e => {
    e.preventDefault()

    // check if email is correct
    const { email, loginCode } = this.state
    if (
      !email ||
      !loginCode ||
      loginCode.length < 12 ||
      !loginCode.includes('-')
    ) {
      alert('Login code is not valid! Try again')
      return false
    }

    loginByCode({ loginCode, email })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if (body.token) {
          setToken(body.token)
          saveUser(body.user || null)
          this.setState({ loggedIn: true })
        } else {
          throw ''
        }
      })
      .catch(err => {
        alert(`Oh no! There was an error: ${err} contact twitter.com/morajabi`)
      })

    return false
  }
}

// Style
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 4px 5px;
  font-size: 16px;
  margin-bottom: 5px;
`
