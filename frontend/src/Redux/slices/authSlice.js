import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    user: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },

        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },

        loginFailure: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
            state.loading = false;
        },

        updateCurrentUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    updateCurrentUser
} = authSlice.actions;

export default authSlice.reducer;