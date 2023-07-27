import * as S from'./FilterStyles'
function GenreFilterMenu({
  toggleVisibility, whatVisible
}) {
  return (
    <>
      <S.FilterButton
        className={"filter__button button-year _btn-text" +`${whatVisible === 'genre' && (' filter__button_clicked')}`}
        onClick={() => {
          if (whatVisible === 'genre') {
            toggleVisibility('')
          } else {
            toggleVisibility('genre')
          }
        }}
      >
        жанру
      </S.FilterButton>
      {whatVisible === 'genre' && (
        <div className="filter__menu filter__menu_right">
          <div className="filter__menu_item">Рок</div>
          <div className="filter__menu_item">Хип-Хоп</div>
          <div className="filter__menu_item">Поп-музыка</div>
          <div className="filter__menu_item">Техно</div>
          <div className="filter__menu_item">Инди</div>
        </div>
      )}
    </>
  );
}

export { GenreFilterMenu };
