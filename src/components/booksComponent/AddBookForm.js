import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/books';

const categoriesArr = ['Choose a Category', 'Action', 'Drama', 'Children Books', 'Romance', 'Comedy', 'Horror', 'Science', 'Health', 'History', 'Business'];

const styles = {
  container: {
    padding: '0 10%',
  },
  addbtn: {
    height: '2.813rem',
    width: '11.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0290ff',
    color: '#fff',
    fontSize: '0.813rem',
    fontWeight: 'bold',
  },
  inputStyles: {
    width: '41.5rem',
    height: '2.813rem',
    borderRadius: '4px',
    border: '1px solid #888',
    backgroundColor: '#fff',
    padding: '0 12px',
  },
  selectStyles: {
    width: '17.813rem',
    height: '2.813rem',
    borderRadius: '4px',
    border: '1px solid #888',
    backgroundColor: '#fff',
    padding: '0 12px',
  },
  formStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  titleStyle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#888',
  },
};

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
    <div style={styles.container}>
      <h2 style={styles.titleStyle}>Add New Book</h2>
      <form style={styles.formStyle} className="form" onSubmit={handleSubmit}>
        <input
          style={styles.inputStyles}
          type="text"
          placeholder="Book Title"
          onChange={onChange}
          name="title"
          value={title}
          required
        />
        <select style={styles.selectStyles} name="category" onChange={(category) => setCategory(category.target.value)}>
          {categoriesArr.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button style={styles.addbtn} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
