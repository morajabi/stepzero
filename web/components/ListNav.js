import styled from 'styled-components'
import Link from 'next/link'
import { PrimaryButtonLink } from './Button'

export class ListNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link href="/" passHref={true}>
          <PrimaryButtonLink>Compose New</PrimaryButtonLink>
        </Link>
      </Wrapper>
    )
  }
}

const Wrapper = styled.nav`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
