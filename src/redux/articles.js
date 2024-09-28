import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataArticles = createAsyncThunk(
    "articles/getDataArticles",
    async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/article/articles/custom/`, {});
        return response.data;
    }
);

const slice = createSlice({
    name: "articles",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataArticles.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataArticles.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getDataArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

