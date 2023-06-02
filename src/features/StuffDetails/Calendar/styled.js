import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`

export const StyledCalendarContent = styled.div`
  width: 100%;
`
