import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: localStorage.getItem('access_token'),
  access_token1: localStorage.getItem('access_token1'),
  access_token2: localStorage.getItem('access_token2'),
  access_token3: localStorage.getItem('access_token3'),
  isAuthenticated: localStorage.getItem('access_token') ? true : false,
  isAuthenticated: localStorage.getItem('access_token1') ? true : false,
  isAuthenticated: localStorage.getItem('access_token2') ? true : false,
  isAuthenticated: localStorage.getItem('access_token3') ? true : false,
  isLoading: false,
  isRegistered: false,
}

export const authSlice = createSlice({
  name: 'auth_token',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    setUserToken1: (state, action) => {

      state.access_token1 = action.payload.access_token1
    },
    setUserToken2: (state, action) => {
      state.access_token2 = action.payload.access_token2

    },
    setUserToken3: (state, action) => {
      state.access_token3 = action.payload.access_token3
    },

    unSetUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    unSetUserToken1: (state, action) => {
      state.access_token1 = action.payload.access_token1
    },
    unSetUserToken2: (state, action) => {
      state.access_token2 = action.payload.access_token2

    },
    unSetUserToken3: (state, action) => {
      state.access_token3 = action.payload.access_token3
    },
  },
})

export const { setUserToken,setUserToken1,setUserToken2,setUserToken3, unSetUserToken,unSetUserToken3,unSetUserToken2,unSetUserToken1 } = authSlice.actions

export default authSlice.reducer