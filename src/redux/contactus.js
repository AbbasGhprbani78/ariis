import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactusData = createAsyncThunk(
    "contactus/getContactusData",
    async (language) => {
        const headers = {
            'Accept-Language': language
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/get-about/`, {
            headers
        });

        return response?.data[0];
    }
);

const slice = createSlice({
    name: "contactus",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContactusData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContactusData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getContactusData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

