import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({ title: '', author: '', pages: '', price: '' });

  // Fetch all books from the server
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    
    fetchBooks();
  }, []);

  // Delete a book by ID
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Set the book to be edited
  const handleEditClick = (book) => {
    setEditingBook(book);
    setUpdatedBook({ title: book.title, author: book.author, pages: book.pages, price: book.price });
  };

  // Handle changes in the update form
  const handleUpdateChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  // Submit the updated book data
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Updating book with ID:', editingBook._id); // Debugging log
    
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${editingBook._id}`, updatedBook);
      setBooks(books.map(book => (book._id === editingBook._id ? response.data : book)));
      setEditingBook(null); // Close the edit form
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book. Please try again.');
    }
  };

  return (
    <>
    <h2>Book List</h2>
    <div className='booklist'>
      {books.map(book => (
        <div key={book._id} className='books'>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
          <p>Price: ${book.price}</p>
          <button onClick={() => deleteBook(book._id)} className='delete-btn'>Delete</button>
          <button onClick={() => handleEditClick(book)} className='update-btn'>Update</button>
        </div>
      ))}

      {editingBook && (
        <form onSubmit={handleUpdateSubmit}>
          <h3>Update Book</h3>
          <input 
            name="title" 
            placeholder="Title" 
            value={updatedBook.title} 
            onChange={handleUpdateChange} 
            required 
          />
          <input 
            name="author" 
            placeholder="Author" 
            value={updatedBook.author} 
            onChange={handleUpdateChange} 
            required 
          />
          <input 
            name="pages" 
            placeholder="Pages" 
            value={updatedBook.pages} 
            onChange={handleUpdateChange} 
            required 
          />
          <input 
            name="price" 
            placeholder="Price" 
            value={updatedBook.price} 
            onChange={handleUpdateChange} 
            required 
          />
          <button type="submit">Update Book</button>
          <button type="button" onClick={() => setEditingBook(null)}>Cancel</button>
        </form>
      )}
    </div>
    </>
  );
};

export default BookList;