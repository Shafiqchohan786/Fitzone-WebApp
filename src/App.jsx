import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "60px" }}>
        {/* Navbar ke neeche content ko properly dikhane ke liye padding */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Plans />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
