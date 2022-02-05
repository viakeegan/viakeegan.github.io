import React from "react";
import { Row, Col } from 'react-bootstrap';

function Resume() {
  return (
    <div className="resume">
      <h2 className="mx-2"><a style={{'text-decoration': 'underline'}} href="https://docs.google.com/document/d/1AsFjjCUxM-cDBLCPAifB0dEAZxMcsQiwKuEc31wuBc8/edit?usp=sharing">View Resume.</a></h2>
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
          <li>ES6</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>Sequelize</li>
          <li>Handlebars</li>
          <li>NoSQL</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Microsoft VS Code</li>
          <li>Microsoft Office Suite</li>
          <li>Adobe Creative Suite</li>
        </ul>
      </div>

      <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">font-end technologies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, Materalize)
                    </li>
                    <li>
                        UI/UX Design
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql lite3, mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>

        <Col lg={4} md={12}>
        <h2 class="education">my education</h2>
        <p>
          <span className="school-name">UC BERKELEY EXTENSION</span><br></br>
          Full Stack Boot Camp - Certification 
          <br></br>
          <br></br>
          <span className="school-name">SAN FRANCISCO STATE UNIVERSITY</span><br></br>
          Business Admin & Management - BS
          <br></br>
        </p>
        </Col>
        </Row>
        </div>
    </div>
  );
}

export default Resume;