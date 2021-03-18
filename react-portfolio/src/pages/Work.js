// import React, { useEffect, useState } from "react";
import React from "react";
import Project from "react";
import projects from "../projects.json";

function Work() {
    return (
        <div>
            <Project
                projects={projects}
            />
        </div>
    )
}

export default Work;