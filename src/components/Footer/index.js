import React, {useState, useEffect} from "react";
import linkedIn from '../../assets/images/linkedin-logo-white.png';
import github from '../../assets/images/github-10-512.png';
import stackOverflow from '../../assets/images/stackoverflow-512.png'

function Footer() {
  return (
    <footer className="flex-row">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/keeganjervis/" className="mx-2 icon">
          <img src={linkedIn}/>
        </a>
        <a href="https://github.com/viakeegan" className="mx-2 icon">
          <img src={github}/>
        </a>
        <a href="https://stackoverflow.com/users/16645814/keegan-jervis" className="mx-2 icon">
          <img src={stackOverflow}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;