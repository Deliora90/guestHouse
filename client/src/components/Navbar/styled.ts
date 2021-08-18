import styled, { css } from "styled-components";

// Props
interface StyledNavbarItemProps {
  readonly isActive: boolean;
}

// Styles
export const StyledNavbarList = styled.ul`
  display: flex;
  flex-direction: row;
`
export const StyledNavbarItem = styled.li<StyledNavbarItemProps>`
  font-family: "Montserrat";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 30px;
  white-space: nowrap;
  &:last-child{
    margin-right: 0px;
  }
  ${(props) => props.isActive && css`
    border-bottom: 4px solid ${(props) => props.theme.colors.menuItemColor};
    color: ${(props) => props.theme.colors.menuItemColor};
  `}
  `
