import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const productSlices = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        products: {},
        error: false,
    },

    reducers: {
        LOADING: (state, action) => {
            state.isLoading = true;
        },
        GET_PRODUCTS: (state, action) => {
            state.isLoading = false;
            state.products = action.payload.data;
        },
        ADD_PRODUCT: (state, action) => {
            state.isLoading = false;
            state.products = { ...state.products, ...action.payload.data };
        },
    },
});

export const { state, ADD_PRODUCT, GET_PRODUCTS } = productSlices.actions;

export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`http://192.168.1.12:3000/products`, {
            timeout: 3000,
        });

        dispatch(GET_PRODUCTS(response.data));
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.log('Request timed out');
            throw new Error('Request timeout');
        } else {
            console.log('Error:', error);
            throw error.response.data.error;
        }
    }
};

export const getProductsBySlug = () => async (dispatch) => {};

export default productSlices.reducer;
