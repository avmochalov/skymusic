import './style.css';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { TrackListHeader } from './components/TrackListHeader';
import { TrackList } from './components/TrackList';
import { SideBar } from './components/SideBar';
import { User } from './components/User';
import { Player } from './components/Player';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo"></img>
            </div>
            <BurgerMenu />
          </nav>
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content">
              <TrackListHeader />
              <TrackList />
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <User />
            <SideBar />
          </div>
        </main>
        <div className="bar">
          <Player />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
