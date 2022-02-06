import React from "react";
import linkedIn from '../../assets/images/linkedin--v2.png';
import github from '../../assets/images/github--v1.png';
import emailIcon from '../../assets/images/new-post.png';
import TwitterIcon from '../../assets/images/twitter-circled.png';
import YoutubeIcon from '../../assets/images/youtube-icon.png'

function ContactForm() {
  
  return (
    <section className="contactForm">
      <h2 data-testid="h1tag" className="mx-2" style={{'margin-top': 0}}>Contact Me</h2>
      <div className="footer-icons">
        <a href="mailto:viakeegan@gmail.com" className="mx-2 icon"style={{'margin-top': 0}}>
          <img src={emailIcon}/> <p class="icon-text">Email</p>
        </a>
        <a href="https://github.com/viakeegan" className="mx-2 icon"style={{'margin-top': 0}}>
          <img src={github}/> <p class="icon-text">GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/keeganjervis/" className="mx-2 icon"style={{'margin-top': 0}}>
          <img src={linkedIn}/> <p class="icon-text">LinkedIn</p>
        </a>
        <a href="https://twitter.com/keesparc" className="mx-2 icon"style={{'margin-top': 0}}>
          <img src={TwitterIcon}/> <p class="icon-text">Twitter</p>
        </a>
        <a href="https://www.youtube.com/channel/UCqw9B-1yEbb-tw8xTkd2-8w" className="mx-2 icon"style={{'margin-top': 0}}>
          <img src={YoutubeIcon}/> <p class="icon-text">YouTube</p>
        </a>
      </div>
    </section>
  )
}

export default ContactForm;