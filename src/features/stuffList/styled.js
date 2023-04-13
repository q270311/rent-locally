import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`  
  max-width: 1200px;
  margin: 180px auto;
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

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;

  background-color: ${({ theme }) => theme.color.white};;
  border: 1px solid ${({ theme }) => theme.color.cuttySark};
  border-radius: 20px;

  -webkit-box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);

  transition: transform 1s linear;
  overflow: hidden;

  &:hover {
    transform: scale(1.05)
  }
`

export const Img = styled.img`    
  max-width: 324px;
  border-radius: 20px;
  margin:10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    //color: ${({ theme }) => theme.color.black};
`;