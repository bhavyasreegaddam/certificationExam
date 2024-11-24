import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', pages: '', price: '' });
  const [error, setError] = useState(null); // State for error handling

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/books', book);
      console.log('Book added:', response.data);
      // Show success toast notification
      toast.success('Book added successfully!');
      // Reset form fields after successful submission
      setBook({ title: '', author: '', pages: '', price: '' });
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error adding book:', error);
      setError('Failed to add book. Please try again.');
      // Show error toast notification
      toast.error('Failed to add book. Please try again.');
    }
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} value={book.title} required /><br /><br />
        <input name="author" placeholder="Author" onChange={handleChange} value={book.author} required /><br /><br />
        <input name="pages" placeholder="Pages" onChange={handleChange} value={book.pages} required /><br /><br />
        <input name="price" placeholder="Price" onChange={handleChange} value={book.price} required /><br /><br />
        <button type="submit">Add Book</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <ToastContainer /> {/* Toast container to display notifications */}
    </>
  );
};

export default AddBook;
