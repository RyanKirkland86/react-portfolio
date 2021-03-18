import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="hero has-bg-img is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">
                        Ryan Kirkland
                    </p>
                    <p>
                        <img src="https://github.com/RyanKirkland86/react-portfolio/tree/main/react-portfolio/public/img/200 Square Headshot.jpg"></img>
                    </p>
                    <p className="subtitle">
                        Full Stack Web Developer
                    </p>
                    <p>
                        Email: <a href="mailto:ryan.j.kirkland86@gmail.com">ryan.j.kirkland86@gmail.com</a>
                    </p>
                    <p>
                        Phone: (415)602-9465
                    </p>
                    <br></br>
                    <p>
                        <Link to={"/about"} className="button is-info is-light is-rounded aboutButton ">ABOUT ME</Link>
                        <Link to={"/work"} className="button is-info is-light is-rounded portfolioButton">PROJECTS</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;