// HOME.TSX - Home Page Component
// ===============================
// This component displays the home page when user visits "/" path
// It teaches the fundamental concepts of React Routing

import React from "react";

// React.FC = React Functional Component (TypeScript type)
// Ensures this function returns valid JSX that React can render
const Home: React.FC = () => {
  // getStyles() function returns CSS styles for learning boxes
  // This helps keep code organized and reusable
  const getStyles = () => ({
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    },
    learningBox: (color: string) => ({
      margin: "20px 0",
      padding: "20px",
      backgroundColor: color,
      borderRadius: "8px",
      border: "2px solid #ddd",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }),
    codeBlock: {
      backgroundColor: "#f4f4f4",
      padding: "15px",
      borderRadius: "5px",
      borderLeft: "4px solid #007bff",
      marginTop: "10px",
      overflow: "auto"
    },
    title: {
      color: "#333",
      marginBottom: "15px",
      borderBottom: "2px solid #007bff",
      paddingBottom: "10px"
    },
    listItem: {
      marginBottom: "8px",
      fontSize: "16px"
    }
  });

  const styles = getStyles();

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <h1 style={{ textAlign: "center", color: "#007bff" }}>🏠 React Routing Learning Hub</h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
        Welcome! This is your home page. Everything here will teach you React Routing.
      </p>

      {/* LEARNING BOX 1: What is Routing? */}
      <div style={styles.learningBox("#fffbea")}>
        <h2 style={styles.title}>📖 What is React Routing?</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>React Router</strong> is a library that lets you:
        </p>
        
        <ul style={{ marginLeft: "20px" }}>
          <li style={styles.listItem}>✅ Build websites with multiple pages</li>
          <li style={styles.listItem}>✅ Navigate between pages instantly</li>
          <li style={styles.listItem}>✅ Keep the URL in sync with page content</li>
          <li style={styles.listItem}>✅ Create smooth, app-like experiences</li>
          <li style={styles.listItem}>✅ Never reload the entire page</li>
        </ul>

        <p style={{ marginTop: "15px", fontStyle: "italic", color: "#555" }}>
          Think of it like a single-page app where different content shows based on the URL!
        </p>
      </div>

      {/* LEARNING BOX 2: Traditional vs React Router */}
      <div style={styles.learningBox("#e7f3ff")}>
        <h2 style={styles.title}>⚙️ How Different is React Routing?</h2>
        
        <p style={{ marginBottom: "15px" }}>
          <strong>Traditional Web Websites:</strong>
        </p>
        <div style={styles.codeBlock}>
          Click Link → Browser Requests Server → Page Reloads → Content Appears
        </div>
        <p style={{ color: "#999", marginTop: "5px" }}>❌ Slow, full page refresh every time</p>

        <p style={{ marginTop: "20px", marginBottom: "15px" }}>
          <strong>React Router (Single Page App):</strong>
        </p>
        <div style={styles.codeBlock}>
          Click Link → URL Changes → Component Updates → Content Appears Instantly
        </div>
        <p style={{ color: "#28a745", marginTop: "5px" }}>✅ Fast, smooth, app-like feeling</p>
      </div>

      {/* LEARNING BOX 3: Step-by-Step Flow */}
      <div style={styles.learningBox("#f0f8ff")}>
        <h2 style={styles.title}>🔄 Step-by-Step: What Happens When You Click a Link</h2>
        
        <ol style={{ marginLeft: "20px" }}>
          <li style={styles.listItem}>
            <strong>Step 1:</strong> You click a Link component
            <div style={styles.codeBlock}>&lt;Link to="/about"&gt;About&lt;/Link&gt;</div>
          </li>
          
          <li style={{ ...styles.listItem, marginTop: "15px" }}>
            <strong>Step 2:</strong> Browser URL changes immediately (no server request!)
            <div style={styles.codeBlock}>URL: / → /about</div>
          </li>
          
          <li style={{ ...styles.listItem, marginTop: "15px" }}>
            <strong>Step 3:</strong> React Router detects the URL change
            <div style={styles.codeBlock}>React Router: "The URL changed to /about"</div>
          </li>
          
          <li style={{ ...styles.listItem, marginTop: "15px" }}>
            <strong>Step 4:</strong> React Router searches for matching route
            <div style={styles.codeBlock}>&lt;Route path="/about" element={&lt;About /&gt;} /&gt;</div>
          </li>
          
          <li style={{ ...styles.listItem, marginTop: "15px" }}>
            <strong>Step 5:</strong> React renders the matching component
            <div style={styles.codeBlock}>About component displays!</div>
          </li>
          
          <li style={{ ...styles.listItem, marginTop: "15px" }}>
            <strong>Step 6:</strong> ✨ Done! Content shows (NO page reload)
            <div style={styles.codeBlock}>This all happens in milliseconds!</div>
          </li>
        </ol>
      </div>

      {/* LEARNING BOX 4: Key Concepts */}
      <div style={styles.learningBox("#f0fff4")}>
        <h2 style={styles.title}>🎯 Key Concepts You'll Learn</h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "bold", color: "#007bff" }}>BrowserRouter</td>
              <td style={{ padding: "10px" }}>Wrapper component that enables routing throughout the app</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "bold", color: "#28a745" }}>Link</td>
              <td style={{ padding: "10px" }}>Navigation component that changes URL without page reload</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "bold", color: "#ffc107" }}>Routes</td>
              <td style={{ padding: "10px" }}>Container that holds all route definitions</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold", color: "#dc3545" }}>Route</td>
              <td style={{ padding: "10px" }}>Maps a specific URL path to a component</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* LEARNING BOX 5: Try It Out */}
      <div style={styles.learningBox("#fff8f0")}>
        <h2 style={styles.title}>🧪 Try It Out Right Now!</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          Click the navigation links at the top to:
        </p>        npm run dev
        # Open http://localhost:5173
        # Click the navigation links to see all pages!        npm run dev
        # Open http://localhost:5173
        # Click the navigation links to see all pages!
        <ul style={{ marginLeft: "20px" }}>
          <li style={styles.listItem}>👀 Watch the URL change</li>
          <li style={styles.listItem}>⚡ See new content appear instantly</li>
          <li style={styles.listItem}>🔄 Notice: NO page reload happens!</li>
          <li style={styles.listItem}>📱 Use browser back/forward buttons</li>
          <li style={styles.listItem}>❌ Try typing /invalid-url in address bar</li>
        </ul>
        
        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#e8f4f8", borderRadius: "5px" }}>
          <strong>💡 Observation:</strong> Everything happens instantly because React only updates 
          the component, not the entire page!
        </p>
      </div>

      {/* LEARNING BOX 6: Questions to Think About */}
      <div style={styles.learningBox("#f5f5f5")}>
        <h2 style={styles.title}>❓ Think About These Questions</h2>
        
        <ul style={{ marginLeft: "20px" }}>
          <li style={styles.listItem}>Why would apps built with routing feel faster?</li>
          <li style={styles.listItem}>What does "Single Page Application" actually mean?</li>
          <li style={styles.listItem}>Why can't we use regular &lt;a&gt; tags with React Router?</li>
          <li style={styles.listItem}>What would happen without BrowserRouter?</li>
          <li style={styles.listItem}>How does React Router know which component to show?</li>
        </ul>
        
        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ddd" }}>
          You'll find the answers by exploring the other pages and reading the code comments!
        </p>
      </div>

      {/* Footer with Call to Action */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", borderTop: "2px solid #eee" }}>
        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
          👉 Ready to learn more? Click the navigation links above!
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Each page teaches you a different aspect of React Routing.
        </p>
      </div>
    </div>
  );
};

export default Home;