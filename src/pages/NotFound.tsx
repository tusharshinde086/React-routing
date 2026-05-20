// NOTFOUND.TSX - 404 Error Page Component
// ========================================
// This component shows when user visits a URL with no matching route
// Teaches about catch-all routes and error handling in routing

import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  // Define styles for this error page
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    },
    errorHeader: {
      textAlign: "center" as const,
      color: "#dc3545",
      fontSize: "48px",
      marginBottom: "10px"
    },
    errorMessage: {
      textAlign: "center" as const,
      fontSize: "24px",
      color: "#666",
      marginBottom: "30px"
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
      borderLeft: "4px solid #dc3545",
      marginTop: "10px",
      fontFamily: "monospace",
      fontSize: "14px",
      overflow: "auto"
    },
    title: {
      color: "#333",
      marginBottom: "15px",
      borderBottom: "2px solid #dc3545",
      paddingBottom: "10px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      marginTop: "15px"
    },
    tableCell: {
      padding: "12px",
      textAlign: "left" as const,
      borderBottom: "1px solid #ddd"
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      marginTop: "15px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      {/* Error Header */}
      <div style={styles.errorHeader}>❌ 404</div>
      <div style={styles.errorMessage}>Page Not Found</div>

      {/* BOX 1: What Happened */}
      <div style={styles.box("#ffe5e5")}>
        <h2 style={styles.title}>🤔 What Happened?</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          You tried to visit a page that doesn't exist. This page shows because:
        </p>

        <ul style={{ marginLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>❌ You typed an invalid URL</li>
          <li style={{ marginBottom: "8px" }}>❌ You clicked a broken link</li>
          <li style={{ marginBottom: "8px" }}>❌ The page was moved or deleted</li>
          <li style={{ marginBottom: "8px" }}>❌ No Route matches this URL</li>
        </ul>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>Current URL:</strong> <code>{window.location.pathname}</code>
        </p>
      </div>

      {/* BOX 2: Catch-All Routes */}
      <div style={styles.box("#e3f2fd")}>
        <h2 style={styles.title}>🛣️ What is a Catch-All Route?</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          This page exists because of a special route called the <strong>"catch-all route"</strong>.
        </p>

        <p style={{ marginBottom: "10px" }}>
          <strong>In App.tsx:</strong>
        </p>
        <div style={styles.codeBox}>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  
  {/* This catches everything else: */}
  <Route path="*" element={<NotFound />} />
</Routes>`}
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <strong>🔑 Key Point:</strong> path="*" is a wildcard that matches ANY URL path!
        </p>
      </div>

      {/* BOX 3: How Route Matching Works */}
      <div style={styles.box("#f3e5f5")}>
        <h2 style={styles.title}>🔍 How Route Matching Works</h2>
        
        <p style={{ marginBottom: "15px" }}>
          React Router checks routes from top to bottom. It stops at the FIRST match:
        </p>

        <table style={styles.table}>
          <tbody>
            <tr style={{ backgroundColor: "#eee" }}>
              <th style={styles.tableCell}>#</th>
              <th style={styles.tableCell}>Route</th>
              <th style={styles.tableCell}>Matches</th>
              <th style={styles.tableCell}>Example URLs</th>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>path="/"</td>
              <td style={styles.tableCell}>Only /</td>
              <td style={styles.tableCell}>/</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>path="/about"</td>
              <td style={styles.tableCell}>Only /about</td>
              <td style={styles.tableCell}>/about</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>path="/contact"</td>
              <td style={styles.tableCell}>Only /contact</td>
              <td style={styles.tableCell}>/contact</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={{ ...styles.tableCell, backgroundColor: "#ffebee", fontWeight: "bold" }}>path="*"</td>
              <td style={{ ...styles.tableCell, backgroundColor: "#ffebee", color: "#dc3545" }}>ANYTHING else</td>
              <td style={{ ...styles.tableCell, backgroundColor: "#ffebee" }}>/invalid, /xyz, /hello, etc.</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "15px", padding: "15px", backgroundColor: "#fff8e1", borderRadius: "5px", border: "2px solid #ff9800" }}>
          <strong>⚠️ CRITICAL RULE:</strong> Catch-all route (path="*") MUST be LAST! 
          If it's not last, it catches everything and other routes never match!
        </p>
      </div>

      {/* BOX 4: Why Route Order Matters */}
      <div style={styles.box("#fff3e0")}>
        <h2 style={styles.title}>⚠️ Why Route Order Matters (IMPORTANT!)</h2>
        
        <p style={{ marginBottom: "20px", fontWeight: "bold", color: "#dc3545" }}>
          ❌ WRONG ORDER - Doesn't work:
        </p>
        <div style={styles.codeBox}>
{`<Routes>
  <Route path="*" element={<NotFound />} />  ❌ Catch-all first!
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

PROBLEM: "/" and "/about" NEVER show!
path="*" matches EVERYTHING first!`}
        </div>

        <p style={{ marginTop: "20px", marginBottom: "15px", fontWeight: "bold", color: "#28a745" }}>
          ✅ CORRECT ORDER - Works perfectly:
        </p>
        <div style={styles.codeBox}>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />  ✅ Catch-all last!
</Routes>

RESULT: "/" and "/about" work, then catch-all for rest!`}
        </div>
      </div>

      {/* BOX 5: Real World Examples */}
      <div style={styles.box("#e8f5e9")}>
        <h2 style={styles.title}>🌍 Real World Examples</h2>
        
        <p style={{ marginBottom: "15px" }}>
          When would you see a 404 page in real apps?
        </p>

        <ul style={{ marginLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Typing wrong URL:</strong> /uset instead of /user
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Page was deleted:</strong> /old-blog-post that no longer exists
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Broken link:</strong> Someone links to a page that was removed
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Dynamic route mismatch:</strong> /user/999 when user 999 doesn't exist
          </li>
          <li>
            <strong>Random URLs:</strong> /xyz, /abc123, /test/test/test
          </li>
        </ul>
      </div>

      {/* BOX 6: Try It */}
      <div style={styles.box("#f5f5f5")}>
        <h2 style={styles.title}>🧪 Try These URLs</h2>
        
        <p style={{ marginBottom: "15px" }}>
          You're already on a 404 page. Try typing these in the address bar:
        </p>

        <ul style={{ marginLeft: "20px", fontFamily: "monospace" }}>
          <li style={{ marginBottom: "8px" }}>/invalid</li>
          <li style={{ marginBottom: "8px" }}>/random-page</li>
          <li style={{ marginBottom: "8px" }}>/user/123</li>
          <li style={{ marginBottom: "8px" }}>/blog/post/hello</li>
          <li style={{ marginBottom: "8px" }}>/xyz/abc/def</li>
        </ul>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          All should show this 404 page because they don't match any route!
        </p>
      </div>

      {/* BOX 7: Key Learnings */}
      <div style={styles.box("#e1f5fe")}>
        <h2 style={styles.title}>📚 Key Learnings</h2>
        
        <ul style={{ marginLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>404 Page:</strong> Shows when URL doesn't match any route
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Catch-All Route:</strong> path="*" catches unmatched URLs
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Route Order:</strong> Checked from top to bottom, first match wins
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Critical Rule:</strong> Put catch-all route LAST
          </li>
          <li>
            <strong>User Experience:</strong> 404 pages help users understand what happened
          </li>
        </ul>
      </div>

      {/* Navigation Back */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", borderTop: "2px solid #eee" }}>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          Let's go back to the valid pages:
        </p>
        
        <Link to="/" style={styles.button}>🏠 Go to Home</Link>
        <Link to="/about" style={{ ...styles.button, marginLeft: "10px" }}>ℹ️ Go to About</Link>
        <Link to="/contact" style={{ ...styles.button, marginLeft: "10px" }}>📞 Go to Contact</Link>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#999" }}>
        <p>This 404 page demonstrates error handling with React Router routing!</p>
      </div>
    </div>
  );
};

export default NotFound;