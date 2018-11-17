import Head from 'next/head'

import { Compose } from '../components/Compose'
import { Container } from '../components/Container'
import { MainFlexWrapper, SidebarWrapper } from '../components/HomeLayout'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import * as Side from '../components/Sidebars'

export default () => (
  <div>
    <Head>
      <title>Step Zero</title>
    </Head>

    <Container>
      <Header />
      <Nav />
      <MainFlexWrapper>
        <Compose />
        <SidebarWrapper>
          <Side.Box>
            <Side.Title>suggested outline To Describe The idea</Side.Title>
            <Side.Item>A one sentence description as the title</Side.Item>
            <Side.Item>What problem it'll solve?</Side.Item>
            <Side.Item>Who desperately needs your product?</Side.Item>
            <Side.Item>Why your solution is better than others?</Side.Item>
          </Side.Box>
          <Side.Box>
            <Side.Title>Resources</Side.Title>
            <Side.LinkItem href="https://justinjackson.ca/goodidea">
              Is this a good idea?
            </Side.LinkItem>
            <Side.LinkItem href="http://www.paulgraham.com/startupideas.html">
              How to get startup ideas? (Paul Graham)
            </Side.LinkItem>
            <Side.LinkItem href="https://justinjackson.ca/how-not-to-validate-your-idea">
              How (not) to validate your ideas? — avoid the trap!
            </Side.LinkItem>
            <Side.LinkItem href="https://justinjackson.ca/ideas">
              Why most product ideas aren't that good
            </Side.LinkItem>
            <Side.LinkItem href="https://justinjackson.ca/validate-your-startup-idea">
              Validate your idea with thinking of 5 people
            </Side.LinkItem>
            <Side.LinkItem href="https://www.youtube.com/watch?v=I8KUFweN5xg">
              Don't Overthink Your World-Changing Idea (Tristan Walker —
              YouTube)
            </Side.LinkItem>
            <Side.LinkItem href="http://www.paulgraham.com/top.html">
              The top ideas in your mind (Paul Graham)
            </Side.LinkItem>
            <Side.LinkItem href="https://justinjackson.ca/nikki-durkin-dont-talk-about-ideas-just-do-it">
              Nikki Durkin: Don't talk about ideas — Just do it
            </Side.LinkItem>
            <Side.LinkItem href="https://justinjackson.ca/are-you-in-love-with-the-idea-or-with-customers">
              You're in love with the idea, but what about customers?
            </Side.LinkItem>
            <Side.LinkItem href="http://www.paulgraham.com/organic.html">
              What do you wish someone would make for you?
            </Side.LinkItem>
            <Side.LinkItem href="https://youtu.be/ZAkzs4rgjOo?t=99">
              The Most Important Decision is Getting Started (YouTube)
            </Side.LinkItem>
            <Side.LinkItem href="https://www.youtube.com/watch?v=sYMqVwsewSg">
              How to build the future? (Sam Altman)
            </Side.LinkItem>
          </Side.Box>
        </SidebarWrapper>
      </MainFlexWrapper>
    </Container>
  </div>
)
