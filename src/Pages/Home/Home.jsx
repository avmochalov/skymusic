import { Search } from '../../components/Search/Search';
import { Filter } from '../../components/Filter/Filter';
import { TrackListHeader } from '../../components/TrackList/TrackListHeader';
import { TrackList } from '../../components/TrackList/TrackList';
import { SideBarPlug } from '../../components/SideBar/SideBarPlug';
import { TrackListPlug } from '../../components/TrackList/TrackListPlug';
import { SideBar } from '../../components/SideBar/SideBar';
import { SideBarUser } from '../../components/SideBar/SideBarUser';

import * as S from './HomeStyles';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetTracksQuery } from '../../services/skymusic';
import { useEffect, useState } from 'react';

function Home() {
  const { data, error, isLoading } = useGetTracksQuery();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [authorFilterArray, setAuthorFilterArray] = useState([]);
  const [genreFilterArray, setGenreFilterArray] = useState([]);
  dispatch(setCurrentPage('home'));
  const [filteredTracks, setFilteredTracks] = useState([]);
  useEffect(() => {
    if (isLoading) {
      return;
    } else {
      let filterByAuthor = [];
      let filterByAuthorAndGenre = [];
      let filterByAuthorAndGenreAndSearch = [];
      console.log(authorFilterArray);
      console.log(authorFilterArray > 0);
      authorFilterArray.length > 0
        ? (filterByAuthor = data.filter((el) =>
            authorFilterArray.includes(el.author),
          ))
        : (filterByAuthor = data);
      genreFilterArray.length > 0
        ? (filterByAuthorAndGenre = filterByAuthor.filter((el) =>
            genreFilterArray.includes(el.genre),
          ))
        : (filterByAuthorAndGenre = filterByAuthor);
      filterByAuthorAndGenreAndSearch = filterByAuthorAndGenre.filter((el) => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      console.log(filterByAuthor);
      setFilteredTracks(filterByAuthorAndGenreAndSearch);
    }
  }, [isLoading, searchValue, authorFilterArray, genreFilterArray]);

  console.log(data);
  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search setSearchValue={setSearchValue} />
        <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
        {isLoading ? null : (
          <Filter
            data={data}
            setAuthorFilterArray={setAuthorFilterArray}
            setGenreFilterArray={setGenreFilterArray}
            authorFilterArray={authorFilterArray}
            genreFilterArray={genreFilterArray}
          />
        )}
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TrackList data={filteredTracks} />}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <SideBarUser />
        {isLoading ? <SideBarPlug /> : <SideBar />}
      </S.MainSidebar>
    </>
  );
}

export default Home;
