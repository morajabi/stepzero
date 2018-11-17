import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const IdeasList = ({ list }) => {
  return (
    <Wrapper>
      <Heading>Your Ideas ({list ? list.length : 0})</Heading>
      {list && list.length > 0
        ? list.map(idea => (
            <Link
              key={idea.id}
              href={`/?idea_hash=${idea.publicHash}`}
              passHref={true}
            >
              <ItemWrapper>
                <Title>{idea.title}</Title>
                <Desc>{idea.description}</Desc>
              </ItemWrapper>
            </Link>
          ))
        : 'No ideas yet!'}
    </Wrapper>
  )
}

// Style
const Wrapper = styled.div`
  flex-grow: 1;
`
const Heading = styled.h1`
  margin: 0;
  margin-bottom: 24px;

  font-weight: bold;
  font-size: 24px;
  color: #b2b2b2;
`
const ItemWrapper = styled.a`
  padding: 12px;
  padding-right: 0;
  margin-left: -12px;
  display: block;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
`

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #444;
  text-decoration: none;
`

const Desc = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
  color: #999;

  max-width: 100%;
  text-overflow: ellipsis;
  word-break: keep-all;
`
