import { CREATE_TRACK_LIST } from '../actions/types/skymusic';

// 1.
const initialState = {};

// 2.
export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case CREATE_TRACK_LIST: {
      // 4.
      const { trackList } = action.payload;

      // 5.
      return {
        ...state,
        trackList,
      };
    }

    default:
      return state;
  }
}
