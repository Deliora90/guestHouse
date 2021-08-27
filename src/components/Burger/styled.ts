import styled, { css } from "styled-components";
// Props
interface StyledBurgerIconProps {
  readonly isActive: boolean;
}

// Styles
export const BurgerIcon = styled.span<StyledBurgerIconProps>`
  height: 3px;
  width: 24px;
  background-color: ${(props) => props.theme.colors.primaryFontColor};
  ${(props) => props.isActive && css`
    background-color: transparent;
  `}
  &::before, &::after{
    content: "";
    position: absolute;
    left: 0;
    height: 3px;
    width: 24px;
    background-color: ${(props) => props.theme.colors.primaryFontColor};
  }
  &::before{
    top: 50%;
    transform: translateY(-50%);
    ${(props) => props.isActive && css`
      width: 27px;
      transform: rotate(-45deg) translateY(-50%);
    `}
  }
  &::after{
    bottom: 0;
    ${(props) => props.isActive && css`
      width: 27px;
      bottom: 45%;
      transform: rotate(45deg) translate(0px, 50%);
    `}
  }
`;
