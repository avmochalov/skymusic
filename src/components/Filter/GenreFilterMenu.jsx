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
        <S.FilterMenuRight  className="filter__menu filter__menu_right">
          <S.FilterMenuItem className="filter__menu_item">Рок</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Хип-Хоп</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Поп-музыка</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Техно</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Инди</S.FilterMenuItem>
        </S.FilterMenuRight>
      )}
    </>
  );
}

export { GenreFilterMenu };
