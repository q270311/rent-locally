import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: ${({ theme }) => theme.color.cuttySark};

  -webkit-box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 20px -14px rgba(66, 68, 90, 1);
  z-index: 999;
`;

export const Wrapper = styled.div`
  height: 150px;
  max-width: 1200px;
  margin: 0px auto;
  padding: 5px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  color: ${({ theme }) => theme.color.lightGrey};
  transition: height 1s;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: small;
      height: 80px;
      margin-bottom: 0px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: small;
    height: 80px;
    margin-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    display: flex;
    flex-direction: column;
    font-size: small;
    height: auto;
    margin-bottom: 0px;
  }
`;

export const WrapperSubtitle = styled.div`
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: none;
  }
`;

export const Title = styled.h1`
  grid-column: span 2;
  display: block;
  margin: 0px 20px 0px 0px;
  padding: 0px;
  letter-spacing: 2px;
`;

export const Subtitle = styled.p`
  display: block;
  margin: 0px;
  padding: 0px;
`;

export const Button = styled.button`
  margin: 0px 20px;
  padding: 0px;
  min-width: 100px;
  border: none;
  background-color: ${({ theme }) => theme.color.cuttySark};
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: large;

  &:hover {
    filter: brightness(150%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    height: 30px;
    width: 250px;
  }
`;
