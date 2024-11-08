
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIPData = createAsyncThunk(
    "ip/getIPData",
    async () => {
        const response = await axios.get(`https://api.ipify.org?format=json`);
        return response.data;
    }
);

const slice = createSlice({
    name: "getIp",
    initialState: {
        datap: null,
        loadingp: false,
        errorp: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getIPData.pending, (state) => {
                state.loadingp = true;
            })
            .addCase(getIPData.fulfilled, (state, action) => {
                state.loadingp = false;
                state.datap = action.payload;
            })
            .addCase(getIPData.rejected, (state, action) => {
                state.loadingp = false;
                state.errorp = action.error.message;
            });
    },
});

export default slice.reducer;
