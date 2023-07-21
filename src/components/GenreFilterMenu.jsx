function GenreFilterMenu({
  toggleGenreVisibility,
  isGenreVisible,
  setAuthorVisible,
  setYearVisible,
}) {
  return (
    <>
      <div
        className="filter__button button-year _btn-text"
        onClick={() => {
          toggleGenreVisibility(),
            setAuthorVisible(false),
            setYearVisible(false);
        }}
      >
        жанру
      </div>
      {isGenreVisible && (
        <div className="filter__menu">
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
