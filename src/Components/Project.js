import React from "react";
import { Link } from "react-router-dom";

export default function Project({ project }) {
  return (
    <div className="items" key={Project.id}>
      <Link className="Link" to={`/ProjectDetails/${project.id}`}>
        <img className="shop" src={project.image} alt="projectPhoto" />
        <h1 className="projectName">{project.name}</h1>
      </Link>
    </div>
  );
}
