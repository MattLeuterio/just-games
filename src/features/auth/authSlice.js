import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const clientId = "06erbl6vxx1q3pt1ox1cl1buy8s7lj";
const clientSecret = "9bk9nns977x7nuji7dohn9mr7b04wh";

export const getToken = createAsyncThunk(
  'auth/getToken',
  async () => {
    return axios({
      url: `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
      method: 'post',
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err);
    })
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: [],
    status: null
  },
  extraReducers: {
    [getToken.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getToken.fulfilled]: (state, { payload }) => {
      // const token = res.data.key
      // const expiration_time = new Date(new Date().getTime() + 3600 * 1000);
      window.localStorage.setItem('token', payload.access_token);
      state.authData = payload
      state.status = 'success'
    },
    [getToken.rejected]: (state, action) => {
      state.status = 'failed'
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAuth = state => state.auth.authData;

export default authSlice.reducer;
