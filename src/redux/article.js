import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataArticle = createAsyncThunk(
    "article/getDataArticle",
    async (id) => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/article/articles/${id}`, {});
        return response.data;
    }
);

const slice = createSlice({
    
    name: "article",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataArticle.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataArticle.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getDataArticle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

