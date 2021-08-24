import React, { useState } from "react";
import { useTypesSelector } from '../../hooks/useTypesSelector';
import Navbar from "../Navbar";
import Burger from "../Burger";
import Logo from "../Logo";
import { Flex } from "../../styles/layout";
import { HeaderStyled } from "./styled";
import { FlexDirection } from "../../utils/properties";
import { ButtonIcon } from "../Buttons/buttons";
import { FiUser, FiLogIn } from "react-icons/fi";

const Header: React.FC = () => {
  const { isDesktop } = useTypesSelector(state => state.global);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  }

  return (
    <HeaderStyled>
      <Flex direction={FlexDirection.row} width={"100%"} height={"100%"}>
        {isDesktop ? <></> :
          <Flex margin="0px 32px 0px 0px">
            <Burger open={open} action={handleOpen} />
          </Flex>
        }
        <Logo />
        <Navbar isDesktop={isDesktop} isOpen={open} />
        <Flex width="60px">
          <ButtonIcon>
            <FiUser size="24px" color="#777777"/>
          </ButtonIcon>
          <ButtonIcon>
            <FiLogIn size="24px" color="#777777"/>
          </ButtonIcon>
        </Flex>
      </Flex>
    </HeaderStyled>
  )
}

export default Header;
