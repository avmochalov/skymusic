import React, { useState } from 'react';
import { BurgerIcon } from './BurgerIcon';
import { BurgerList } from './BurgerList';

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <BurgerIcon toggleVisibility={toggleVisibility}/>
      <BurgerList isVisible={visible}/>
    </>
  );
};

export { BurgerMenu };
