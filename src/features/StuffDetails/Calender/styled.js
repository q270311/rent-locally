import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  //display: grid;
  //grid-template-columns: repeat(7, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 90px auto;
  }
`;
