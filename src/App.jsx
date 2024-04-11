import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

import Footer from "./Footer/Footer";
const App = () => {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  );
};

export default App;
