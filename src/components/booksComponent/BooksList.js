import React from 'react';
import PropTypes from 'prop-types';
import BooksItem from './BooksItem';

const BooksList = (props) => {
  const { books } = props;
  return (
    <div>
      {
        books.map((book) => {
          const { id, title, category } = book;
          return (
            <BooksItem
              key={id}
              title={title}
              category={category}
              id={id}
            />
          );
        })
      }
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BooksList;
