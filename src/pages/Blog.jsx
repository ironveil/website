// --- Blog.jsx ---
// React layout for the blog homepage

// --- SETUP ---

// Setup React
import React from "react"

// Import components
import Nav from "../components/Nav"
import Heading from "../components/Heading"
import { Link } from "react-router-dom"


// --- BLOG HOMEPAGE ---

export default function Blog() {
    return (
        <>
            <Nav />
            <div id="main">
                <Heading text="blog" />
                <p>No blog posts yet :(</p>
            </div>
        </>
    )
}