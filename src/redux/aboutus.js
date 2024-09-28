import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAboutusData = createAsyncThunk(
    "aboutus/getAboutusData",
    async (language) => {
        const headers = {
            'Accept-Language': language
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/about-page/`, {
            headers
        });
        return response.data;
    }
);

const slice = createSlice({
    name: "aboutus",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAboutusData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAboutusData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getAboutusData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

