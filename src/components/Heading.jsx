// --- Heading.jsx ---
// React component for the ASCII art heading


// --- SETUP ---

// Setup React
import React from "react"

// Setup Figlet
import figlet from "figlet"
import ogre from "figlet/importable-fonts/Ogre"
figlet.parseFont("Ogre", ogre)


// --- HEADING ---

export default function Heading({ text }) {
    let title = figlet.textSync(text, { font: "Ogre" })

    return (
        <section className="heading">
            <pre className="textHeading">{title}</pre>
        </section>
    )
}