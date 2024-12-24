import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { store } from "./app/store.js";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import "./utils/i18n.js";
import App from "./App.js";
import GlobalStyles from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalStyles />

        <Provider store={store}>
            <App />
        </Provider>

        <ToastContainer
            position="bottom-right"
            pauseOnFocusLoss={false}
            autoClose={3000}
            transition={Zoom}
        />
    </StrictMode>
);
