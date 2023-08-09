import { useRef, useState } from 'react';
import * as S from './PlayerStyle';

function Player({ activTrack, isPlaying, setIsPlaying }) {
  const [isRepeat, setIsRepeat] = useState(false);
  const audioComponentRef = useRef(null);
  const playClick = () => {
    if (isPlaying) {
      audioComponentRef.current.pause();
      setIsPlaying(false);
    } else {
      audioComponentRef.current.play();
      setIsPlaying(true);
    }
  };
  const repeatClick = () => {
    audioComponentRef.current.loop = !isRepeat;
    setIsRepeat(!isRepeat);
  };
  return (
    <S.BarContent className="bar__content">
      <S.AudioComponent
        controls
        src={activTrack.track_file}
        ref={audioComponentRef}
        autoPlay
      ></S.AudioComponent>
      <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
      <S.BarPlayerBlock className="bar__player-block">
        <S.BarPlayer className="bar__player player">
          <S.PlayerControls className="player__controls">
            <S.PlayerBtnPrev className="player__btn-prev">
              <S.PlayerBtnPrevSvg className="player__btn-prev-svg" alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="player__btn-play _btn">
              <S.PlayerBtnPlaySvg
                className="player__btn-play-svg"
                alt="play"
                onClick={playClick}
              >
                {isPlaying ? (
                  <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                )}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext className="player__btn-next">
              <S.PlayerBtnNextSvg className="player__btn-next-svg" alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat
              className="player__btn-repeat _btn-icon"
              onClick={repeatClick}
            >
              <S.PlayerBtnRepeatSvg
                className="player__btn-repeat-svg"
                alt="repeat"
                $isRepeat={isRepeat}
              >
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="player__btn-shuffle _btn-icon">
              <S.PlayerBtnShuffleSvg
                className="player__btn-shuffle-svg"
                alt="shuffle"
              >
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>

          <S.PlayerTrackPlay className="player__track-play track-play">
            <S.TrackPlayContain className="track-play__contain">
              <S.TrackPlayImg className="track-play__image">
                <S.TrackPlaySvg className="track-play__svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackPlaySvg>
              </S.TrackPlayImg>
              <S.TrackPlayAuthor className="track-play__author">
                <S.TrackPlayAuthorLink
                  className="track-play__author-link"
                  href="http://"
                >
                  {activTrack.name}
                </S.TrackPlayAuthorLink>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum className="track-play__album">
                <S.TrackPlayAlbumLink
                  className="track-play__album-link"
                  href="http://"
                >
                  {activTrack.author}
                </S.TrackPlayAlbumLink>
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>

            <S.TrackPlaytrackLikDdis className="track-play__like-dis">
              <S.TrackPlaytrackLike className="track-play__like _btn-icon">
                <S.TrackPlaytracklikeSvg
                  className="track-play__like-svg"
                  alt="like"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlaytracklikeSvg>
              </S.TrackPlaytrackLike>
              <S.TrackPlaytrackDislike className="track-play__dislike _btn-icon">
                <S.TrackPlaytrackDislikeSvg
                  className="track-play__dislike-svg"
                  alt="dislike"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlaytrackDislikeSvg>
              </S.TrackPlaytrackDislike>
            </S.TrackPlaytrackLikDdis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock className="bar__volume-block volume">
          <S.VolumeContent className="volume__content">
            <S.VolumeImg className="volume__image">
              <S.VolumeSvg className="volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </S.VolumeSvg>
            </S.VolumeImg>
            <S.VolumeProgress className="volume__progress _btn">
              <S.VolumeProgressLine
                className="volume__progress-line _btn"
                type="range"
                name="range"
              ></S.VolumeProgressLine>
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export { Player };
