import React from 'react';
function BurgerIcon({ toggleVisibility }) {
  return (
    <div className="nav__burger burger" onClick={toggleVisibility}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
}

export { BurgerIcon };
