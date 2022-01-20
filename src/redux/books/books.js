const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];
const bookStoreApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A3hpPfFwm7oMDjeE1SQE/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = await fetch(bookStoreApiUrl);
  const result = await books.json();
  if (result) {
    const obj = Object.entries(result);
    const bookArr = obj.map(([id, book]) => {
      const [myBook] = book;
      return { ...myBook, id };
    });
    dispatch(fetchBook(bookArr));
  }
};

export const postBook = (book) => async (dispatch) => {
  const newBook = JSON.stringify(book);
  const books = await fetch(bookStoreApiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: newBook,
  });
  const result = await books.text();

  if (result) {
    dispatch(addBook(result));
    dispatch(getBooks()); // update UI
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const bookToBeDeleted = await fetch(`${bookStoreApiUrl}/${id}`, {
    method: 'DELETE',
  });
  const result = await bookToBeDeleted.text();
  if (result) {
    dispatch(removeBook(id));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
