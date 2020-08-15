import {createGlobalStyle} from 'styled-components';
import {fontFace, MAIN_FONT_COLOR} from '../../variables';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ${fontFace(`Roboto`, `Roboto-Regular`, `normal`, `normal`)}
  ${fontFace(`Work-Sans`, `WorkSans-Bold`, `normal`, `normal`)}

  body {
    box-sizing: border-box;
    color: ${MAIN_FONT_COLOR};
    height: 100%;
    line-height: 130%;
    font-family: 'Work-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 18px;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
