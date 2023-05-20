// --- Home.jsx ---
// React layout for the homepage

// --- SETUP ---

// Setup React
import React from "react"

// Import components
import Nav from "../components/Nav"
import Heading from "../components/Heading"
import { Link } from "react-router-dom"


// --- HOMEPAGE ---

export default function Home() {
    return (
        <>
            <Nav />
            <div id="main">
                <Heading text="welcome" />
                <p>Welcome to my homepage! My name is Jamie, I am a young student who is interested in many things - check out my <Link to={"/about"}>about page</Link> to learn more!</p>
                <p>This website is still a work-in-progress :)</p>
            </div>
        </>
    )
}