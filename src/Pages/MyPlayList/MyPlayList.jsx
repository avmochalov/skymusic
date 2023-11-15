import { Search } from '../../components/Search/Search';
import { Filter } from '../../components/Filter/Filter';
import { TrackListHeader } from '../../components/TrackList/TrackListHeader';
import { TrackList } from '../../components/TrackList/TrackList';
import { TrackListPlug } from '../../components/TrackList/TrackListPlug';
import { SideBarUser } from '../../components/SideBar/SideBarUser';

import * as S from './MyPlayListStyles';
import { useDispatch} from 'react-redux';
import { setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetFavoritesTracksQuery } from '../../services/skymusic';
import { useState } from 'react';

function MyPlayList() {
  const { data, error, isLoading } = useGetFavoritesTracksQuery();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  dispatch(setCurrentPage('myTracks'));
  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search setSearchValue={setSearchValue}/>
        <S.CenterblockH2 className="centerblock__h2">Мои треки</S.CenterblockH2>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {isLoading ? (
            <TrackListPlug />
          ) : error ? (
            <p>{error.data.detail}</p>
          ) : (
            <TrackList data={data} searchValue={searchValue}/>
          )}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <SideBarUser />
      </S.MainSidebar>
    </>
  );
}

export default MyPlayList;
