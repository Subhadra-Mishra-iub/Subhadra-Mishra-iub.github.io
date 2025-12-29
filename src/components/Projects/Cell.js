import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          {data.link ? (
            <a href={data.link}>{data.title}</a>
          ) : (
            <span>{data.title}</span>
          )}
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      {data.image && (
        data.link ? (
          <a href={data.link} className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </a>
        ) : (
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </div>
        )
      )}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
