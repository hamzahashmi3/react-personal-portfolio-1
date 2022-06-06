import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/hashmi5146/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/hamzahashmi04" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/hamza-hashmi-6b5272135/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/hamza.hashmi.902266" target="_blank">
          <FacebookIcon />
        </a>
        
      </div>
      <p> &copy; 2022 technocannons.com</p>
    </div>
  );
}

export default Footer;




