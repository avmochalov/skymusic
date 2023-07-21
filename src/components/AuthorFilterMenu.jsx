import { tracks } from '../data';

function AuthorFilterMenu({ toggleAuthorVisibility, isAuthorVisible, setYearVisible, setGenreVisible }) {
  return (
    <>
      <div
        className="filter__button button-author _btn-text"
        onClick={() => {toggleAuthorVisibility(), setYearVisible(false), setGenreVisible(false)}}
      >
        исполнителю
      </div>
      {isAuthorVisible && (
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

export { AuthorFilterMenu };
