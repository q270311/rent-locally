import styled, { css } from 'styled-components'

export const Button = styled.button`
  margin: 20px;

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`
