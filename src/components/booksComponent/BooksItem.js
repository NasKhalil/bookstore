import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

const BooksItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, category,
  } = props;

  const handleDeleteBook = (e) => {
    const bookId = e.target.dataset.bookid;
    dispatch(deleteBook(bookId));
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{category}</p>
      <button onClick={handleDeleteBook} data-bookid={id} type="button">Delete</button>
    </div>
  );
};

BooksItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BooksItem;
