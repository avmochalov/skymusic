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

function Layout({ isLoading, }) {
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <BurgerMenu />
          <Outlet />
        </S.Main>
        <S.Bar className="bar">{currentTrack.id ? <Player /> : null}</S.Bar>
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Layout;
