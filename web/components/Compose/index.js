import React from 'react'
import { Title } from '../Title'
import { Textarea } from '../Textarea'
import { FormWrapper } from './style'
import debounce from 'just-debounce'

const emptyState = { title: '', desc: '' }
const COMPOSE_STORAGE = 'compose'

export class Compose extends React.Component {
  constructor(p) {
    super(p)

    if (typeof localStorage !== 'undefined') {
      this.state = this.getPersistedState()
    } else {
      this.state = emptyState
    }
  }

  render() {
    return (
      <FormWrapper>
        <Title
          placeholder="What's the title of idea in your mind?"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <Textarea
          placeholder="How'd you describe what it does? Jot down!"
          value={this.state.desc}
          onChange={this.descChanged}
        />
      </FormWrapper>
    )
  }

  titleChanged = e => {
    this.setState({ title: e.target.value })
    this.debouncedPersist()
  }

  descChanged = e => {
    this.setState({ desc: e.target.value })
    this.debouncedPersist()
  }

  componentDidMount() {
    this.setState(this.getPersistedState())
  }

  // Saving
  persistLocally = () => {
    localStorage.setItem(COMPOSE_STORAGE, JSON.stringify(this.state))
  }

  debouncedPersist = debounce(() => {
    requestAnimationFrame(() => {
      this.persistLocally()
    })
  }, 250)

  getPersistedState = () => {
    const fromStorage = localStorage.getItem(COMPOSE_STORAGE)

    if (!fromStorage) return emptyState

    try {
      let state = JSON.parse(fromStorage)
      return state
    } catch (err) {
      return emptyState
    }
  }
}
