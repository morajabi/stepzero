import React from 'react'
import { Title } from '../Title'
import { Textarea } from '../Textarea'
import { FormWrapper } from './style'
import debounce from 'just-debounce'
import { saveComposedIdea, getComposedIdea } from '../../utils/storage'

const emptyState = { title: '', description: '' }

export class Compose extends React.Component {
  constructor(p) {
    super(p)
    this.state = p.idea || emptyState
  }

  render() {
    return (
      <FormWrapper
        onSubmit={e => {
          e.preventDefault()
          return false
        }}
      >
        <Title
          placeholder="What's the title of idea in your mind?"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <Textarea
          placeholder="How'd you describe what it does? Jot down!"
          value={this.state.description}
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
    this.setState({
      description: e.target.value,
    })
    this.debouncedPersist()
  }

  componentDidMount() {
    const { idea } = this.props

    if (idea) {
      this.setState({
        title: idea.title,
        description: idea.description,
      })
    } else {
      this.setState(this.getPersistedState())
    }
  }

  // Saving
  persistLocally = () => {
    saveComposedIdea(this.state)
  }

  debouncedPersist = debounce(() => {
    requestAnimationFrame(() => {
      this.persistLocally()
    })
  }, 250)

  getPersistedState = () => {
    const fromStorage = getComposedIdea()

    if (!fromStorage) return emptyState

    return fromStorage
  }
}
