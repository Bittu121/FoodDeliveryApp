import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import StoreContextProvider from "./Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            border: "1px solid #4caf50",
            padding: "16px",
            color: "#4caf50",
          },
          iconTheme: {
            primary: "#4caf50",
            secondary: "#ffffff",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
