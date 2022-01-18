import React from 'react';
import PropTypes from 'prop-types';

const BooksItem = (props) => {
  const {
    id, title, author, propsToDeleteBook,
  } = props;

  const deleteBook = (e) => {
    const bookId = e.target.dataset.bookid;
    propsToDeleteBook(bookId);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={deleteBook} data-bookid={id} type="button">Delete</button>
    </div>
  );
};

BooksItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  propsToDeleteBook: PropTypes.func.isRequired,
};

export default BooksItem;
