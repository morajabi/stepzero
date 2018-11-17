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

    const localVersion = this.getPersistedState()

    if (idea && !localVersion.title) {
      this.setState({
        ...idea,
        title: idea.title,
        description: idea.description,
      })
    } else {
      this.setState(localVersion)
    }
  }

  // Saving
  persistLocally = () => {
    const { idea } = this.props
    const id = (idea && idea.id) || 'new'
    saveComposedIdea({ ...this.state, id })
  }

  debouncedPersist = debounce(() => {
    requestAnimationFrame(() => {
      this.persistLocally()
    })
  }, 250)

  getPersistedState = () => {
    const { idea } = this.props
    const id = (idea && idea.id) || 'new'

    const fromStorage = getComposedIdea(id)

    if (!fromStorage) return emptyState

    return fromStorage
  }
}
