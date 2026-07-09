import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarks: [],
    downloadHistory: [],
    recentlyViewed: [],
    uploads: [],
    profile: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setBookmarks: (state, action) => {
            state.bookmarks = action.payload;
        },

        setDownloads: (state, action) => {
            state.downloadHistory = action.payload;
        },

        setRecentlyViewed: (state, action) => {
            state.recentlyViewed = action.payload;
        },

        setUploads: (state, action) => {
            state.uploads = action.payload;
        },

        setProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
});

export const {
    setBookmarks,
    setDownloads,
    setRecentlyViewed,
    setUploads,
    setProfile
} = userSlice.actions;

export default userSlice.reducer;