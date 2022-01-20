import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/books';

const categoriesArr = ['Choose a Category', 'Action', 'Drama', 'Children Books', 'Romance', 'Comedy', 'Horror', 'Science', 'Health', 'History', 'Business'];

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categoriesArr[0]);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const book = {
    item_id: uuidv4(),
    title,
    category,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(postBook(book));
      setTitle('');
      setCategory(categoriesArr[0]);
      e.target.reset();
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={onChange}
          name="title"
          value={title}
          required
        />
        <select name="category" onChange={(category) => setCategory(category.target.value)}>
          {categoriesArr.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
