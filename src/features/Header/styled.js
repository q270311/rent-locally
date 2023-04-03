import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  margin: 0px;
  padding: 50px 30px;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const TitleLine1 = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;
export const TitleLine2 = styled.p`
  font-weight: bold;
  font-size: 30px;
  font-weight: bold;
  text-align: right;
`;
