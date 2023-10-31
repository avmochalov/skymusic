import { useDispatch, useSelector } from 'react-redux';
import * as S from './TrackListStyles';
import { crateTrackList, setCurrentTrack } from '../../store/actions/creators/skymusic';
import { currentTrackIdSelector } from '../../store/selectors/skymusic';

function TrackList({data}) {
  const tracks = useSelector((store) => store.AudioPlayer.trackList);
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const currentTrackId = useSelector(currentTrackIdSelector);
  const dispatch = useDispatch();
  return (
    <S.ContentPlaylist className="content__playlist playlist">
      {data.map((track) => (
        <S.PlaylistItem
          key={track.id}
          className="playlist__item"
          onClick={() => {
            dispatch(setCurrentTrack(track));
            dispatch(crateTrackList(data));
          }}
        >
          {/* track__title-svg pulse-point */}
          <S.PlaylistTrack className="playlist__track track">
            <S.TrackTitle className="track__title">
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
                    <use xlinkHref="img/icon/sprite.svg#pulse_point"></use>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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
              <S.TrackTimeSvg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
