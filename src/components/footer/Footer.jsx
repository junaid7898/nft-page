import React from "react";
import FooterLinks from "./subComponents/FooterLinks";
import FooterLogo from "./subComponents/FooterLogo";
import FooterRight from "./subComponents/FooterRight";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-top">
          <FooterLogo />
          <FooterLinks className="footer-links fs-sm" />
          <FooterRight className="footer-right" />
        </div>
        <ul className="footer-bottom fs-sm">
          <li>Cardano Crocs Club © 2022</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
