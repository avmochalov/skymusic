import './style.css';
import { Search } from './components/Search';
import { Filter } from './components/Filter/Filter';
import { TrackListHeader } from './components/TrackListHeader';
import { TrackList } from './components/TrackList';
import { SideBar } from './components/SideBar';
import { User } from './components/User';
import { Player } from './components/Player/Player';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { SideBarPlug } from './components/SideBarPlug';
import { TrackListPlug } from './components/TrackListPlug';
import { PlayerPlug } from './components/Player/PlayerPlug';

function App() {
  const [isLoading, setLoadingStatus] = useState(true);
  const switchLoading = () => setLoadingStatus(!isLoading);
  useEffect(() => {
    setTimeout(switchLoading, 5000);
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <BurgerMenu />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content">
              <TrackListHeader />
              {isLoading ? <TrackListPlug /> : <TrackList />}
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <User />
            {isLoading ? <SideBarPlug /> : <SideBar />}
          </div>
        </main>
        <div className="bar">{isLoading ? <PlayerPlug /> : <Player />}</div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
