import { useState } from 'react';
import { AuthorFilterMenu } from './AuthorFilterMenu';
import { YearFilterMenu } from './YearFilterMenu';
import { GenreFilterMenu } from './GenreFilterMenu';
import * as S from'./FilterStyles'

function Filter({tracks}) {
  const [whatVisible, setVisible] = useState(null);
  const toggleVisibility = (name) => setVisible(name);
  console.log(whatVisible);
  return (
    <S.CenterblockFilter className="centerblock__filter filter">
      <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>

      <AuthorFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
      <YearFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
    </S.CenterblockFilter>
  );
}

export { Filter };
