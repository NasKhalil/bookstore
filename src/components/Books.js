import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddBookForm from './booksComponent/AddBookForm';
import BooksList from './booksComponent/BooksList';

const Books = () => {
  const myBooks = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (myBooks.length) {
    return (
      <div>
        <BooksList books={myBooks} />
        <AddBookForm />
      </div>
    );
  }

  return (
    <div>
      <h3>There is no book yet</h3>
      <AddBookForm />
    </div>
  );
};

export default Books;
