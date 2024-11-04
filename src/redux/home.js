import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataHome = createAsyncThunk(
    "home/getDataHome",
    async (language) => {
        const headers = {
            'Accept-Language': language
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/home-page/`, {
            headers
        });
        console.log(response)
        return response.data;
    }
);

const slice = createSlice({
    name: "home",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataHome.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataHome.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getDataHome.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

