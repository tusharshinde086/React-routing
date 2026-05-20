// CONTACT.TSX - Contact Page Component
// ====================================
// This page demonstrates a real-world example of routing
// Shows how URLs and components stay synchronized

import React from "react";

const Contact: React.FC = () => {
  // Style definitions for this page
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
    flowBox: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "5px",
      marginTop: "10px",
      border: "1px solid #ddd",
      fontFamily: "monospace"
    },
    arrowText: {
      textAlign: "center" as const,
      color: "#999",
      margin: "10px 0",
      fontSize: "18px"
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={{ textAlign: "center", color: "#dc3545" }}>📞 Contact Page - Real World Example</h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
        This page shows how Single Page Applications (SPAs) work in the real world.
      </p>

      {/* BOX 1: What You're Looking At */}
      <div style={styles.box("#ffe5e5")}>
        <h2 style={styles.title}>🔍 What You're Looking At Right Now</h2>
        
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>Current URL:</strong> <code style={{ backgroundColor: "#f5f5f5", padding: "5px 10px", borderRadius: "3px" }}>/contact</code>
        </p>

        <p style={{ marginBottom: "15px" }}>
          When you clicked the "Contact" link in the navigation menu:
        </p>

        <div style={styles.flowBox}>
          <div>1. You clicked: &lt;Link to="/contact"&gt;</div>
          <div style={styles.arrowText}>↓</div>
          <div>2. URL changed to: /contact</div>
          <div style={styles.arrowText}>↓</div>
          <div>3. React Router detected the change</div>
          <div style={styles.arrowText}>↓</div>
          <div>4. Checked: path="/contact" matches!</div>
          <div style={styles.arrowText}>↓</div>
          <div>5. Rendered: Contact component (this page!)</div>
          <div style={styles.arrowText}>↓</div>
          <div>✨ You see this content - NO page reload!</div>
        </div>

        <p style={{ marginTop: "15px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ddd" }}>
          <strong>🔑 Key Insight:</strong> The entire page was NOT reloaded. Only the component changed!
        </p>
      </div>

      {/* BOX 2: Compare Old vs New Way */}
      <div style={styles.box("#e3f2fd")}>
        <h2 style={styles.title}>🔄 How This Different From Traditional Websites</h2>
        
        <p style={{ marginBottom: "20px" }}>
          <strong>Old Way (Traditional Website):</strong>
        </p>
        <div style={styles.codeBox}>
{`User clicks link
    ↓
Browser sends REQUEST to server
    ↓
Server processes request
    ↓
Server sends entire HTML page
    ↓
Browser RELOADS entire page
    ↓
New content appears (slow! ❌)`}
        </div>

        <p style={{ marginTop: "20px", marginBottom: "15px", color: "#999", fontSize: "14px" }}>
          Problems: Slow network requests, page flicker, wasted bandwidth
        </p>

        <p style={{ marginBottom: "20px" }}>
          <strong>New Way (React Router SPA):</strong>
        </p>
        <div style={styles.codeBox}>
{`User clicks link
    ↓
React Router detects URL change
    ↓
Finds matching Route component
    ↓
Component renders (already in browser!)
    ↓
Content appears (fast! ✅)
    ↓
NO server request, NO page reload`}
        </div>

        <p style={{ marginTop: "20px", color: "#28a745", fontSize: "14px" }}>
          Benefits: Instant response, smooth experience, less bandwidth
        </p>
      </div>

      {/* BOX 3: Real World Example */}
      <div style={styles.box("#f3e5f5")}>
        <h2 style={styles.title}>🌍 Real World Example</h2>
        
        <p style={{ marginBottom: "15px" }}>
          Think of Gmail, Facebook, or Twitter. When you click a link:
        </p>

        <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
          <li style={{ marginBottom: "8px" }}>✅ URL changes instantly</li>
          <li style={{ marginBottom: "8px" }}>✅ New content appears immediately</li>
          <li style={{ marginBottom: "8px" }}>✅ Page never reloads</li>
          <li style={{ marginBottom: "8px" }}>✅ Feels like a native app</li>
          <li style={{ marginBottom: "8px" }}>✅ Browser back/forward buttons work</li>
        </ul>

        <p style={{ padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          That's all built with React Router and routing!
        </p>
      </div>

      {/* BOX 4: How Routing Solves Problems */}
      <div style={styles.box("#fff3e0")}>
        <h2 style={styles.title}>✅ How Routing Solves Real Problems</h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
          <thead>
            <tr style={{ backgroundColor: "#eee" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Problem</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Without Routing</th>
              <th style={{ padding: "10px", textAlign: "left" }}>With Routing</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>Speed</td>
              <td style={{ padding: "10px", color: "#dc3545" }}>Slow - Full page load</td>
              <td style={{ padding: "10px", color: "#28a745" }}>Fast - Component swap</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>User Experience</td>
              <td style={{ padding: "10px", color: "#dc3545" }}>Flickering page reloads</td>
              <td style={{ padding: "10px", color: "#28a745" }}>Smooth transitions</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>Bandwidth</td>
              <td style={{ padding: "10px", color: "#dc3545" }}>High - Load entire page</td>
              <td style={{ padding: "10px", color: "#28a745" }}>Low - Load only needed</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>App Feel</td>
              <td style={{ padding: "10px", color: "#dc3545" }}>Website feel</td>
              <td style={{ padding: "10px", color: "#28a745" }}>Native app feel</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>Server Load</td>
              <td style={{ padding: "10px", color: "#dc3545" }}>High - Many requests</td>
              <td style={{ padding: "10px", color: "#28a745" }}>Low - Few requests</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BOX 5: Try It Out */}
      <div style={styles.box("#e8f5e9")}>
        <h2 style={styles.title}>🧪 Try These Experiments</h2>
        
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Experiment 1: Notice the URL</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Look at the address bar at the top</li>
            <li>Click different navigation links</li>
            <li>Watch the URL change</li>
            <li>🔍 Notice: The page never reloads!</li>
          </ul>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Experiment 2: Try Browser Buttons</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Click back button (←) in browser</li>
            <li>Watch content change</li>
            <li>Click forward button (→)</li>
            <li>🔍 Notice: Routing works with browser history!</li>
          </ul>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Experiment 3: Try Invalid URL</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Type in address bar: /invalid-page</li>
            <li>Hit Enter</li>
            <li>🔍 Notice: You see 404 page (catch-all route!)</li>
          </ul>
        </div>

        <div>
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Experiment 4: Open DevTools</p>
          <ul style={{ marginLeft: "20px" }}>
            <li>Press F12 to open DevTools</li>
            <li>Go to Network tab</li>
            <li>Click navigation links</li>
            <li>🔍 Notice: NO network requests! Components swap locally!</li>
          </ul>
        </div>
      </div>

      {/* BOX 6: Summary */}
      <div style={styles.box("#f5f5f5")}>
        <h2 style={styles.title}>📚 Summary - What You've Learned</h2>
        
        <ul style={{ marginLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>React Router</strong> enables <strong>client-side routing</strong>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>SPAs</strong> change content without reloading pages
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Components</strong> render based on URL
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Links</strong> trigger URL changes without page reload
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Routes</strong> map URLs to components
          </li>
          <li>
            <strong>User experience</strong> is faster and smoother
          </li>
        </ul>

        <p style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
          <strong>🎯 Main Concept:</strong> React Router keeps your app on ONE page while changing 
          the CONTENT based on URL. This creates fast, app-like experiences!
        </p>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", borderTop: "2px solid #eee" }}>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          👉 You've now seen how routing works in practice!
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Click the links to explore other pages or check the code comments to see how it's implemented.
        </p>
      </div>
    </div>
  );
};

export default Contact;