import React from 'react';
import PropTypes from 'prop-types';

const BooksItem = (props) => {
  const {
    title, author,
  } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BooksItem;
