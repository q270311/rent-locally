import styled from "styled-components";

export const Wrapper = styled.main`  
  max-width: 1200px;
  margin: 180px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    justify-content: center;
    align-items: center;
    margin: 80px auto;
  }
`;

export const Img = styled.img`    
  max-width: 324px;
  border-radius: 20px;
  margin:10px;
`;
