// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-logo">
        <h1>LMS</h1>
      </div>
      <div className="home-links">
        <a href="#">Home</a>
        <Link to="/add-book" className="link-button">Add a Book</Link>
        <Link to="/book-list" className="link-button">View Book List</Link>
      </div>
    </div>
    <div className="container">
      <div className="image-section">
        <img 
          src="https://www.history.ac.uk/sites/default/files/styles/small/public/2019-07/mc_ihr_119_1.JPG?h=9eb0d413&itok=K9ma34SU" 
          alt="Sample" 
          className="image" 
        />
      </div>
      <div className="text-section">
        <h2>Library Management System</h2>
        <p>
        A Library Management System (LMS) is a software application designed to streamline and automate the management of a library’s resources, services, and operations. Libraries serve as repositories of knowledge, housing books, journals, multimedia resources, and now digital content. As libraries have grown, so have the challenges of tracking and organizing a vast amount of resources, making it essential to have a system that efficiently manages cataloging, circulation, inventory, and user access.Cataloging is central to any LMS, allowing librarians to organize resources and make them easily searchable by title, author, genre, or publication date. An efficient cataloging system enables patrons to locate resources quickly, whether in physical or digital format.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home; // Ensure this is correct