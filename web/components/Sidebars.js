import styled from 'styled-components'

export const Box = styled.div`
  background: #f2f2f2;
  padding: 20px;
  padding-bottom: 26px;
  margin-bottom: 20px;
  border-radius: 6px;
`

export const Title = styled.h4`
  font-size: 13px;
  line-height: 1.3;
  font-weight: bold;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #b0b0b0;
  margin: 0;
  margin-bottom: 14px;
`

export const Item = styled.div`
  position: relative;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  line-height: 1.45;
  padding-left: 18px;
  color: #696969;
  margin-bottom: 9px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    border-radius: 6px;
    width: 6px;
    height: 6px;
    background: #cfcfcf;
    position: absolute;
    top: 7px;
    left: 0;
  }
`

export const LinkItem = styled(Item.withComponent('a'))`
  text-decoration: none;
  display: block;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #333;
  }
`

export const HelpBoxes = () => (
  <>
    <Box>
      <Title>suggested outline To Describe The idea</Title>
      <Item>A one sentence description as the title</Item>
      <Item>What problem it'll solve?</Item>
      <Item>Who desperately needs your product?</Item>
      <Item>Why your solution is better than others?</Item>
    </Box>
    <Box>
      <Title>Resources</Title>
      <LinkItem href="https://justinjackson.ca/goodidea">
        Is this a good idea?
      </LinkItem>
      <LinkItem href="http://www.paulgraham.com/startupideas.html">
        How to get startup ideas? (Paul Graham)
      </LinkItem>
      <LinkItem href="https://justinjackson.ca/how-not-to-validate-your-idea">
        How (not) to validate your ideas? — avoid the trap!
      </LinkItem>
      <LinkItem href="https://justinjackson.ca/ideas">
        Why most product ideas aren't that good
      </LinkItem>
      <LinkItem href="https://justinjackson.ca/validate-your-startup-idea">
        Validate your idea with thinking of 5 people
      </LinkItem>
      <LinkItem href="https://www.youtube.com/watch?v=I8KUFweN5xg">
        Don't Overthink Your World-Changing Idea (Tristan Walker — YouTube)
      </LinkItem>
      <LinkItem href="http://www.paulgraham.com/top.html">
        The top ideas in your mind (Paul Graham)
      </LinkItem>
      <LinkItem href="https://justinjackson.ca/nikki-durkin-dont-talk-about-ideas-just-do-it">
        Nikki Durkin: Don't talk about ideas — Just do it
      </LinkItem>
      <LinkItem href="https://justinjackson.ca/are-you-in-love-with-the-idea-or-with-customers">
        You're in love with the idea, but what about customers?
      </LinkItem>
      <LinkItem href="http://www.paulgraham.com/organic.html">
        What do you wish someone would make for you?
      </LinkItem>
      <LinkItem href="https://youtu.be/ZAkzs4rgjOo?t=99">
        The Most Important Decision is Getting Started (YouTube)
      </LinkItem>
      <LinkItem href="https://www.youtube.com/watch?v=sYMqVwsewSg">
        How to build the future? (Sam Altman)
      </LinkItem>
    </Box>
  </>
)
