import ReactDOM from "react-dom/client";
import React from 'react'; // Add this line
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
     </BrowserRouter>
  </React.StrictMode>
);
