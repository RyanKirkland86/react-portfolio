// import React, { useEffect, useState } from "react";
import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import { Link } from "react-router-dom";

function Work() {
    return (
        <section className="hero has-bg-img is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                <p>
                    <Link to={"/react-portfolio/about"} className="button is-info is-light is-rounded aboutButton ">ABOUT ME</Link>
                    <Link to={"/react-portfolio"} className="button is-info is-light is-rounded homeButton">HOME</Link>
                </p>
                <br></br>
                    <Project
                        projects={projects}
                    />
                </div>
            </div>
        </section>
    )
}

export default Work;