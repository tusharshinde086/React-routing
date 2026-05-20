// ABOUT.TSX - About Page Component
// =================================
// This page explains React Router components and concepts in detail
// Learn what each component does and why they're important

import React from "react";

const About: React.FC = () => {
  // Define styles for this page
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    },
    box: (color: string) => ({
      margin: "20px 0",
      padding: "20px",
      backgroundColor: color,
      borderRadius: "8px",
      border: "2px solid #ddd"
    }),
    codeBox: {
      backgroundColor: "#f4f4f4",
      padding: "12px",
      borderRadius: "5px",
      borderLeft: "4px solid #28a745",
      marginTop: "10px",
      fontFamily: "monospace",
      fontSize: "14px",
      overflow: "auto"
    },
    title: {
      color: "#333",
      marginBottom: "15px",
      borderBottom: "2px solid #28a745",
      paddingBottom: "10px"
    },
    componentBox: {
      backgroundColor: "#f9f9f9",
      padding: "15px",
      borderRadius: "5px",
      marginTop: "10px",
      border: "1px solid #ddd"
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={{ textAlign: "center", color: "#28a745" }}>ℹ️ React Router Components Explained</h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
        This page teaches you all the components React Router provides and how to use them.
      </p>

      {/* BOX 1: BrowserRouter */}
      <div style={styles.box("#e8f5e9")}>
        <h2 style={styles.title}>🌐 BrowserRouter - The Wrapper</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>What it does:</strong> Enables routing for your entire app
        </p>

        <div style={styles.componentBox}>
          <p><strong>Location:</strong> src/main.tsx</p>
          <p><strong>Purpose:</strong> Wraps the App component</p>
        </div>

        <p style={{ marginTop: "15px", marginBottom: "10px" }}>
          <strong>How to use it:</strong>
        </p>
        <div style={styles.codeBox}>
{`// In main.tsx:
<BrowserRouter>
  <App />
</BrowserRouter>`}
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>🔑 Key Point:</strong> Without BrowserRouter, Link and Route components won't work!
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>Why it matters:</strong> BrowserRouter enables the app to watch for URL changes 
          and react to them by rendering different components.
        </p>
      </div>

      {/* BOX 2: Link */}
      <div style={styles.box("#e3f2fd")}>
        <h2 style={styles.title}>🔗 Link - Navigation Component</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>What it does:</strong> Creates clickable links that change the URL without reloading the page
        </p>

        <div style={styles.componentBox}>
          <p><strong>Import from:</strong> react-router-dom</p>
          <p><strong>Usage:</strong> Like HTML &lt;a&gt; tags but without page reload</p>
        </div>

        <p style={{ marginTop: "15px", marginBottom: "10px" }}>
          <strong>How to use it:</strong>
        </p>
        <div style={styles.codeBox}>
{`// ✅ CORRECT - Use Link for routing:
<Link to="/about">Go to About</Link>

// ❌ WRONG - Don't use <a> for routing:
<a href="/about">Go to About</a>  // This causes page reload!`}
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>🔑 Key Point:</strong> Always use &lt;Link&gt; for navigation in React Router apps!
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>Why it matters:</strong> Link changes only the component, keeping the page smooth and fast.
        </p>
      </div>

      {/* BOX 3: Routes */}
      <div style={styles.box("#f3e5f5")}>
        <h2 style={styles.title}>🗺️ Routes - The Container</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>What it does:</strong> Container that holds all your Route definitions
        </p>

        <div style={styles.componentBox}>
          <p><strong>Import from:</strong> react-router-dom</p>
          <p><strong>Location:</strong> Usually in App.tsx</p>
          <p><strong>Purpose:</strong> Groups all routes together</p>
        </div>

        <p style={{ marginTop: "15px", marginBottom: "10px" }}>
          <strong>How to use it:</strong>
        </p>
        <div style={styles.codeBox}>
{`// Routes container with multiple routes inside:
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>`}
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>🔑 Key Point:</strong> Routes searches through its children to find matching Route components.
        </p>
      </div>

      {/* BOX 4: Route */}
      <div style={styles.box("#fce4ec")}>
        <h2 style={styles.title}>🛣️ Route - The Path to Component</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>What it does:</strong> Maps a URL path to a component to display
        </p>

        <div style={styles.componentBox}>
          <p><strong>Import from:</strong> react-router-dom</p>
          <p><strong>Parent:</strong> Must be inside Routes</p>
          <p><strong>Props:</strong> path (URL to match) and element (component to show)</p>
        </div>

        <p style={{ marginTop: "15px", marginBottom: "10px" }}>
          <strong>How to use it:</strong>
        </p>
        <div style={styles.codeBox}>
{`// Basic Route:
<Route path="/about" element={<About />} />

// Catch-all Route (must be LAST):
<Route path="*" element={<NotFound />} />`}
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>🔑 Key Point:</strong> Routes are checked in order. Catch-all route (*) must be LAST!
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>How path matching works:</strong>
        </p>
        <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
          <li>path="/" → Matches only when URL is /</li>
          <li>path="/about" → Matches when URL is /about</li>
          <li>path="*" → Matches ANY URL (catch-all, must be last!)</li>
        </ul>
      </div>

      {/* BOX 5: Route Ordering */}
      <div style={styles.box("#fff3e0")}>
        <h2 style={styles.title}>⚠️ Important: Route Order Matters!</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          Routes are checked from top to bottom. The FIRST match wins!
        </p>

        <p style={{ marginTop: "15px", marginBottom: "10px" }}>
          <strong>❌ WRONG ORDER:</strong>
        </p>
        <div style={styles.codeBox}>
{`<Routes>
  <Route path="*" element={<NotFound />} />  ❌ BAD - Too early!
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

// PROBLEM: "/" and "/about" never show!
// path="*" catches everything first!`}
        </div>

        <p style={{ marginTop: "20px", marginBottom: "10px" }}>
          <strong>✅ CORRECT ORDER:</strong>
        </p>
        <div style={styles.codeBox}>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />  ✅ GOOD - Last!
</Routes>

// RESULT: "/" and "/about" work, then catch-all for rest!`}
        </div>

        <p style={{ marginTop: "15px", padding: "15px", backgroundColor: "#fff8e1", borderRadius: "5px", border: "2px solid #ff9800" }}>
          <strong>🔑 CRITICAL RULE:</strong> Always put catch-all route (path="*") LAST!
        </p>
      </div>

      {/* BOX 6: Summary Table */}
      <div style={styles.box("#f5f5f5")}>
        <h2 style={styles.title}>📊 Quick Reference Table</h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
          <thead>
            <tr style={{ backgroundColor: "#eee", borderBottom: "2px solid #999" }}>
              <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>Component</th>
              <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>What It Does</th>
              <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>Where</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}><strong>BrowserRouter</strong></td>
              <td style={{ padding: "10px" }}>Enables routing for app</td>
              <td style={{ padding: "10px" }}>main.tsx</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}><strong>Link</strong></td>
              <td style={{ padding: "10px" }}>Navigation without reload</td>
              <td style={{ padding: "10px" }}>Navigation menu</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}><strong>Routes</strong></td>
              <td style={{ padding: "10px" }}>Container for routes</td>
              <td style={{ padding: "10px" }}>App.tsx</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}><strong>Route</strong></td>
              <td style={{ padding: "10px" }}>Maps path to component</td>
              <td style={{ padding: "10px" }}>Inside Routes</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", borderTop: "2px solid #eee" }}>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          👉 Now that you understand the components, let's see how they work together!
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Click the links above to see these components in action.
        </p>
      </div>
    </div>
  );
};

export default About;