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
        </SidebarWrapper>
      </MainFlexWrapper>
    </Container>
  </div>
)
