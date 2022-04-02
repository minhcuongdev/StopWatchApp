import { configureStore } from '@reduxjs/toolkit'
import stopWatchReducer from './StopWatchSlice'

export const store = configureStore({
  reducer: {
      stopWatch: stopWatchReducer,
  },
})