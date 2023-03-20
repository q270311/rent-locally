import styled from "styled-components";

export const Wrapper = styled.div`  
  max-width: 1200px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Img = styled.img`    
  max-width: 324px;
`;