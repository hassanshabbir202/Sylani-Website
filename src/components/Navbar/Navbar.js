import React from "react";
import logo from "../images/sylani.png";
import { Button } from "antd";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <img
              src={logo}
              style={{ height: "100px", marginTop: "-2vh" }}
              alt=""
            />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cources">Cources</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/certification">Certification</Link>
          <Link to="/contact">Contact</Link>

          <div className="enable-mode">
          <Link to="#">
              <Button type="primary mx-2" id="donate">Donate Now</Button>
            </Link>
            <Link to="/signup">
              <Button type="primary mx-2">sign Up</Button>
            </Link>
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
