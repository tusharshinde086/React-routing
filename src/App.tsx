// APP.TSX - Main Application Component with Routing Logic
// ========================================================
// This component manages all routes and navigation of the application

import { Link, Route, Routes } from "react-router-dom";
// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

// ==== WHAT IS ROUTING? ====
// Routing: Technique to display different components based on URL path
// Instead of reloading the page, React changes the displayed component
// This creates a Single Page Application (SPA) - faster and smoother experience

function App() {
  return (
    <div>
      <h1>🎓 React Routing Learning Guide</h1>
      
      {/* SECTION 1: NAVIGATION LINKS */}
      {/* ============================
          Link: Component from react-router-dom that creates navigation links
          - Uses 'to' prop instead of 'href' (like HTML <a> tags)
          - Benefits: No page reload, changes only the URL and component display
          - Example: <Link to="/about"> changes URL to /about and shows About page
      */}
      <nav style={{ margin: "20px 0", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <h3>Navigation Menu (Click to change pages without reloading):</h3>
        {/* Home link - navigates to "/" path */}
        <Link to="/">🏠 Home</Link> |{" "}
        {/* About link - navigates to "/about" path */}
        <Link to="/about">ℹ️ About</Link> |{" "}
        {/* Contact link - navigates to "/contact" path */}
        <Link to="/contact">📞 Contact</Link>
      </nav>

      {/* SECTION 2: ROUTES DEFINITION */}
      {/* ============================
          Routes: Container for all route definitions
          Route: Maps a URL path to a component
          
          How it works:
          1. User clicks a Link
          2. URL changes to the 'to' value
          3. Routes checks all paths
          4. When path matches, that component is displayed
          5. No page reload - only component changes!
      */}
      <Routes>
        {/* Route 1: Home Page
            path="/" - Shows when URL is https://localhost:5173/
            element={<Home />} - Displays Home component
        */}
        <Route path="/" element={<Home />} />
        
        {/* Route 2: About Page
            path="/about" - Shows when URL is https://localhost:5173/about
            element={<About />} - Displays About component
        */}
        <Route path="/about" element={<About />} />
        
        {/* Route 3: Contact Page
            path="/contact" - Shows when URL is https://localhost:5173/contact
            element={<Contact />} - Displays Contact component
        */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Route 4: Catch-All (404 Not Found)
            path="*" - Asterisk matches ANY path that doesn't match above routes
            Example: /invalid-page will show NotFound component
            This must be LAST because order matters!
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Educational Footer */}
      <footer style={{ marginTop: "40px", padding: "20px", backgroundColor: "#e8f4f8", borderRadius: "5px" }}>
        <h3>📚 Learning Summary:</h3>
        <ul>
          <li><strong>BrowserRouter:</strong> Enables routing in the entire app (in main.tsx)</li>
          <li><strong>Link:</strong> Creates navigation links without page reload</li>
          <li><strong>Routes:</strong> Container that holds all route definitions</li>
          <li><strong>Route:</strong> Maps URL paths to components</li>
          <li><strong>path="*":</strong> Catch-all for undefined routes (404 pages)</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

