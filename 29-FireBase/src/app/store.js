import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/stutents/studentSlice'

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
})