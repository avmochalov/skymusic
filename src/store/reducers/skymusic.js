import { CREATE_TRACK_LIST, PAUSE, PLAY, SET_CURRENT_TRACK } from '../actions/types/skymusic';

const initialState = {
  trackList: [],
  currentTrack: [],
  playing: false,
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TRACK_LIST: {
      const { trackList } = action.payload;
      return {
        ...state,
        trackList,
      };
    }
    case SET_CURRENT_TRACK: {
      const { currentTrack } = action.payload;
      return {
        ...state,
        playing: true,
        currentTrack,
      };
    }
    case PLAY: {
      const { trackStatus } = action.payload;
      return {
        ...state,
        playing: trackStatus,
      };
    }
    case PAUSE: {
      const { trackStatus } = action.payload;
      return {
        ...state,
        playing: !trackStatus,
      };
    }
    default:
      return state;
  }
}
