import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Subhadra Mishra's portfolio website. Software Engineer with strengths in Data, Cloud, and Automation. "
      + 'Computer Science graduate student at Indiana University Bloomington.'
    }
  >
    <article className="post hero-section" id="index">
      <header>
        <div className="title">
          <h1 className="hero-name">Subhadra Mishra</h1>
          <p className="hero-title">
            Software Engineer with Strengths in Data, Cloud, and Automation
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button button-primary">
              View Projects
            </Link>
            <Link to="/contact" className="button button-secondary">
              Contact
            </Link>
          </div>
        </div>
      </header>
      <section className="about-preview">
        <h2>About</h2>
        <p>
          Master&apos;s in Computer Science from Indiana University Bloomington
          {' '}with experience building full-stack applications, data pipelines,
          {' '}and cloud systems. Currently working as a Data Analyst and
          {' '}Broadcast Systems Engineer at WFIU/WTIU. Seeking full-time
          {' '}engineering roles starting 2025–2026.
        </p>
        <p>
          Strong in Python, JavaScript/TypeScript, React, SQL, AWS, and
          {' '}automation frameworks. Proven track record in software development,
          {' '}data engineering, QA automation, and cloud infrastructure.
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
