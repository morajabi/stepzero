import Head from 'next/head'

import { Compose } from '../components/Compose'
import { Container } from '../components/Container'
import { MainFlexWrapper, Sidebar } from '../components/HomeLayout'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

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
        <Sidebar>asjdknasd</Sidebar>
      </MainFlexWrapper>
    </Container>
  </div>
)
