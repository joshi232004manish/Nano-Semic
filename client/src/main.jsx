import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./components/UserContext"; // adjust path
import { ModalProvider } from "./context/loginBox.jsx"; // adjust path
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
    <ModalProvider>
      <App />
    </ModalProvider>

    </UserProvider>
  </React.StrictMode>
);
