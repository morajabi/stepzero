import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import { withRouter } from 'next/router'

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
  state = { idea: null, error: null, loading: false }

  async fetch() {
    const {
      router: { query },
    } = this.props
    this.setState({ loading: true })
    if (query && query.idea_hash) {
      const idea = await getIdeaByHash(query.idea_hash).then(res => res.json())
      if (idea.ok === false) {
        this.setState({ idea: null, error: true, loading: false })
        return
      }

      this.setState({ idea: idea, loading: false })
    } else {
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    this.fetch()
  }

  render() {
    const { idea, error, loading } = this.state
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
          {loading || (
            <MainFlexWrapper>
              <Compose idea={idea} disabled={readonlyMode} />
              <SidebarWrapper>
                <Login />
                {readonlyMode || <Side.HelpBoxes />}
              </SidebarWrapper>
            </MainFlexWrapper>
          )}
        </Container>
      </div>
    )
  }
}

export default withRouter(Index)
