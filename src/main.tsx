// MAIN.TSX - Entry Point of the React Application
// ================================================
// This file is the starting point where React renders the entire app

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// ==== HOW THIS WORKS ====
// 1. ReactDOM.createRoot() finds the root HTML element with id="root"
// 2. BrowserRouter wraps the App component - this enables routing functionality
// 3. BrowserRouter allows the app to handle browser navigation without page reload
// 4. .render() displays the App inside the root element

// Find the root element and create a React root
ReactDOM.createRoot(document.getElementById("root")!).render(
  // BrowserRouter: Enables React Router functionality
  // This component provides routing context to all child components
  <BrowserRouter>
    {/* App component: Main application component with routes */}
    <App />
  </BrowserRouter>
);