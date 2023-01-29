import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  height: 100%;
}

body {
  min-height: 100%;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyles;
