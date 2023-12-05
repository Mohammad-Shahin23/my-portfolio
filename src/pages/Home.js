import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Mohammad </h2>
        <div className='prompt'>
          <p> A Mechatronics Engineer and Software developer with passion for learning and creating.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
       

      </div>
      <div className='skills'>
        <h1> Skills </h1>
       
        
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <span>
              ReactJS, Bootstrap, Material-UI, Tailwind CSS, HTML, CSS.
            </span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span>
              NodeJS, ExpressJS, MongoDB, SQL, PSQL, MongoDB.
            </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span>
              Python, JavaScript.
            </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home