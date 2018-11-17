import React from 'react'
import Head from 'next/head'
import Error from 'next/error'

import { Compose } from '../components/Compose'
import { Container } from '../components/Container'
import {
  MainFlexWrapper,
  SidebarWrapper,
  ReadonlyWrapper,
} from '../components/HomeLayout'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import * as Side from '../components/Sidebars'
import { Login } from '../components/Login'
import { getIdeaByHash } from '../utils/api'
import { isLoggedIn } from '../utils/auth'

class Index extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query)
    if (query && query.idea_hash) {
      const idea = await getIdeaByHash(query.idea_hash).then(res => res.json())
      if (idea.ok === false) {
        return { idea: null, error: true }
      }
      return { idea: idea }
    }

    return {}
  }

  render() {
    const { idea, error } = this.props
    const loggedIn = typeof window === 'undefined' ? false : isLoggedIn()
    const readonlyMode = idea && !loggedIn

    if (error) {
      return <Error statusCode={404} />
    }

    return (
      <div>
        <Head>
          <title>
            {readonlyMode ? 'View an Idea' : 'Write an Idea'} - Step Zero
          </title>
        </Head>

        <Container>
          <Header />
          {readonlyMode || <Nav idea={idea} />}
          <MainFlexWrapper>
            <Compose idea={idea} disabled={readonlyMode} />
            <SidebarWrapper>
              <Login />
              {readonlyMode || <Side.HelpBoxes />}
            </SidebarWrapper>
          </MainFlexWrapper>
        </Container>
      </div>
    )
  }
}

export default Index
