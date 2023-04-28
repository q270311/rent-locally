import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  margin: 20px;

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`
