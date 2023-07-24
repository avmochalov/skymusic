import { useState } from 'react';
import { AuthorFilterMenu } from './AuthorFilterMenu';
import { YearFilterMenu } from './YearFilterMenu';
import { GenreFilterMenu } from './GenreFilterMenu';

function Filter() {
  const [whatVisible, setVisible] = useState(null);
  const toggleVisibility = (name) => setVisible(name);
  console.log(whatVisible);
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <AuthorFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
      />
      <YearFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
      />
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
      />
    </div>
  );
}

export { Filter };
