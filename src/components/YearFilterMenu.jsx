function YearFilterMenu({ toggleVisibility, whatVisible }) {
  return (
    <>
      <div
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
      </div>
      {whatVisible === 'year' && (
        <div className="filter__menu filter__menu_center">
          <div className="filter__menu_item">2020</div>
          <div className="filter__menu_item">2022</div>
          <div className="filter__menu_item">2021</div>
        </div>
      )}
    </>
  );
}

export { YearFilterMenu };
