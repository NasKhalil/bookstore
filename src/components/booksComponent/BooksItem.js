import React from 'react';

const BooksItem = () => (
  <div>
    <h2>Add New Book</h2>
    <form className="form">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Categorie" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BooksItem;
