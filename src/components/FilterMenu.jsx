import { tracks } from '../data';
import { useState } from 'react';

function FilterMenu({}) {
  const [isVisible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!isVisible);
  return (
    <>
      <div
        className="filter__button button-author _btn-text"
        onClick={toggleVisibility}
      >
        исполнителю
      </div>
      {isVisible && (
        <div className="filter__menu">
          {tracks.map((track) => (
            <div key={track.id} className="filter__menu_item">
              {track.author}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export { FilterMenu };
