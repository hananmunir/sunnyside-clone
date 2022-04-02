import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Footer.css";
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-text'>
        <span className='footer-title'>sunnyside</span>
        <ul className='footer-links links'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <ul className='footer-icons links'>
          <li>
            <FacebookIcon style={{ fontSize: "1.5rem" }} />{" "}
          </li>
          <li>
            <InstagramIcon style={{ fontSize: "1.5rem" }} />{" "}
          </li>
          <li>
            <TwitterIcon style={{ fontSize: "1.5rem" }} />{" "}
          </li>
          <li>
            <PinterestIcon style={{ fontSize: "1.5rem" }} />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
