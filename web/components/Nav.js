import styled from 'styled-components'
import { PrimaryButton } from './Button'
import { isLoggedIn } from '../utils/auth'

export class Nav extends React.Component {
  render = () => (
    <Wrapper>
      <PrimaryButton onClick={this.saveClicked}>Save</PrimaryButton>
    </Wrapper>
  )

  saveClicked = () => {
    if (!isLoggedIn()) {
      alert('You need to login to save into cloud!')
    }
  }
}

const Wrapper = styled.nav`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
`
