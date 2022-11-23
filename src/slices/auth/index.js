import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    success: false
  },
  
  reducers: {
    loading: (state) => {
      state.loading = true
    },
    errorMessage: (state, { payload }) => {
        return {
            ...state,
            loading: false,
            error: {
              message: payload,
            },
          };
    },
    success: (state) => {
        return {
            ...state,
            success: true,
            loading: false,
            error: null
          };
    },
  },
})

// Action creators are generated for each case reducer function
export const { loading, errorMessage, success } = authSlice.actions

// Middleware
export const createSession = createAsyncThunk(
  'auth/create',
  async (params, { dispatch }) => {
      try {
          dispatch(loading());

          const response = await axios.post('/sessions', params);

          const token = response.data.token;

          console.log('Token', token);

          axios.defaults.headers.common.Authorization = 'Bearer ' + token;

          dispatch(success());
      } catch (error) {
        console.log('ERROR', error);
          dispatch(errorMessage(error.response.data.error));
      }
  },
);

export default authSlice.reducer
