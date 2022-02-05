import React from "react";
import { Row, Col } from 'react-bootstrap';

function Resume() {
  return (
    <div className="resume">
      <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">Font-end Technologies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>AJAX</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                    <li>Framework (Bootstrap, Materalize)</li>
                    <li>Bulma CSS Framework</li>
                    <li>UI/UX Design</li>
                    <li>Responsive Web Design</li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">Back-end Technologies</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Sequelize</li>
                    <li>MySQL (mysql lite3, mysql2)</li>
                    <li> NoSQL (MongoDB, Mongoose)</li>
                    <li> API's (web, third-party, RESTful, server-side)</li>
                    <li>Templating language (Handlebars)</li>
                </ul>
            </Col>

            <Col lg={4} md={12}>
            <h2 class="resume">Additional Skills</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Microsoft VS Code</li>
                    <li>Microsoft Office Suite</li>
                    <li>Adobe Creative Suite</li>
                    <li>Google Docs Suite</li>
                    <li>Open Broadcast Software (OBS/StreamLabsOBS)</li>
                </ul>
            </Col>

            <Col lg={4} md={12}>
            <h2 class="resume">My Education</h2>
            <p>
                <span className="school-name">UNIVERSITY of CENTRAL FLORIDA</span><br></br>
                Full Stack Boot Camp - Certification 
                <br></br>
                <br></br>
                <span className="school-name">UNIVERSITY of NORTH FLORIDA</span><br></br>
                 Marketing & Logistics - Bachelor of Business Admin.
                <br></br>
             </p>
            </Col>

        <Col lg={4} md={12}>
        
        </Col>
        </Row>
        </div>
        <h2 className="mx-2"><a style={{'text-decoration': 'underline'}} href="https://docs.google.com/document/d/1AsFjjCUxM-cDBLCPAifB0dEAZxMcsQiwKuEc31wuBc8/edit?usp=sharing">View Resume.</a></h2>
        <Col lg={4} md={12}>
 
    </Col>
    </div>
  );
}

export default Resume;