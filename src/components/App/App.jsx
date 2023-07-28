import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';
import { TrackListHeader } from '../TrackList/TrackListHeader';
import { TrackList } from '../TrackList/TrackList';
import { Player } from '../Player/Player';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { SideBarPlug } from '../SideBar/SideBarPlug';
import { TrackListPlug } from '../TrackList/TrackListPlug';
import { PlayerPlug } from '../Player/PlayerPlug';
import { SideBar } from '../SideBar/SideBar';
import { SideBarUser } from '../SideBar/SideBarUser';
import * as S from'./AppStyles'

function App() {
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

export default App;
