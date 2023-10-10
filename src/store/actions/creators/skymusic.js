import { CREATE_TRACK_LIST, SET_CURRENT_TRACK } from '../types/skymusic';

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