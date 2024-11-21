import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Services";
import Realisation from "./components/Realisations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Mention from "./components/Mentions";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention" element={<Mention />} />
      </Routes>
      <Footer />
    </div>
  );
}
