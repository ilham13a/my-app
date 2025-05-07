import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice'
import profileSlice from './reducer/profileSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    profile: profileSlice
  }
})