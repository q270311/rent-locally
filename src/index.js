import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./core/GlobalStyle";
import { theme } from "./core/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./core/store";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
