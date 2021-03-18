import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Project extends Component {
    render() {
    return (
        <div className="tile is-ancestor">
        {this.props.projects.map(({ id, title, description, image, github, website}) => (
            <div className="tile" key={id}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={image} alt={title}></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">
                                    <a href={website}>
                                        Deployed Link
                                    </a>
                                </p>
                                <p>
                                    <a href={github}>
                                        <i className="fab fa-github fa-3x"></i>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="content">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )}
}

export default Project;