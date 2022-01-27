import React, {useEffect} from "react";

function Resume() {
  return (
    <div className="resume">
      <h2 className="mx-2">Resume</h2>
      <p className="mx-2">Download my resume <a style={{'text-decoration': 'underline'}} href="https://docs.google.com/document/d/1AsFjjCUxM-cDBLCPAifB0dEAZxMcsQiwKuEc31wuBc8/edit?usp=sharing">here</a></p>
      <div>
        <h3 className="mx-2">Technical Skills</h3>
        <ul className="mx-2">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>AJAX</li>
          <li>ReactJS</li>
          <li>Bootstrap</li>
          <li>AJAX</li>
          <li>APIs</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>ES6</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>Sequelize</li>
          <li>Handlebars</li>
          <li>NoSQL</li>
          <li>Heroku</li>
          <li>Microsoft VS Code</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;