import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Textarea = styled(TextareaAutosize)`
  border: none;
  background: none;

  width: 100%;
  display: block;
  padding-top: 9px;

  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  min-height: 30px;

  outline: none;
`
