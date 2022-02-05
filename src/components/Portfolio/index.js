import React, {useState} from "react";
import Project from "../Project";
import weatherBuddy from '../../assets/images/weather-dashboard.png';
import nodeJSreadme from '../../assets/images/nodesdemo.png';
import runBuddy from '../../assets/images/run-buddy.png';
import noteTaker from '../../assets/images/note-taker.png';
import nodeJShtml from '../../assets/images/screenshot.png';
import workDay from '../../assets/images/daily-planner.png';
import InterviewKey from '../../assets/images/interview-key.PNG';
import BookSearch from '../../assets/images/book-search.PNG';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Interview Key',
      link: 'https://morning-coast-83495.herokuapp.com/',
      githubLink: 'https://github.com/Danster4/interview-key', 
      description: 'MERN Stack interview management application that allows users to login, create goals, and organize their interviews' ,
      image: InterviewKey
    },
    
    {
      name: 'Google Book Search',
      link: 'https://wraithq.herokuapp.com/',
      githubLink: 'https://github.com/viakeegan/mern-google-book-search-engine-21', 
      description: 'Fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack.' ,
      image: BookSearch
    },
    
    {
      name: 'NODE.js ReadME',
      githubLink: 'https://github.com/viakeegan/professional-readkee-generator', 
      description: 'This application will allow you to create a README doc using only javascript and node.js this is a demo of the application.' ,
      image: nodeJSreadme
    },
    {
      name: 'NODE.js HTML',
      githubLink: 'https://github.com/viakeegan/avengers-assemble-generator', 
      description: 'The objective of this project was to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.' ,
      image: nodeJShtml
    },
    {
      name: 'Weather Dashboard',
      link: 'https://viakeegan.github.io/kee-weather-dashboard/',
      githubLink: 'https://github.com/viakeegan/kee-weather-dashboard', 
      description: 'Weather app that displays todays weather data by city and saves each search as a button.' ,
      image: weatherBuddy
    },
    {
      name: 'Note Taker',
      link: 'https://shrouded-cliffs-50884.herokuapp.com/',
      githubLink: 'https://github.com/viakeegan/notes-are-kee', 
      description: 'A simple to use note taking app that utilizes Node.js and Express.js to write and save notes.' ,
      image: noteTaker
    },
    {
      name: 'Run Buddy',
      link: 'https://viakeegan.github.io/run-buddy/',
      githubLink: 'https://github.com/viakeegan/run-buddy', 
      description: 'HTML, CSS',
      image: runBuddy 
    },
    {
      name: 'Work Day Scheduler',
      link: 'https://viakeegan.github.io/work-day-scheduler/',
      githubLink: 'https://github.com/viakeegan/work-day-scheduler', 
      description: 'Our objective was to create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.' ,
      image: workDay
    }
  ]);

  return (
    <div className="portfolio">
      <h2 className="mx-2">Projects</h2>
      <Project
        projects={projects}
      ></Project>
    </div>
  );
}

export default Portfolio;