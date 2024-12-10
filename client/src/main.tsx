import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import "./utils/i18n.js";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalStyles />
        <App />
        <ToastContainer
            position="bottom-right"
            pauseOnFocusLoss={false}
            autoClose={3000}
            transition={Zoom}
        />
    </StrictMode>
);
