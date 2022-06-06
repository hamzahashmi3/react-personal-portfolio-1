import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Instagram, Twitter } from "@material-ui/icons";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> H A M Z A H&nbsp;&nbsp;&nbsp;&nbsp; H A S H M I</h2>
        <div className="prompt">
          <p>Over 2+ year of IT experience as MERN developer with expertise in React.js frontend and express.js & nest.js frame work with node who is enthusiastic about writing clean, efficient, and accessible code in a functional frame­work. Committed to the total development lifecycle, the maintenance of optimized code quality and bug-free applications is of the utmost importance.</p>
          <a href="https://www.linkedin.com/in/hamza-hashmi-6b5272135/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/hamzahashmi3" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://www.instagram.com/hashmi5146/" target="_blank">
            <Instagram />
          </a>
          <a href="https://twitter.com/hamzahashmi04" target="_blank">
            <Twitter />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              Ionic, BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Nest.js, GraphQL, ApolloServer, REST API,
              MySQL, MsSQL, Postgres SQL, MongoDB, DynamoDB, DigitalOcean, Git (GitHub), GitLab, Bitbucket
            </span>
          </li>
          <li className="item">
            <h2>Languages & Architecture</h2>
            <span>JavaScript, NodeJS, TypeScript, CQRS / GRPC (Design Patterns), 
              Microservices + Monolithic + serverless (Architectures), </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
