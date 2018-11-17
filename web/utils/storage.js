const COMPOSE_STORAGE = 'compose'

export const getComposedIdea = () => {
  if (typeof localStorage !== 'undefined') {
    const fromStorage = localStorage.getItem(COMPOSE_STORAGE)

    if (!fromStorage) {
      return null
    }

    try {
      let composedIdea = JSON.parse(fromStorage)
      return composedIdea
    } catch (err) {
      return null
    }
  }
}

export const saveComposedIdea = idea => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(COMPOSE_STORAGE, JSON.stringify(idea))
  }
}
