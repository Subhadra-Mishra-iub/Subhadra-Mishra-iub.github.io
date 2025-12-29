import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link || '#'}>
      {data.number ? (
        <h4 className="course-number">{data.number}:</h4>
      ) : (
        <span className="course-number-empty" />
      )}
      <p className="course-name">{data.title}</p>
    </a>
    {!last && (
      <div className="course-dot">
        <p className="course-name"> &#8226;</p>
      </div>
    )}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    number: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
