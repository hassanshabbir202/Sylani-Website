import React from "react";
import "./Footer.css";
import footerlogo from "../images/sylani.png";

const Foter = () => {
  let data = new Date().getFullYear();
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img src={footerlogo} className="f-logo" alt="" />
          </span>
        </h3>

        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Cource</a>
          <a href="#">Admission</a>
          <a href="#">Admin</a>
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Sylani Welfare © {data}</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>A-25, Bahadurabad Chowrangi Karachi, Pakistan </span> UAN:
            111-729-526 (+0092-213) 4130786-90 <br /> CELL: 92-311-1729526
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a
              href="mailto:support@company.com"
              style={{ color: "hsl(206deg 87% 38%)" }}
            >
              support@sylani.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Sylani are providing a lot of Cources that can a life changing
          oppurtunities
        </p>

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/SaylaniWelfareInternationalTrust/"
            target="_blank"
          >
            <img
              src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark.png"
              style={{ height: "30px", width: "30px", borderRadius: "6px" }}
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/@SaylaniWelfareTrustOfficial"
            target="_blank"
          >
            <img
              src="https://cdn.emojidex.com/emoji/seal/YouTube.png?1512927079"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/company/saylani-welfare-international-trust/?originalSubdomain=pk"
            target="_blank"
          >
            <img
              src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-9ge3d19k.png"
              style={{ height: "30px", width: "30px", bordeRadius: "6px" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
