function YearFilterMenu({toggleYearVisibility, isYearVisible, setAuthorVisible, setGenreVisible}) {
  
  return (
    <>
      <div className="filter__button button-year _btn-text" onClick={() => {toggleYearVisibility(),setAuthorVisible(false), setGenreVisible(false)}}>году выпуска</div>
      {isYearVisible && (
        <div className="filter__menu">
          <div className="filter__menu_item">2020</div>
          <div className="filter__menu_item">2022</div>
          <div className="filter__menu_item">2021</div>
        </div>
      )}
    </>
  );
}

export { YearFilterMenu };
