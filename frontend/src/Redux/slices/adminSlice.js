import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboard: null,
    users: [],
    pendingResources: [],
    analytics: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setDashboard: (state, action) => {
            state.dashboard = action.payload;
        },

        setUsers: (state, action) => {
            state.users = action.payload;
        },

        setPendingResources: (state, action) => {
            state.pendingResources = action.payload;
        },

        setAnalytics: (state, action) => {
            state.analytics = action.payload;
        }
    }
});

export const {
    setDashboard,
    setUsers,
    setPendingResources,
    setAnalytics
} = adminSlice.actions;

export default adminSlice.reducer;