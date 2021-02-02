import baseStyled, { DefaultTheme, ThemedStyledInterface } from 'styled-components';

// NOTE style with viewport width
const minMediaQuery = (width: number) => `
  @media (min-width:${width}px)
  `;
const maxMediaQuery = (width: number) => `
  @media (max-width:${width}px)
  `;

const medias = {
  mobile: maxMediaQuery(768),
  pad: minMediaQuery(768),
  desktop: minMediaQuery(1000)
};

const myTheme: DefaultTheme = {
  medias
};

export type Theme = typeof myTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default myTheme;
