import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 100px auto;
    background-color: ${({ theme }) => theme.color.grey};
  }
`;