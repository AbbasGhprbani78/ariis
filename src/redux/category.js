import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryData = createAsyncThunk(
    "category/getCategoryData",

    async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/article/get-article-category/`);
        return response.data;
    }
);

const slice = createSlice({
    name: "category",

    initialState: {
        datac: null,
        loadingc: false,
        errorc: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryData.pending, (state) => {
                state.loadingc = true;
            })
            .addCase(getCategoryData.fulfilled, (state, action) => {
                state.loadingc = false;
                state.datac = action.payload;
            })
            .addCase(getCategoryData.rejected, (state, action) => {
                state.loadingc = false;
                state.errorc = action.error.message;
            });
    },
});

export default slice.reducer;
