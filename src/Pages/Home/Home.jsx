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
import { useState } from 'react';

function Home() {
  const { data, error, isLoading } = useGetTracksQuery();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  dispatch(setCurrentPage('home'));
  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search setSearchValue={setSearchValue} />
        <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
        <Filter tracks={data} />
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TrackList data={data} searchValue={searchValue}/>}
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
