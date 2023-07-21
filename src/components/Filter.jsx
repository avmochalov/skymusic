import { useState } from "react";
import { AuthorFilterMenu } from "./AuthorFilterMenu";
import { YearFilterMenu } from "./YearFilterMenu";
import { GenreFilterMenu } from "./GenreFilterMenu";


function Filter() {
  const [isAuthorVisible, setAuthorVisible] = useState(false);
  const toggleAuthorVisibility = () => setAuthorVisible(!isAuthorVisible);
  const [isYearVisible, setYearVisible] = useState(false);
  const toggleYearVisibility = () => setYearVisible(!isYearVisible);
  const [isGenreVisible, setGenreVisible] = useState(false);
  const toggleGenreVisibility = () => setGenreVisible(!isGenreVisible);
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <AuthorFilterMenu toggleAuthorVisibility={toggleAuthorVisibility} isAuthorVisible={isAuthorVisible} setYearVisible={setYearVisible} setGenreVisible={setGenreVisible}/>
      <YearFilterMenu toggleYearVisibility={toggleYearVisibility} isYearVisible={isYearVisible} setAuthorVisible={setAuthorVisible} setGenreVisible={setGenreVisible}/>
      <GenreFilterMenu toggleGenreVisibility={toggleGenreVisibility} isGenreVisible={isGenreVisible} setAuthorVisible={setAuthorVisible} setYearVisible={setYearVisible}/>
    </div>
  );
}

export { Filter };
