import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: none;
  background: none;

  border-radius: 3px;
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
`

export const PrimaryButton = styled.button`
  ${buttonStyles};

  background: #333;
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:active {
    background: black;
  }
`

export const PrimaryButtonLink = PrimaryButton.withComponent('a')

export const SecondaryButton = styled.button`
  ${buttonStyles};

  background: #f2f2f2;
  color: #b0b0b0;

  &:active {
    background: #eee;
  }
`

export const SecondaryButtonLink = SecondaryButton.withComponent('a')
