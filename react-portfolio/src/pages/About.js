import React from "react";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function About() {
    return (
        <div className="hero has-bg-img is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
                About Me
            </p>
            <p>
              <Link to={"/work"} className="button is-info is-light is-rounded portfolioButton">PROJECTS</Link>
              <Link to={"/react-portfolio"} className="button is-info is-light is-rounded homeButton">HOME</Link>
            </p>
            <br></br>
            <div className="container is-fluid">
              <div className="tile is-ancestor">
                <div className="tile is-4 is-vertical is-parent">
                  <div className="tile is-child box has-text-centered box">
                    <img src="./img/200 Square Headshot.jpg" alt="Ryan Kirkland headshot" id="photo is-centered"></img>
                  </div>
                  <div className="tile is-child has-text-centered box">
                    <p className="subtitle"><strong>Education</strong></p>
                    <p>
                      <strong>
                        UC Berkeley Extension:
                        <br></br>
                      </strong>
                      <i>Full Stack Web Development</i><br></br>
                      December 2020 - March 2021
                    </p>
                    <br></br>
                    <p>
                      <strong>
                        Riverside Community College:
                        <br></br>
                      </strong>
                      <i>Music Performance</i><br></br>
                      September 2005 - June 2008
                      <br></br>
                    </p>
                    <br></br>
                    <p className="subtitle"><strong>Resume</strong></p>
                    <ul className="skills">
                      <li>
                        <a href="https://drive.google.com/uc?id=1-Rbf8Oiv5FKASO8Jninpw-Q0VnUDlPMU&export=download" download>
                          <i className="fa fa-download fa-3x" aria-hidden="true"></i>
                        </a>
                      </li>
                      <strong>
                        <li>Download PDF</li>
                      </strong>
                    </ul>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box has-text-centered horizontal">
                    <p className="title">Ryan Kirkland</p>
                    <p>
                      I was born and raised in a small lakeside town in Southern California. My formative years were spent participating
                      in any music activity I could get into. Playing the trumpet took me across the country and allowed me to travel the world.
                      The competitive nature, drive to succeed, and insatiable creative desire I gained from music has defined my life.
                    </p>
                    <br></br>
                    <p>
                      During the last recession I took my music performance skills into something that made a bit more money: bartending. And for the
                      last decade I have worked in the service industry. From managing a twenty million dollar business on the Las Vegas Strip, to working in some of
                      San Francisco's most iconic cocktails bars and nightlife establishments, I built a career for myself that I enjoyed and played to my 
                      creative strengths and passions.
                    </p>
                    <br></br>
                    <p>
                      That is, until the pandemic hit...
                    </p>
                    <br></br>
                    <p>
                      I always used to joke that the biggest reason I got into the bar industry, aside from the money, was that the job
                      was recession proof. If things went south again, I'd always have bartending to fall back on. And historically that was true.
                      But guess what? It's most definitely not pandemic proof. And like many people in my industry, I was faced with my entire livelihood
                      evaporating overnight in March 2020.
                    </p>
                    <br></br>
                    <p>
                      Instead of letting this beat me down, I started teaching myself the basics of web development with online tutorials, YouTube Videos,
                      and blog posts. With the help of UCB Coding Bootcamp over the last few months, I have grown to be a competant web developer. I hope to 
                      take advantage of these newfound skills and apply them to a new career in web development. I'm incredibly excited to see where this
                      takes me!
                    </p>
                    <br></br>
                    <p className="subtitle"><strong>Languages and skills</strong></p>
                    <ul className="skills">
                        <div className="columns">
                            <div className="column">
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQUERY</li>
                                <li>JSON</li>
                                <li>Server Side API</li>
                                <li>Front-End Web Development</li>
                                <li>Back-End Web Development</li>
                                <li>Full-Stack Development</li>
                                <li>Data Structures and Algorithms</li>
                            </div>
                            <div className="column">
                                <li>Web API</li>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                                <li>AJAX</li>
                                <li>GitHub</li>
                                <li>Heroku</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>Client Side Storage</li>
                            </div>
                            <div className="column">
                                <li>Postman</li>
                                <li>Relational Databases</li>
                                <li>indexDB</li>
                                <li>MongoDB</li>
                                <li>Mongoose ODM</li>
                                <li>ES6</li>
                                <li>Passport.js</li>
                                <li>JWT</li>
                                <li>React</li>
                                <li>JSX</li>
                                <li>React Hooks</li>
                            </div>
                        </div>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default About;