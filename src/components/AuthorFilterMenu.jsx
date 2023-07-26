import { tracks } from '../data';

function AuthorFilterMenu({ toggleVisibility, whatVisible }) {
  return (
    <>
      <div
        className={
          'filter__button button-author _btn-text' +
          `${whatVisible === 'author' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'author') {
            toggleVisibility('');
          } else {
            toggleVisibility('author');
          }
        }}
      >
        исполнителю
      </div>
      {whatVisible === 'author' && (
        <div className="filter__menu filter__menu_left">
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
