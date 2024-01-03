import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlices';
import storeReducer from './features/storeSlices';
import productReducer from './features/productSlices';

const store = configureStore({
    reducer: {
        auth: authReducer,
        store: storeReducer,
        product: productReducer,
    },
});

export default store;
