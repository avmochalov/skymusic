import { Search } from '../../components/Search/Search';
import { Filter } from '../../components/Filter/Filter';
import { TrackListHeader } from '../../components/TrackList/TrackListHeader';
import { TrackList } from '../../components/TrackList/TrackList';
import { Player } from '../../components/Player/Player';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { SideBarPlug } from '../../components/SideBar/SideBarPlug';
import { TrackListPlug } from '../../components/TrackList/TrackListPlug';
import { PlayerPlug } from '../../components/Player/PlayerPlug';
import { SideBar } from '../../components/SideBar/SideBar';
import { SideBarUser } from '../../components/SideBar/SideBarUser';
import { useEffect, useState } from 'react';

import * as S from './HomeStyles';
import { getTrackList } from '../../API/track';
import { useDispatch, useSelector } from 'react-redux';
import { crateTrackList } from '../../store/actions/creators/skymusic';

function Home({isLoading, newApiError}) {
  return(
    <>
  <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
  <Filter />
  <S.CenterblockContent className="centerblock__content">
    <TrackListHeader />
    {newApiError ? <p>Не удалось загрузить данные</p> : null}
    {isLoading ? (
      <TrackListPlug />
    ) : (
      <TrackList />
    )}
  </S.CenterblockContent>
  </>)
}

export default Home;
