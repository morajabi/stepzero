const COMPOSE_STORAGE = 'compose'

export const getComposedIdea = ideaId => {
  if (typeof localStorage !== 'undefined') {
    const fromStorage = localStorage.getItem(
      `${COMPOSE_STORAGE}.${ideaId || 'new'}`,
    )

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
    let ideaId = idea.id || 'new'
    localStorage.setItem(`${COMPOSE_STORAGE}.${ideaId}`, JSON.stringify(idea))
  }
}
