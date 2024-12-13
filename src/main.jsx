import ReactDOM from "react-dom/client";
import React from 'react'; // Add this line
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

// Add the base path here
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Marketing-company">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
