import {
  BLUE_COLOR,
  DARK_GREY_COLOR,
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  SUPER_LIGHT_GREY_COLOR,
  WHITE_COLOR,
  ORANGE_COLOR,
  MEDIUM_GREY_COLOR,
  TRANSLUCENT_BLUE_COLOR
} from "./consts";

export const theme = {
  colors: {
    primaryButton: {
      ftColor: WHITE_COLOR,
      bgColor: BLUE_COLOR,
      brColor: TRANSLUCENT_BLUE_COLOR
    },
    flatButton:{
      ftColor: BLUE_COLOR,
      bgColor: "transparent",
      brColor: BLUE_COLOR
    },
    primaryFontColor: GREY_COLOR,
    secondaryFontColor: DARK_GREY_COLOR,
    tertiaryFontColor: WHITE_COLOR,
    bgColor: WHITE_COLOR,
    substrateColor: SUPER_LIGHT_GREY_COLOR,
    menuItemColor: BLUE_COLOR,
    footerBgColor: LIGHT_GREY_COLOR,
    additionalElementColor: ORANGE_COLOR,
    footerBootomColor: MEDIUM_GREY_COLOR,
  },
  media: {
    phone: 480.98,
    tablet: 768.98,
    tabletLandscape: 1024.98,
    desktop: 1600.98
  },
  zIndexes: {
    background: 0,
    pageWrapper: 1,
    siteHeader: 2,
    siteFooter: 3,
    modal: 4
  },
  mixins: {
    adaptiveSizeWidth: (minSizeElement: string, diffSizes: string): string => `calc(${minSizeElement} + (${diffSizes} + ${diffSizes} * 0.7) * ((100vw - 414px) / 1920))`,
    fontStyle: (family?: string, style?: string, weight?: number, size?: string, lineHeight?: string): string => `
      font-family: ${family ?? "Montserrat"};
      font-style: ${style ?? "normal"};
      font-weight: ${weight ?? 500};
      font-size: ${size ?? "14px"};
      ${lineHeight && `line-height:${lineHeight}`};
    `
  }
}
