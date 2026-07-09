import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resources: [],
    selectedResource: null,
    loading: false,
    pagination: {},
    filters: {},
};

const resourceSlice = createSlice({
    name: "resource",
    initialState,
    reducers: {

        setResources: (state, action) => {
            state.resources = action.payload;
        },

        setSelectedResource: (state, action) => {
            state.selectedResource = action.payload;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setPagination: (state, action) => {
            state.pagination = action.payload;
        },

        setFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
});

export const {
    setResources,
    setSelectedResource,
    setLoading,
    setPagination,
    setFilters
} = resourceSlice.actions;

export default resourceSlice.reducer;