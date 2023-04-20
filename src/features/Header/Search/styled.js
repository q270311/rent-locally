import styled, { css } from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  width: 400px;
  height: 30px;
  border: 0;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      order: 2;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    order: 2;
    width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    order: 0;
    height: 27px;
  }
`

export const SearchIcon = styled.img`
  padding: 0 10px 0 8px;
  height: 20px;
  color: ${({ theme }) => theme.color.grey};
`

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.cuttySark};
  width: 100%;
  border: none;
  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
  outline: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: 44px;
    border-radius: 33px;
  }
`
