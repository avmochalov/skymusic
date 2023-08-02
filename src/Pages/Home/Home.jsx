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

function Home() {
  const [isLoading, setLoadingStatus] = useState(true);
  const switchLoading = () => setLoadingStatus(!isLoading);
  useEffect(() => {
    setTimeout(switchLoading, 5000);
  }, []);
  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <BurgerMenu />
          <S.MainCenterblock className="main__centerblock centerblock">
            <Search />
            <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
            <Filter />
            <S.CenterblockContent className="centerblock__content">
              <TrackListHeader />
              {isLoading ? <TrackListPlug /> : <TrackList />}
            </S.CenterblockContent>
          </S.MainCenterblock>
          <S.MainSidebar className="main__sidebar sidebar">
            <SideBarUser />
            {isLoading ? <SideBarPlug /> : <SideBar />}
          </S.MainSidebar>
        </S.Main>
        <S.Bar className="bar">{isLoading ? <PlayerPlug /> : <Player />}</S.Bar>
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
