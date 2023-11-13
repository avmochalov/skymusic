import { useEffect, useState } from 'react';
import * as S from './FilterStyles';
function GenreFilterMenu({ toggleVisibility, whatVisible, tracks }) {
  const [genreArray, setGenreArray] = useState(null);
  useEffect(() => {
    const uniqueGenre = new Set(tracks.map((track) => track.genre));
    setGenreArray(Array.from(uniqueGenre));
  }, []);
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
            <S.FilterMenuItem key={index} className="filter__menu_item">
              {genre}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuRight>
      )}
    </>
  );
}

export { GenreFilterMenu };
