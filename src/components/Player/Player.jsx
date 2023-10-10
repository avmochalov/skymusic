import { useEffect, useRef, useState } from 'react';
import * as S from './PlayerStyle';
import {
  nextTrack,
  pauseTrack,
  playTrack,
  prevTrack,
  setCurrentTrack,
} from '../../store/actions/creators/skymusic';
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackIdSelector } from '../../store/selectors/skymusic';

function Player() {
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const audioComponentRef = useRef(null);
  const currentTrackId = useSelector(currentTrackIdSelector);
  const tracks = useSelector((store) => store.AudioPlayer.trackList);
  const currentTrackIndex = tracks.findIndex((currentTrack) => {
    return currentTrack.id === currentTrackId;
  });
  const dispatch = useDispatch();
  const nextTrackToggle = () => {
    if (currentTrackIndex < tracks.length - 1) {
      dispatch(nextTrack(tracks[currentTrackIndex + 1]));
    } else {
      console.log('Exit from if else');
    }
  };
  const prevTrackToggle = () => {
    if (currentTrackIndex >= 1) {
      dispatch(prevTrack(tracks[currentTrackIndex - 1]));
    } else {
      console.log('Exit from if else');
    }
  };
  const playClick = () => {
    if (playingStatus) {
      audioComponentRef.current.pause();
      dispatch(pauseTrack(true));
    } else {
      audioComponentRef.current.play();
      dispatch(playTrack(true));
    }
  };
  const repeatClick = () => {
    audioComponentRef.current.loop = !isRepeat;
    setIsRepeat(!isRepeat);
  };
  const volumeOnChange = (event) => {
    const newVolume = audioComponentRef.current.volume;
    setVolume(newVolume);
    audioComponentRef.current.volume = event.target.value;
  };
  const timeOnChange = (event) => {
    audioComponentRef.current.currentTime = event.target.value;
  };
  useEffect(() => {
    const ref = audioComponentRef.current;

    const timeUpdate = (event) => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    ref.addEventListener('timeupdate', timeUpdate);

    return () => {
      ref.removeEventListener('timeupdate', timeUpdate);
    };
  });
  const buttonPlug = () => alert('Еще не реализовано');
  return (
    <S.BarContent className="bar__content">
      <S.Timer>
        {Math.trunc(currentTime / 60) < 10
          ? '0' + Math.trunc(currentTime / 60)
          : Math.trunc(currentTime / 60)}
        :
        {Math.trunc(currentTime % 60) < 10
          ? '0' + Math.trunc(currentTime % 60)
          : Math.trunc(currentTime % 60)}
        /
        {Math.trunc(duration / 60) < 10
          ? '0' + Math.trunc(duration / 60)
          : Math.trunc(duration / 60)}
        :
        {Math.trunc(duration % 60) < 10
          ? '0' + Math.trunc(duration % 60)
          : Math.trunc(duration % 60)}
      </S.Timer>
      <S.AudioComponent
        controls
        src={currentTrack.track_file}
        ref={audioComponentRef}
        autoPlay
      ></S.AudioComponent>
      <S.StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={timeOnChange}
        $color="#ff0000"
      />
      <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
      <S.BarPlayerBlock className="bar__player-block">
        <S.BarPlayer className="bar__player player">
          <S.PlayerControls className="player__controls">
            <S.PlayerBtnPrev className="player__btn-prev">
              <S.PlayerBtnPrevSvg
                className="player__btn-prev-svg"
                alt="prev"
                onClick={prevTrackToggle}
              >
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="player__btn-play _btn">
              <S.PlayerBtnPlaySvg
                className="player__btn-play-svg"
                alt="play"
                onClick={playClick}
              >
                {playingStatus ? (
                  <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                )}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext className="player__btn-next">
              <S.PlayerBtnNextSvg
                className="player__btn-next-svg"
                alt="next"
                onClick={nextTrackToggle}
              >
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
                onClick={buttonPlug}
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
                  {currentTrack.name}
                </S.TrackPlayAuthorLink>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum className="track-play__album">
                <S.TrackPlayAlbumLink
                  className="track-play__album-link"
                  href="http://"
                >
                  {currentTrack.author}
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
                value={volume}
                min={0}
                max={1}
                step={0.01}
                onChange={volumeOnChange}
              ></S.VolumeProgressLine>
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export { Player };
