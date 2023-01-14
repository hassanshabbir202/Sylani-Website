import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllCources from "./components/AllCources/AllCources";
import Admission from "./components/Admissions/Admission";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Certificate from "./components/certificate/Certificate";
import "./App.css";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Gallery from "./components/gallery/Gallery";
const App = () => {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cources" element={<AllCources />} />
        <Route
          exact
          path="/admission"
          element={
            <Admission heading="SMIT Registration Form" btnText="Submit Form" />
          }
        />
        <Route
          exact
          path="/gallery"
          element={
            <Gallery/>
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/certification"
          element={<Certificate heading="Sample Cetificate" mode={mode} />}
        />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
     
  );
};

export default App;
