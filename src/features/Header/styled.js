import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0px;
  margin: 0px;
  width: 100%;
  padding: 30px 30px;
  //background-color: ${({ theme }) => theme.color.black};
  background-color: black;
  height: 150px;
  color: white;
  transition: height 1s;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      font-size: small;
      padding: 5px 30px;
      height: 80px;
    `}
`;

export const Subtitle = styled.p`
  margin: 0px;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      display: none;
    `}
`;
