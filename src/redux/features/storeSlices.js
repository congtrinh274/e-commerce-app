// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const storeSlices = createSlice({
    name: 'store',
    initialState: {
        isLoading: false,
        store: {},
        error: false,
    },
    reducers: {
        REGISTER_LOADING: (state, action) => {
            state.isLoading = true;
        },
        REGISTER: (state, action) => {
            state.isLoading = false;
            state.store = action.payload.data;
        },
        REGISTER_FAILURE: (state, action) => {
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const { REGISTER_LOADING, REGISTER, REGISTER_FAILURE } = storeSlices.actions;

export const registerStore =
    (shopName, bio = '', phoneNumber, wareHouseAddress, accessToken) =>
    async (dispatch) => {
        dispatch(REGISTER_LOADING());
        try {
            const response = await axios.post(
                'http://192.168.1.19:3000/store/create',
                {
                    name: shopName,
                    bio,
                    phoneNumber,
                    shedAddress: wareHouseAddress,
                },
                {
                    timeout: 3000,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        x_authorization: accessToken,
                    },
                },
            );

            dispatch(REGISTER(response.data));
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.log('Request timed out');
                dispatch(REGISTER_FAILURE());
                throw new Error('Request timeout');
            } else {
                console.log('Error:', error);
                dispatch(REGISTER_FAILURE());
                throw error.response.data.error;
            }
        }
    };

export default storeSlices.reducer;
