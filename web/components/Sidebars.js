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
  line-height: 18px;
  margin-bottom: 12px;
  padding-left: 18px;
  color: #696969;

  &:before {
    content: '';
    border-radius: 6px;
    width: 6px;
    height: 6px;
    background: #cfcfcf;
    position: absolute;
    top: 6px;
    left: 0;
  }
`
