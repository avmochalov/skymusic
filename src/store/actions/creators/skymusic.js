import { CREATE_TRACK_LIST } from '../types/skymusic';

export const crateTrackList = ( trackList ) => ({
  type: CREATE_TRACK_LIST,
  payload: {
    trackList,
  },
});
