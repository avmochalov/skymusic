import * as S from "./TrackListStyles"
import { tracks } from "../../data";


function TrackList() {
  return (
    <S.ContentPlaylist className="content__playlist playlist">
      {tracks.map((track) => (
        <S.PlaylistItem key={track.id} className="playlist__item">
          <S.PlaylistTrack className="playlist__track track">
            <S.TrackTitle className="track__title">
              <S.TrackTitleImg className="track__title-image">
                <S.TrackTitleSvg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <div className="track__title-text">
                <S.TrackTitleLink className="track__title-link" href="http://">
                  {track.title}{' '}
                  <S.TrackTitleSpan className="track__title-span">{track.info}</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor  className="track__author">
              <S.TrackAuthorLink className="track__author-link" href="http://">
                {track.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum  className="track__album">
              <S.TrackAlbumLink className="track__album-link" href="http://">
                {track.album}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText className="track__time-text">{track.time}</S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}

export { TrackList };
