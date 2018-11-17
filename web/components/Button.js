import styled from 'styled-components'

export const PrimaryButton = styled.button`
  border: none;
  background: #333;
  color: white;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-weight: bold;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  height: 36px;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  padding-left: 18px;
  padding-right: 18px;

  cursor: pointer;
  transition: box-shadow 140ms ease;

  &:hover {
    box-shadow: none;
  }

  &:active {
    background: black;
  }
`

export const PrimaryButtonLink = PrimaryButton.withComponent('a')
