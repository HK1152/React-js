import { fetchProducts, addProduct, deleteProduct, updateProduct } from "./productthunk";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.list.push(action.payload)
        })
        .addCase(addProduct.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.list = state.list.filter((product) => product.id !== action.payload)
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.list.findIndex((product) => product.id === action.payload.id)
            if (index !== -1) {
                state.list[index] = { ...state.list[index], ...action.payload }
            }
        })
        .addCase(updateProduct.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;
