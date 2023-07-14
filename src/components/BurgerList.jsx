function BurgerList({ isVisible }) {
    console.log(isVisible);
    return (
      <div className="nav__menu menu">
        { isVisible  && (
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        )}
      </div>
    );
  }
  
  export { BurgerList };
  