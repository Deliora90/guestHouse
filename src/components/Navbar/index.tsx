import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { publicRoutes } from "../../router/routes";
import { FlexDirection } from '../../utils/properties';
import { StyledNavbarList, StyledNavbarItem } from "./styled";

interface NavbarProps{
  direction?: FlexDirection
  isDesktop?: boolean;
  isOpen?: boolean;
}

const NavbarItem = (props: { href: string, label: string, exact: boolean, isDesktop?: boolean }) => {
  const match = useRouteMatch({
    path: props.href,
    exact: props.exact
  });
  return (
    <StyledNavbarItem isActive={match ? true : false} isDesktop={props.isDesktop}>
      <Link to={props.href}>{props.label}</Link>
    </StyledNavbarItem>
  )
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <StyledNavbarList {...props}>
      {publicRoutes.map(({ inNavbar, path, label, exact }, index) => {
        return inNavbar && <NavbarItem key={index} href={path} label={label} exact={exact} isDesktop={props.isDesktop}/>
      })}
    </StyledNavbarList>
  )
}

export default Navbar;
