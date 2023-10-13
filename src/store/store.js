import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/skymusic";

export const store = configureStore({
  reducer: {
    AudioPlayer: playerReducer,
  }
});