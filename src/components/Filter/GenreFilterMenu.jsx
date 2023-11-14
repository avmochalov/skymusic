import { useEffect, useState } from 'react';
import * as S from './FilterStyles';
function GenreFilterMenu({
  toggleVisibility,
  whatVisible,
  tracks,
  setGenreFilterArray,
  genreFilterArray
}) {
  const [genreArray, setGenreArray] = useState(null);
  useEffect(() => {
    const uniqueGenre = new Set(tracks.map((track) => track.genre));
    setGenreArray(Array.from(uniqueGenre));
  }, []);
  const filterToggle = (genre) => {
    if (genreFilterArray.includes(genre)) {
      setGenreFilterArray(
        [...genreFilterArray].filter((el) => el !== genre),
      );
    } else {
      setGenreFilterArray([...genreFilterArray, genre]);
    }
  };
  return (
    <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${whatVisible === 'genre' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'genre') {
            toggleVisibility('');
          } else {
            toggleVisibility('genre');
          }
        }}
      >
        жанру
      </S.FilterButton>
      {whatVisible === 'genre' && (
        <S.FilterMenuRight className="filter__menu filter__menu_right">
          {genreArray.map((genre, index) => (
            <S.FilterMenuItem
              key={index}
              className={"filter__menu_item" + `${genreFilterArray.includes(genre) && ' filter__button_clicked'}`}
              onClick={(e) => {
                e.stopPropagation();
                filterToggle(genre);
              }}
            >
              {genre}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuRight>
      )}
    </>
  );
}

export { GenreFilterMenu };
