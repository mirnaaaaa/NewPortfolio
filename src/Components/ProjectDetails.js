import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helpers/ProjectList";
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectDetails() {
  const [project, serProject] = useState();

  const { id } = useParams();

  useEffect(() => {
    const correct = ProjectList.find((x) => x.id == id);
    if (correct) {
      serProject(correct);
    }
  }, [id]);

  return (
    <div className="Projects">
      <div className="details">
        <h1 className="projectTitle">{project?.name}</h1>
        <img className="photo" src={project?.image} alt="projectImage" />
        <h1 className="languages">
          <b>Skills:</b> {project?.skills}
        </h1>
        <div className="useApp">
          <a className="use" href={project?.try}>
            <h1>
              Use app <GoArrowLeft className="GoArrowLeft" />
            </h1>
          </a>
        </div>
        <a className="Link" href={project?.repo}>
          <div className="repo">
            <h1 className="code">repository </h1>
            <AiOutlineGithub className="githubProject" />
          </div>
        </a>
      </div>
    </div>
  );
}
