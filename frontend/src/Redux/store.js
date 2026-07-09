import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import resourceReducer from "./slices/resourceSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({

    reducer: {
        auth: authReducer,
        user: userReducer,
        resource: resourceReducer,
        admin: adminReducer,
    },
});