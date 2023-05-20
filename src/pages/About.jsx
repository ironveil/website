// --- About.jsx ---
// React layout for the about page

// --- SETUP ---

// Setup React
import React from "react"

// Import components
import Nav from "../components/Nav"
import Heading from "../components/Heading"
import { Link } from "react-router-dom"


// --- ABOUT PAGE ---

export default function About() {
    return (
        <>
            <Nav />
            <div id="main">
                <Heading text="about" />
                <p>Hey there! My name is Jamie and I am a student living in the UK.</p>
                <p className="subheading">contact</p>
                <p>Email: <Link to="mailto:contact@ironveil.cloud">contact@ironveil.cloud</Link></p>
            </div>
        </>
    )
}