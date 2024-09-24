import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjectData = createAsyncThunk(
    "product/getProjectsTitle",
    async ({ language, id }) => {
        const headers = {
            'Accept-Language': language,
        };
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/project-detail/${id}`, {
            headers,
        });
        return response.data;
    }
);

const slice = createSlice({
    name: "product",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjectData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjectData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getProjectData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;

