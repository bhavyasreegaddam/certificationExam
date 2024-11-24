import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Login from './Login';
import SignUp from './Signup';

const App = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list/*" element={<BookList />} /> {/* Example of a splat route */}
      </Routes>
    </Router>
  );
};

export default App;