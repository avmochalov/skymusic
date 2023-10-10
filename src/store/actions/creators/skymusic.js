import { CREATE_TRACK_LIST, NEXT_TRACK, PAUSE, PLAY, PREV_TRACK, SET_CURRENT_TRACK } from '../types/skymusic';

export const crateTrackList = ( trackList ) => ({
  type: CREATE_TRACK_LIST,
  payload: {
    trackList,
  },
});

export const setCurrentTrack = ( currentTrack ) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    currentTrack,
  },
});

export const playTrack = ( trackStatus ) => ({
  type: PLAY,
  payload: {
    trackStatus,
  },
});

export const pauseTrack = ( trackStatus ) => ({
  type: PAUSE,
  payload: {
    trackStatus,
  },
});
export const nextTrack = ( track ) => ({
  type: NEXT_TRACK,
  payload: {
    track,
  },
});
export const prevTrack = ( track ) => ({
  type: PREV_TRACK,
  payload: {
    track,
  },
});