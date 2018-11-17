import 'isomorphic-unfetch'
import { getToken } from './auth'

const API_BASE =
  process.env.NODE_ENV === 'production'
    ? `https://stepzero-api.now.sh`
    : 'http://localhost:4000'

const getHeaders = () => {
  let header = {
    'Content-Type': 'application/json; charset=utf-8',
  }

  let token = getToken()
  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return header
}

export const sendLoginEmail = ({ email }) =>
  fetch(`${API_BASE}/send-login-email`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email }),
  })

export const loginByCode = ({ email, loginCode }) =>
  fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email, loginCode }),
  })

export const getIdeaByHash = hash =>
  fetch(`${API_BASE}/idea?hash=${hash}`, {
    method: 'GET',
    headers: getHeaders(),
  })

export const saveIdea = ({ title, description }) =>
  fetch(`${API_BASE}/save-idea`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ title, description }),
  })

export const updateIdea = ({ id, title, description }) =>
  fetch(`${API_BASE}/update-idea`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ id, title, description }),
  })
