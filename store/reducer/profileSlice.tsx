import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
  },
})

export const { setName, setEmail, setPhone, setAddress } = profileSlice.actions
export default profileSlice.reducer
