import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

    <header>
        <nav>
            <h1>Jobrouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
        </nav>
    </header>

        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </main>
    </BrowserRouter>
    
  );
}

export default App;
