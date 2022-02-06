import React from "react";
import linkedIn from '../../assets/images/linkedin--v2.png';
import github from '../../assets/images/github--v1.png';
import emailIcon from '../../assets/images/new-post.png';
import TwitterIcon from '../../assets/images/twitter-circled.png'

function ContactForm() {
  
  return (
    <section className="contactForm">
      <h2 data-testid="h1tag" className="mx-2">Contact Me</h2>
      <div className="footer-icons">
        <a href="mailto:viakeegan@gmail.com" className="mx-2 icon">
          <img src={emailIcon}/> <p class="icon-text">Email</p>
        </a>
        <a href="https://github.com/viakeegan" className="mx-2 icon">
          <img src={github}/> <p class="icon-text">GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/keeganjervis/" className="mx-2 icon">
          <img src={linkedIn}/> <p class="icon-text">LinkedIn</p>
        </a>
        <a href="https://twitter.com/keesparc" className="mx-2 icon">
          <img src={TwitterIcon}/> <p class="icon-text">Twitter</p>
        </a>
      </div>
    </section>
  )
}

export default ContactForm;