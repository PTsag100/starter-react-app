import React from "react";
import "./Socials.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
export default function Socials() {
  return (
    <div className="socials-container">
      <a
        href="https://www.facebook.com/groups/132835100779584"
        className="social-logo-container"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.instagram.com/ieeeunipisb/"
        className="social-logo-container"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/ieee-unipi-student-branch/about/"
        className="social-logo-container"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://discord.gg/pXqkFwVA" className="social-logo-container">
        <FaDiscord />
      </a>
    </div>
  );
}
