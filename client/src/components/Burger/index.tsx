import React, { useState } from 'react';
import { BurgerButton, BurgerIcon } from "./styled";

const Burger: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <BurgerButton onClick={() => setActive((value) => !value)}>
      <BurgerIcon isActive={active} />
    </BurgerButton>
  )
}

export default Burger;
