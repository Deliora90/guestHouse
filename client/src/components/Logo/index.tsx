import React from 'react';
import { Link } from 'react-router-dom';
import { LogoStyled } from "./styled";
const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoStyled>Valentina<br/>Guest House</LogoStyled>
    </Link>
  )
}

export default Logo
