const USER_ID_KEY = 'userId'

export const getUserId = () => {
  if (typeof localStorage !== 'undefined') {
    const userId = localStorage.getItem(USER_ID_KEY)
    return userId || null
  }

  return null
}

export const isLoggedIn = () => {
  return Boolean(getUserId())
}
