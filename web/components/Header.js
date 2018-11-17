import styled from 'styled-components'

export const Header = () => (
  <Wrapper>
    <Img src="/static/illustration@2x.png" height="163px" />

    <Texts>
      <Heading>Step Zero</Heading>
      <Subtitle>Jot down ideas as soon as they come up!</Subtitle>
    </Texts>
  </Wrapper>
)

const Wrapper = styled.header`
  display: flex;
  align-items: center;

  margin-top: 40px;
`

const Texts = styled.div`
  flex-grow: 1;
  padding-left: 58px;
`

const Img = styled.img`
  flex-shrink: 0;
`

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: normal;
  line-height: 1.3;
  color: #222;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Subtitle = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 22px;
  font-weight: normal;
  line-height: 1.3;
  max-width: 280px;
  color: #777;
`
