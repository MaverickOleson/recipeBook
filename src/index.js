import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/recipes">Recipes</a>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  </BrowserRouter>
);
