import {createGlobalStyle} from 'styled-components';
import {MAIN_FONT_COLOR} from '../../variables';
import {setFontFace} from '../../assets/setFontFace';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ${setFontFace(`Roboto`, `Roboto-Regular`, `normal`, `normal`)}
  ${setFontFace(`Work-Sans`, `WorkSans-Bold`, `normal`, `normal`)}
  ${setFontFace(`Roboto`, `Roboto-Medium`, 500, `normal`)}
  ${setFontFace(`Roboto`, `Roboto-Bold`, `bold`, `normal`)}

  body {
    box-sizing: border-box;
    color: ${MAIN_FONT_COLOR};
    height: 100%;
    line-height: 130%;
    font-family: 'Roboto','Work-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 18px;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
