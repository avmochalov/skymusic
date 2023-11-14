import { useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { Filter } from '../../components/Filter/Filter';
import { TrackListHeader } from '../../components/TrackList/TrackListHeader';
import { TrackList } from '../../components/TrackList/TrackList';
import { TrackListPlug } from '../../components/TrackList/TrackListPlug';
import { SideBarUser } from '../../components/SideBar/SideBarUser';
import { useGetTracksQuery } from '../../services/skymusic';
import { useParams } from 'react-router-dom';
import * as S from './CollectionsStyles';
const Collections = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, error, isLoading } = useGetTracksQuery();
  const [filteredTracks, setFilteredTracks] = useState([]);
  const params = useParams();
  let listName = '';
  let collectionsData = [];
  if (!isLoading) {
    switch (params.id) {
      case '1':
        listName = 'Классическая музыка';
        collectionsData = data.filter((track) => track.genre === listName);
        break;
      case '2':
        listName = 'Электронная музыка';
        collectionsData = data.filter((track) => track.genre === listName);
        break;
      case '3':
        listName = 'Рок музыка';
        collectionsData = data.filter((track) => track.genre === listName);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    console.log(collectionsData);
    setFilteredTracks(
      collectionsData.filter((track) => {
        return track.name.toLowerCase().includes(searchValue.toLowerCase());
      }),
    );
    console.log(filteredTracks);
  }, [searchValue, isLoading]);

  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search setSearchValue={setSearchValue} />
        <S.CenterblockH2 className="centerblock__h2">
          {listName}
        </S.CenterblockH2>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TrackList data={filteredTracks} />}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <SideBarUser />
      </S.MainSidebar>
    </>
  );
};

export default Collections;
