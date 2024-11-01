import React from 'react';
import '../styles/ProjectList.css';

const ProjectList = ({ onSelectSubProject }) => {
  const projects = [
    {
      id: 1,
      name: '123 Reno Lane',
      description: 'Complete house renovation',
      subProjects: [
        { id: 1, name: 'Bathroom Reno 1', goal: 'Complete by December', done: 'Tiles installed', issues: 'Leak in shower' },
        { id: 2, name: 'Bathroom Reno 2', goal: 'Install plumbing', done: 'Pipes laid', issues: 'No water pressure' },
        { id: 3, name: 'Kitchen', goal: 'Finish cabinetry', done: 'Cabinets installed', issues: 'Incorrect measurements' },
      ],
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <h4>Sub Projects:</h4>
          <ul>
            {project.subProjects.map((subProject) => (
              <li key={subProject.id} onClick={() => onSelectSubProject(subProject)}>
                {subProject.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;