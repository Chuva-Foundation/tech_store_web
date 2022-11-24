import { configureStore }  from '@reduxjs/toolkit';
import usersReducer from './slices/users'
import authReducer from  './slices/auth'

export const createStore = () => {
    const store = configureStore({
        reducer:{
            users: usersReducer,
            auth: authReducer
        },
    });
    return store;
};