import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./components/UserContext"; // adjust path
import { ModalProvider } from "./context/loginBox.jsx"; // adjust path
import { BrowserRouter } from "react-router-dom";
import BottomCartPopup from './components/BottomCartPopup.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
   
    <ModalProvider>
      <App />
    </ModalProvider>

   
  </BrowserRouter>
 
);
