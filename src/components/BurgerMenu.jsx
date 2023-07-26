import React, { useState } from 'react';
import { BurgerIcon } from './BurgerIcon';
import { BurgerList } from './BurgerList';

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <BurgerIcon toggleVisibility={toggleVisibility} />
      <BurgerList isVisible={visible} />
    </nav>
  );
};

export { BurgerMenu };
