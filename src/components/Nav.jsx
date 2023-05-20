// --- Nav.jsx ---
// React component for the navbar


// --- SETUP ---

// Setup React
import React from "react"
import { NavLink } from "react-router-dom"


// --- NAVBAR ---

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/about">about</NavLink>
        </nav>
    )
}