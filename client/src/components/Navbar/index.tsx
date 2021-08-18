import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { publicRoutes } from "../../router/routes";
import { StyledNavbarList, StyledNavbarItem } from "./styled";

const NavbarItem = (props: { href: string, label: string, exact: boolean }) => {
  const match = useRouteMatch({
    path: props.href,
    exact: props.exact
  });
  return (
    <StyledNavbarItem isActive={match ? true : false}>
      <Link to={props.href}>{props.label}</Link>
    </StyledNavbarItem>
  )
}

const Navbar: React.FC = () => {
  return (
    <StyledNavbarList>
      {publicRoutes.map(({ inNavbar, path, label, exact }, index) => {
        return inNavbar && <NavbarItem key={index} href={path} label={label} exact={exact} />
      })}
    </StyledNavbarList>
  )
}

export default Navbar;
