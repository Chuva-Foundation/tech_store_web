import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    error: null,
    users: [], 
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
    setUsers: (state, { payload }) => {
        return {
            ...state,
            success: true,
            loading: false,
            error: null,
            students: payload
          };
    },
  },
})

// Action creators are generated for each case reducer function
export const { loading, errorMessage, success, setUsers } = usersSlice.actions

// Middleware
export const storeUser = createAsyncThunk(
  'user/create',
  async (params, { dispatch }) => {
      try {
          dispatch(loading());

          await axios.post('/user', params);

          dispatch(success());
      } catch (error) {
          dispatch(errorMessage('Error test'));
      }
  },
);

export const getUser = createAsyncThunk(
  'user/get',
  async (_,{ dispatch }) => {
      try {
          dispatch(loading());

          const response = await axios.get('/users');

          dispatch(setUsers(response.data));
      } catch (error) {
          dispatch(errorMessage('Error'));
      }
  },
);

export default usersSlice.reducer
