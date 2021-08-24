import React from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { ButtonIcon } from "../Buttons/buttons";

interface BurgerProps {
  open: boolean;
  action: () => void;
}

const Burger: React.FC<BurgerProps> = (props: BurgerProps) => {
  return (
    <ButtonIcon onClick={() => props.action()}>
      {props.open ? <FiX size="24px"/> : <FiMenu size="24px"/>}
    </ButtonIcon>
  )
}

export default Burger;
