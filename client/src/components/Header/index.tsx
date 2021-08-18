import React from "react";
import Navbar from "../Navbar";
import Burger from "../Burger";
import Logo from "../Logo";
import { Flex } from "../../styles/layout";
import { FlexDirection } from "../../utils/properties";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Flex direction={FlexDirection.row}>
        <Burger />
        <Logo />
        <Navbar />
        <div>
          Контакты
        </div>
      </Flex>
    </header>
  )
}

export default Header;
