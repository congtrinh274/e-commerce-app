import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlices';
import storeReducer from './features/storeSlices';

const store = configureStore({
    reducer: {
        auth: authReducer,
        store: storeReducer,
    },
});

export default store;
