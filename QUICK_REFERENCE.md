# ⚡ React Routing - Quick Reference Guide

## 📋 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎯 Quick Concepts

### 1. BrowserRouter (Wrapper)
```jsx
// In main.tsx - MUST wrap your App!
<BrowserRouter>
  <App />
</BrowserRouter>
```
**Purpose:** Enables routing in your entire app

### 2. Link (Navigation)
```jsx
// Instead of: <a href="/about">About</a>
<Link to="/about">About</Link>
```
**Purpose:** Navigate without page reload

### 3. Routes & Route (URL Mapping)
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```
**Purpose:** Map URL paths to components

---

## 📂 File Structure
```
src/
├── main.tsx          ← BrowserRouter goes here
├── App.tsx           ← Routes & navigation go here
├── pages/
│   ├── Home.tsx      ← / path
│   ├── About.tsx     ← /about path
│   ├── Contact.tsx   ← /contact path
│   └── NotFound.tsx  ← /invalid-page path
```

---

## ✅ Remember These Rules

1. **BrowserRouter wraps App** - Without it, routing doesn't work
2. **Use Link, not `<a>`** - Only Link works for SPAs
3. **Catch-all route last** - `path="*"` must be after other routes
4. **Import components** - Each page component must be imported
5. **One Route per path** - Each path gets one Route definition

---

## 🔄 How It Works (Simple Version)

```
User clicks Link
    ↓
URL changes (no reload!)
    ↓
React Router detects URL
    ↓
Matches path to Route
    ↓
Component displays
    ↓
User sees new page (instantly!)
```

---

## 🚨 Common Mistakes

| ❌ Wrong | ✅ Correct | Why? |
|---------|-----------|------|
| `<a href="/about">` | `<Link to="/about">` | Link doesn't reload page |
| Catch-all route first | Catch-all route last | Route order matters! |
| No BrowserRouter | BrowserRouter wrapper | Routing needs context |
| `<Routes>` missing | `<Routes>` wrapper | Needs container |
| `path="home"` | `path="/home"` | Path must start with / |

---

## 🧪 Quick Test

Try these in your browser DevTools console:

```javascript
// Check current path
window.location.pathname

// Current URL
window.location.href
```

---

## 📊 HTTP Status Codes (Related)

- **200** - OK (page found, no error)
- **404** - Not Found (page doesn't exist - use NotFound.tsx)
- **500** - Server Error
- **301/302** - Redirect

---

## 🎨 Styling Routes

```jsx
// Add active styles to current link
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  
  return (
    <Link 
      to="/about"
      style={{
        fontWeight: location.pathname === "/about" ? "bold" : "normal"
      }}
    >
      About
    </Link>
  );
}
```

---

## 🔗 File Locations & Content

| File | Contains | Main Concept |
|------|----------|--------------|
| `main.tsx` | BrowserRouter | App entry point |
| `App.tsx` | Link, Routes, Route | Route definitions |
| `pages/Home.tsx` | SPA concept | "/" path |
| `pages/About.tsx` | Routing benefits | "/about" path |
| `pages/Contact.tsx` | No-reload navigation | "/contact" path |
| `pages/NotFound.tsx` | 404 handling | "*" catch-all |

---

## 💡 Think About It

**Traditional Web:**
```
Click Link → HTTP Request → Server → Full Page Download → Display
⏱️ Slow
```

**React Router SPA:**
```
Click Link → Component Change → Display
⚡ Fast
```

---

## 🎓 One-Line Explanations

- **Routing:** Show different components for different URLs
- **Link:** Click to change component without page reload
- **Route:** "When URL is /about, show About component"
- **BrowserRouter:** Magic wrapper that makes routing work
- **SPA:** Entire app stays on one page, content changes

---

## 🚀 What's Next?

After mastering these basics, learn:
- Dynamic routes: `/user/:id`
- useNavigate hook: Programmatic navigation
- useParams hook: Read URL parameters
- Protected routes: Authentication
- Nested routes: Routes within routes

---

**Tip:** Keep this page open while learning! 📌
