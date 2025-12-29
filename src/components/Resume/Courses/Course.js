import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-item">
    {data.number ? (
      <span className="course-number">{data.number}:</span>
    ) : null}
    <span className="course-name">{data.title}</span>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    number: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
