import React from 'react'
import Head from 'next/head'

import { Compose } from '../components/Compose'
import { Container } from '../components/Container'
import { MainFlexWrapper, SidebarWrapper } from '../components/HomeLayout'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import * as Side from '../components/Sidebars'
import { Login } from '../components/Login'
import { getIdeaByHash } from '../utils/api'

class Index extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query)
    if (query && query.idea_hash) {
      const idea = await getIdeaByHash(query.idea_hash).then(res => res.json())
      return { idea: idea }
    }

    return {}
  }

  render() {
    const { idea } = this.props

    console.log({ idea })

    return (
      <div>
        <Head>
          <title>Step Zero</title>
        </Head>

        <Container>
          <Header />
          <Nav idea={idea} />
          <MainFlexWrapper>
            <Compose idea={idea} />
            <SidebarWrapper>
              <Login />
              <Side.HelpBoxes />
            </SidebarWrapper>
          </MainFlexWrapper>
        </Container>
      </div>
    )
  }
}

export default Index
