// import { tracks } from '../../data';
import { useState } from 'react';
import * as S from './FilterStyles';
import { useEffect } from 'react';

function AuthorFilterMenu({ toggleVisibility, whatVisible, tracks }) {
  const [authorArray, setAuthorArray] = useState(null);
  useEffect(() => {
    const uniqueAuthors = new Set(tracks.map((track) => track.author));
    setAuthorArray(Array.from(uniqueAuthors));
  }, []);
  console.log(authorArray);
  return (
    <>
      <S.FilterButton
        className={
          'filter__button button-author _btn-text' +
          `${whatVisible === 'author' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'author') {
            toggleVisibility('');
          } else {
            toggleVisibility('author');
          }
        }}
      >
        исполнителю
      </S.FilterButton>
      {whatVisible === 'author' && (
        <S.FilterMenuLeft className="filter__menu filter__menu_left">
          {authorArray.map((author, index) => (
            <S.FilterMenuItem key={index} className="filter__menu_item">
              {author}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuLeft>
      )}
    </>
  );
}

export { AuthorFilterMenu };
