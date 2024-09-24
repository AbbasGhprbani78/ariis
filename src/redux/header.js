import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjectsTitle = createAsyncThunk(
    "header/getProjectsTitle",
    async (language, { getState }) => {
        const { header } = getState();
        if (header.data) {
            return header.data;
        }
        const headers = {
            'Accept-Language': language
        };
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/get-all-project/`, {
            headers
        });
        return response.data;
    }
);

const slice = createSlice({
    name: "header",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjectsTitle.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjectsTitle.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getProjectsTitle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;
