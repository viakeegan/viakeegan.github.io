import React from "react";
import photo from '../../assets/images/IMG_0473.JPG'

function About() {
    return (
      <div className="about-me">
        <h2 className="mx-2" style={{'flex': '100%'}}>About Me</h2>
        <div className="mx-2 about-me-box">
          <img src={photo} />
          <p className="mx-2" style={{'margin-top': 0}}>
          Consummate Marketing Sales Professional and Full Stack Web Developer, with more than seven years of corporate experience 
          working with well-known companies and technologies to deliver solutions to clients and customers promptly. Adept problem-solving 
          ability and eager to learn and take on new challenges. Creative entrepreneur with a passion for innovation and cutting edge technology. 
          </p>
        </div>
      </div>
    );
  }
  
  export default About;