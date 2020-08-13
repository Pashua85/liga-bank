export function fontFace(name: string, src: string, fontWeight: string | number = `normal`, fontStyle = `normal`) {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require(`./fonts/` + src + `.eot`)});
        src: url(${require(`./fonts/` + src + `.eot`)}?#iefix) format("embedded-opentype"),
             url(${require(`./fonts/` + src + `.woff`)}) format("woff"),
             url(${require(`./fonts/` + src + `.ttf`)}) format("truetype"),
             url(${require(`./fonts/` + src + `.svg`)}#${name}) format("svg");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export const MAIN_FONT_COLOR = `#1F1E25`;
export const HOVER_FONT_COLOR = `rgba(31,30,37,.6)`;

export const DEVICE = {
  MOBILE: `(max-width: 767px)`,
  TABLET: `(max-width: 1023px)`,
};
