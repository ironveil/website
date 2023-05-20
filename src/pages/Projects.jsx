// --- Projects.jsx ---
// React layout for the projects page

// --- SETUP ---

// Setup React
import React from "react"

// Import components
import Nav from "../components/Nav"
import Heading from "../components/Heading"
import { Link } from "react-router-dom"


// --- PROJECTS PAGE ---

export default function Projects() {
    return (
        <>
            <Nav />
            <div id="main">
                <Heading text="projects" />
                <p>No projects yet <i>(aside from <Link to="https://github.com/ironveil/website">this website</Link>)</i></p>
            </div>
        </>
    )
}