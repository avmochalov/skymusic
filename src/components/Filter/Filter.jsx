import { useState } from 'react';
import { AuthorFilterMenu } from './AuthorFilterMenu';
import { YearFilterMenu } from './YearFilterMenu';
import { GenreFilterMenu } from './GenreFilterMenu';
import * as S from'./FilterStyles'
import { useSelector } from 'react-redux';

function Filter({data, setGenreFilterArray, setAuthorFilterArray, authorFilterArray, genreFilterArray}) {
  const [whatVisible, setVisible] = useState(null);
  const toggleVisibility = (name) => setVisible(name);
  return (
    <S.CenterblockFilter className="centerblock__filter filter">
      <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>

      <AuthorFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={data}
        setAuthorFilterArray={setAuthorFilterArray}
        authorFilterArray={authorFilterArray}
      />
      {/* <YearFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      /> */}
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={data}
        setGenreFilterArray={setGenreFilterArray}
        genreFilterArray={genreFilterArray}
      />
    </S.CenterblockFilter>
  );
}

export { Filter };
