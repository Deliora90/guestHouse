import styled, { css } from "styled-components";

// Props
interface StyledNavbarListProps {
  readonly isDesktop?: boolean;
  readonly isOpen?:boolean;
}
interface StyledNavbarItemProps {
  readonly isActive: boolean;
  readonly isDesktop?: boolean;
}

// Styles
export const StyledNavbarList = styled.ul<StyledNavbarListProps>`
  display: flex;
  flex-direction: row;
  margin: 0;
  ${(props) => !props.isDesktop && css`
    background-color: ${(props) => props.theme.colors.bgColor};
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    left: -100%;
    height: 100vh;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.25);
    transition: left 0.3s ease 0s;
  `}
  ${(props) => props.isOpen && css`
    left: 0;
  `}
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
  ${(props) => !props.isDesktop && css`
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 30px 0px;
    border-bottom: none;
  `}
`
