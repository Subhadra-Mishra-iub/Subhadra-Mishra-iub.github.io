import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import ContactIcons from '../components/Contact/ContactIcons';

const FEATURED_COUNT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? data : data.slice(0, FEATURED_COUNT);

  return (
    <Main title="Projects" description="Learn about Subhadra Mishra's projects.">
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Featured Projects</Link>
            </h2>
            <p>
              A selection of projects showcasing technical skills
              {' '}and problem-solving abilities
            </p>
          </div>
        </header>
        {displayedProjects.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
        {!showAll && data.length > FEATURED_COUNT && (
          <div className="projects-footer">
            <button
              type="button"
              className="button"
              onClick={() => setShowAll(true)}
            >
              View More Projects
            </button>
          </div>
        )}
        <div className="projects-social">
          <p>For more projects, visit my GitHub</p>
          <ContactIcons />
        </div>
      </article>
    </Main>
  );
};

export default Projects;
