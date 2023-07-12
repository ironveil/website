// --- index.js ---
// Basic server


// --- SETUP ---

// Setup express
const express = require("express")
const app = express()

// Setup pug
app.set("view engine", "pug")
app.set("views", "./src/views")

app.use(express.static("./src/public"))

// Setup .env variables
require("dotenv").config()

const PORT = process.env.PORT || 80


// --- ROUTES ---

// Homepage
app.get("/", (req, res) => res.render("home"))

// Projects
app.get("/projects", (req, res) => res.render("projects"))

// Blog
app.get("/blog", (req, res) => res.render("blog"))

// About
app.get("/about", (req, res) => res.render("about"))

// 404
app.get("*", (req, res) => res.render("404"))


// --- RUN ---

app.listen(PORT)