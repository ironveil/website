// --- main.jsx ---
// Entrypoint for React


// --- SETUP ---

// Setup React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Setup React-Router
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

// Import components
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'

// Import CSS
import "./main.css"


// --- ROUTING ---

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/projects",
        element: <Projects />
    },

    {
        path: "/blog",
        element: <Blog />
    },

    {
        path: "/about",
        element: <About />
    }
])


// --- RENDERING ---

// Render the page
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
