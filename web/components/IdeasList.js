import React from 'react'
import styled from 'styled-components'

export const IdeasList = ({ list }) => {
  return (
    <Wrapper>
      <Heading>Your Ideas</Heading>
      {list && list.length > 0
        ? list.map(idea => (
            <ItemWrapper key={idea.id}>
              <Title>{idea.title}</Title>
              <Desc>{idea.description}</Desc>
            </ItemWrapper>
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
  font-size: 16px;
  color: #444;
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
  margin-top: 6px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #999;

  max-width: 100%;
  text-overflow: ellipsis;
  word-break: keep-all;
`
