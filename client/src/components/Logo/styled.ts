import styled from "styled-components";
export const LogoStyled = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.theme.mixins.adaptiveSizeWidth("12px", "14")};
  line-height: calc(15px + (17 + 17 * 0.7) * ((100vw - 414px) / 1920));
  white-space: nowrap;
  color: ${(props) => props.theme.colors.primaryFontColor};
  text-align: left;
  @media screen and (max-width:${(props) => props.theme.media.tabletLandscape}px){
    text-align: center;
  }
`
