import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./utils/i18n.js";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>
);
