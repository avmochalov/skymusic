import { CREATE_TRACK_LIST, SET_CURRENT_TRACK } from '../actions/types/skymusic';

const initialState = {
  trackList: [],
  currentTrack: [],
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
        currentTrack,
      };
    }
    default:
      return state;
  }
}
