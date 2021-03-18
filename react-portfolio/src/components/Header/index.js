import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

function Header() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={"/react-portfolio"} className="navbar-item logo">
                    <img src="https://github.com/RyanKirkland86/react-portfolio/blob/main/react-portfolio/public/img/RKbrand.png" alt="R K initials logo"></img>
                </Link>
            </div>
        </nav>
    )
}

export default Header;