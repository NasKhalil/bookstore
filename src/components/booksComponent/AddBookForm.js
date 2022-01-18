import { React, useState } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const { propsToAddBook } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.title.trim() && formState.author.trim()) {
      propsToAddBook(formState.title, formState.author);
      setFormState({
        title: '',
        author: '',
      });
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
          value={formState.title}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={onChange}
          name="author"
          value={formState.author}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

AddBookForm.propTypes = {
  propsToAddBook: PropTypes.func.isRequired,
};

export default AddBookForm;
