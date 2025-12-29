import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const ProfileViews = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Subhadra-Mishra-iub/subhadramishra.github.io')
      .then((res) => res.json())
      .then((data) => {
        setViews(data.stargazers_count || 0);
      })
      .catch(() => {
        // Silently fail if API is unavailable
      });
  }, []);

  if (views === null) return null;

  return (
    <p style={{ fontSize: '0.85em', color: '#888', marginTop: '1em' }}>
      Profile views: {views}
    </p>
  );
};

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Subhadra Mishra</h2>
        <p>
          <a href="mailto:subhadramishrag@gmail.com">subhadramishrag@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Subhadra. I am a Computer Science graduate student at{' '}
        <a href="https://luddy.indiana.edu">Indiana University Bloomington</a>.
        {' '}Currently, I work as a Data Analyst, Schedule Director, and Broadcast TMC Operator at{' '}
        <a href="https://wtiu.org">WFIU/WTIU</a>. I have experience in full-stack development,
        {' '}data science, cloud computing, and machine learning.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Subhadra Mishra <Link to="/">Portfolio</Link>.
      </p>
      <ProfileViews />
    </section>
  </section>
);

export default SideBar;
