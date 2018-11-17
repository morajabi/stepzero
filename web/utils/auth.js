const USER_TOKEN_KEY = 'userToken'
const USER_KEY = 'user'

export const saveUser = user => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(
      USER_KEY,
      typeof user === 'object' ? JSON.stringify(user || '{}') : user,
    )
    return user
  }

  return false
}

export const getUser = () => {
  if (typeof localStorage !== 'undefined') {
    const user = localStorage.getItem(USER_KEY)
    return user
  }

  return false
}

export const setToken = token => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(USER_TOKEN_KEY, token)
    return token
  }

  return false
}

export const getToken = () => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem(USER_TOKEN_KEY)
    return token || null
  }

  return null
}

export const isLoggedIn = () => {
  return Boolean(getToken())
}

export const logout = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(USER_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    location.reload()
  }
}
