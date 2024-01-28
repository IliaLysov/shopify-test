import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsApi from "../api/productsApi";
import { ProductsState } from "../types/product";

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const response = await productsApi.getAllProducts();
    return response
})

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message ?? "Error fetching products";
            })
    }
})

export default productsSlice.reducer;