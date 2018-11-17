import React from 'react'
import Head from 'next/head'

import { Container } from '../components/Container'
import { MainFlexWrapper, SidebarWrapper } from '../components/HomeLayout'
import { Header } from '../components/Header'
import { IdeasList } from '../components/IdeasList'
import { ListNav } from '../components/ListNav'
import * as Side from '../components/Sidebars'
import { Login } from '../components/Login'
import { getIdeasList } from '../utils/api'
import { isLoggedIn } from '../utils/auth'

class ListPage extends React.Component {
  state = { ideasList: [] }

  async componentDidMount() {
    if (!isLoggedIn()) {
      location.assign(`/`)
      return
    }

    try {
      const body = await getIdeasList().then(res => res.json())
      console.log({ body })
      if (body && body.ok && body.ideasList) {
        this.setState({ ideasList: body.ideasList })
      } else {
        throw ''
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { ideasList } = this.state

    return (
      <div>
        <Head>
          <title>Your Ideas - Step Zero</title>
        </Head>

        <Container>
          <Header />
          <ListNav />
          <MainFlexWrapper>
            <IdeasList list={ideasList || []} />
            <SidebarWrapper>
              <Login />
            </SidebarWrapper>
          </MainFlexWrapper>
        </Container>
      </div>
    )
  }
}

export default ListPage
