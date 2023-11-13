import { useDispatch, useSelector } from 'react-redux';
import * as S from './TrackListStyles';
import {
  crateTrackList,
  setCurrentTrack,
} from '../../store/actions/creators/skymusic';
import { currentTrackIdSelector } from '../../store/selectors/skymusic';
import { useAddLikeMutation, useRemoveLikeMutation } from '../../services/skymusic';

function TrackList({ data }) {
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const currentTrackId = useSelector(currentTrackIdSelector);
  const pageType = useSelector((store) => store.AudioPlayer.currentPage);
  const [addLike, { isLoading }] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const dispatch = useDispatch();
  return (
    <S.ContentPlaylist className="content__playlist playlist">
      {data.map((track) => (
        <S.PlaylistItem key={track.id} className="playlist__item">
          <S.PlaylistTrack className="playlist__track track">
            <S.TrackTitle
              className="track__title"
              onClick={() => {
                dispatch(setCurrentTrack(track));
                dispatch(crateTrackList(data));
              }}
            >
              <S.TrackTitleImg className="track__title-image">
                <S.TrackTitleSvg
                  className={`${
                    playingStatus && track.id === currentTrackId
                      ? 'track__title-svg pulse-point'
                      : 'track__title-svg'
                  }`}
                  alt="music"
                >
                  {track.id === currentTrackId ? (
                    <use xlinkHref="/img/icon/sprite.svg#pulse_point"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  )}
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <div className="track__title-text">
                <S.TrackTitleLink className="track__title-link">
                  {track.name}{' '}
                  <S.TrackTitleSpan className="track__title-span"></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor className="track__author">
              <S.TrackAuthorLink className="track__author-link">
                {track.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum className="track__album">
              <S.TrackAlbumLink className="track__album-link">
                {track.album}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg
                className="track__time-svg"
                alt="time"
                onClick={() => {
                  pageType === 'myTracks' ? removeLike(track.id) :
                  track.stared_user.some((user) => user['id'] === userId)
                    ? removeLike(track.id)
                    : addLike(track.id);
                }}
              >
                {pageType === 'myTracks' ? (
                  <use xlinkHref="/img/icon/sprite.svg#icon-activ-like"></use>
                ) : track.stared_user.some((user) => user['id'] === userId) ? (
                  <use xlinkHref="/img/icon/sprite.svg#icon-activ-like"></use>
                ) : (
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                )}
              </S.TrackTimeSvg>
              <S.TrackTimeText className="track__time-text">
                {track.duration_in_seconds}
              </S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}

export { TrackList };
