import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

import { store } from "./Redux/store.js";
import ToastProvider from "./Components/ui/ToastProvider.jsx"
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider>
                    <ToastProvider >
                    <App />
                    </ToastProvider>
                </AuthProvider>
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>
);
