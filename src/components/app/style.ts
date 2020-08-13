import {createGlobalStyle} from 'styled-components';

export function fontFace(name: string, src: string, fontWeight: string | number = `normal`, fontStyle = `normal`) {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require(`../../fonts/` + src + `.eot`)});
        src: url(${require(`../../fonts/` + src + `.eot`)}?#iefix) format("embedded-opentype"),
             url(${require(`../../fonts/` + src + `.woff`)}) format("woff"),
             url(${require(`../../fonts/` + src + `.ttf`)}) format("truetype"),
             url(${require(`../../fonts/` + src + `.svg`)}#${name}) format("svg");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export const MAIN_FONT_COLOR = `#1F1E25`;

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
