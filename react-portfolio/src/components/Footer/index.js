import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column">
                            <a href="https://github.com/RyanKirkland86">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <p>
                                GitHub
                            </p>
                        </div>
                        <div className="column">
                            <a href="https://www.linkedin.com/in/ryan-kirkland-619942200/">
                                <i className="fab fa-linkedin-in fa-3x"></i>
                            </a>
                            <p>
                                LinkedIn
                            </p>
                        </div>
                        <div className="column">
                            <a href="https://drive.google.com/uc?id=1-Rbf8Oiv5FKASO8Jninpw-Q0VnUDlPMU&export=download" download>
                                <i className="fa fa-download fa-3x" aria-hidden="true"></i>
                            </a>
                            <p>
                                Resume
                            </p>
                        </div>
                        <div className="column"></div>
                    </div>
                </p>
            </div>
        </footer>
    )
}

export default Footer;