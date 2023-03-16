import React from "react";
import { ProjectList } from "../Helpers/ProjectList";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="Projects">
      <h1 className="personal">Personal Projects</h1>
      <div className="projectItem">
        {ProjectList.map((project) => {
          return (
            <div key={project.id}>
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
