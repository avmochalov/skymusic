import React from 'react';
import { BurgerMenu } from './BurgerMenu';
const { useState } = React;
function BurgerIcon() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <BurgerMenu isVisible={visible} />
    </>
  );
}

export { BurgerIcon };
