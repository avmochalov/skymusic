import { tracks } from '../../data';
import * as S from'./FilterStyles'

function AuthorFilterMenu({ toggleVisibility, whatVisible }) {
  return (
    <>
      <S.FilterButton
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
      </S.FilterButton>
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
