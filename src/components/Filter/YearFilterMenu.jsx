import * as S from'./FilterStyles'
function YearFilterMenu({ toggleVisibility, whatVisible }) {
  return (
    <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${whatVisible === 'year' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'year') {
            toggleVisibility('');
          } else {
            toggleVisibility('year');
          }
        }}
      >
        году выпуска
      </S.FilterButton>
      {whatVisible === 'year' && (
        <S.FilterMenuCenter className="filter__menu filter__menu_center">
          <S.FilterMenuItem className="filter__menu_item">2020</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">2022</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">2021</S.FilterMenuItem>
        </S.FilterMenuCenter>
      )}
    </>
  );
}

export { YearFilterMenu };
