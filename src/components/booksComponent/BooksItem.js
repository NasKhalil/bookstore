import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import './BooksItem.css';
import 'react-circular-progressbar/dist/styles.css';

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
    <div className="item-container">
      <div className="left-item">
        <p>{category}</p>
        <h2>{title}</h2>
        <span>Anonymous</span>
        <div className="buttons">
          <button type="button">Comments</button>
          <span className="separation-left" />
          <button onClick={handleDeleteBook} data-bookid={id} type="button">Remove</button>
          <span className="separation-left" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-item">
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar value={66} styles={buildStyles({ pathColor: '#0290ff' })} />
        </div>
        <div className="progress-text">
          <p>66%</p>
          <span>Completed</span>
        </div>
      </div>
      <span className="separation-right" />
      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <span>
          Chapter
        </span>
        <div>
          <button className="chapte-progress-btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BooksItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BooksItem;
