import { COLORS } from "./colors";
import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  :root {
    --header-height: 80px;
    --theme-transition-duration: .45s;

    --container-padding: 20px;
    --body-padding: 80px;

    font-size: 9px;
    font-family: Inter, Helvetica, -apple-system, sans-serif;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }

    ${Object.entries(COLORS).map(([name, color]) => {
      return `--color-${name}: ${color};\n`;
    })}
  }

  body {
    position: relative;
    background-color: var(--color-body);
    color: var(--color-text);
    transition: background-color var(--theme-transition-duration), color var(--theme-transition-duration);
    padding-bottom: var(--body-padding);
  }
`;

export default GlobalStyle;