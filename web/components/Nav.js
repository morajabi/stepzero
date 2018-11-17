import styled from 'styled-components'
import { PrimaryButton,, SecondaryButtonLink } from './Button'
import { isLoggedIn } from '../utils/auth'
import { saveIdea, updateIdea } from '../utils/api'
import { getComposedIdea, saveComposedIdea } from '../utils/storage'

export class Nav extends React.Component {
  state = { saving: false, saved: false }

  render() {
    const { saving, saved } = this.state
    const { idea } = this.props
    return (
      <Wrapper>
        <SecondaryButtonLink href="/list" target="_blank">
          Go to list
        </SecondaryButtonLink>

        <Space />

        <Status>
          {!saving && saved ? 'Saved to cloud!' : 'We auto-save locally!'}
        </Status>

        {saving ? (
          <PrimaryButton>Saving...</PrimaryButton>
        ) : idea ? (
          <PrimaryButton onClick={this.updateClicked}>Update</PrimaryButton>
        ) : (
          <PrimaryButton onClick={this.saveClicked}>Save</PrimaryButton>
        )}
      </Wrapper>
    )
  }

  saveClicked = async () => {
    if (!isLoggedIn()) {
      alert('You need to login to save into cloud!')
    }

    const idea = getComposedIdea()

    this.setState({ saving: true })

    if (idea) {
      saveIdea(idea)
        .then(res => res.json())
        .then(savedIdea => {
          const { publicHash } = savedIdea

          // Set loading to false
          this.setState({ saving: false, saved: true })

          if (savedIdea && savedIdea.publicHash) {
            // Redirect to edit
            // Router.push(`/?idea_hash=${publicHash}`)

            // Clear new idea
            saveComposedIdea({ id: 'new', title: '', description: '' })
            location.assign(`/?idea_hash=${publicHash}`)
          }
        })
        .catch(err => {
          this.setState({ saving: false, saved: false })
          alert(`Could not save the idea: ${err} Reach me twitter.com/morajabi`)
        })
    }
  }

  // UPDATE
  updateClicked = async () => {
    if (!isLoggedIn()) {
      alert('You need to login to save into cloud!')
    }

    this.performUpdate()
  }

  performUpdate = () => {
    const { idea } = this.props
    const editedIdea = getComposedIdea(idea.id)

    this.setState({ saving: true })

    if (idea) {
      updateIdea({ ...idea, ...editedIdea })
        .then(res => res.json())
        .then(body => {
          // Set loading to false
          this.setState({ saving: false, saved: true })

          // Router.push(`/?idea_hash=${publicHash}`)
        })
        .catch(err => {
          this.setState({ saving: false, saved: false })
          alert(
            `Could not update the idea: ${err} Reach me twitter.com/morajabi`,
          )
        })
    }
  }

  interval = null

  startAutoUpdate = () => {
    this.interval && clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (isLoggedIn()) {
        this.performUpdate()
      }
    }, 1000 * 35)
  }

  componentDidUpdate() {
    if (this.props.idea && this.props.idea.id) {
      this.startAutoUpdate()
    }
  }

  componentDidMount() {
    if (this.props.idea && this.props.idea.id) {
      this.startAutoUpdate()
    }
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval)
  }
}

const Wrapper = styled.nav`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Status = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  margin-right: 16px;
  color: #b2b2b2;
`

const Space = styled.div`
  margin-left: auto;
  flex-grow: 1;
`
