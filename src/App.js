import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Unstitched from './Components/Collection/Unstitched'
import Chantelle from './Components/Collection/Chantelle';
import EidEdit from './Components/Collection/EidEdit';
import FuchsiaLawn from './Components/Collection/FuchsiaLawn';
import SwissLawn from './Components/Collection/SwissLawn';
import Dupattas from './Components/Collection/Dupattas';
import Collection from "./Components/Collection";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection/unstitched" element={<Unstitched />} />
        <Route path="/collection/chantelle" element={<Chantelle />} />
        <Route path="/collection/eid-edits" element={<EidEdit />} />
        <Route path="/collection/fuchsia" element={<FuchsiaLawn />} />
        <Route path="/collection/swiss" element={<SwissLawn />} />
        <Route path="/collection/dupattas" element={<Dupattas />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/products" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
