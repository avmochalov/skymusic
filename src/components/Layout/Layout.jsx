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

import * as S from './LayoutStyles';
import { getTrackList } from '../../API/track';
import { useDispatch, useSelector } from 'react-redux';
import { crateTrackList } from '../../store/actions/creators/skymusic';
import { Outlet } from 'react-router-dom';

function Layout({ isLoading, setLoadingStatus, setNewApiError }) {
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  const dispatch = useDispatch();

  useEffect(() => {
    getTrackList()
      .then((tracks) => {
        setLoadingStatus(false);
        dispatch(crateTrackList(tracks));
      })
      .catch((error) => {
        setNewApiError(error.message);
      });
  }, []);
  console.log(Boolean(currentTrack[0]));
  console.log(currentTrack);
  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <BurgerMenu />
          <S.MainCenterblock className="main__centerblock centerblock">
            <Search />
            <Outlet />
          </S.MainCenterblock>
          <S.MainSidebar className="main__sidebar sidebar">
            <SideBarUser />
            {isLoading ? <SideBarPlug /> : <SideBar />}
          </S.MainSidebar>
        </S.Main>
        <S.Bar className="bar">{currentTrack ? <Player /> : null}</S.Bar>
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Layout;
