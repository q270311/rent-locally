import styled from "styled-components";

export const Wrapper = styled.main`  
  max-width: 1200px;
  margin: 180px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 90px auto;
  }
`;

export const Img = styled.img`    
  max-width: 324px;
  border-radius: 20px;
  margin:10px;
`;
