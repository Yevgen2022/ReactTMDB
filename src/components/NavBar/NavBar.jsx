import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import CartOfOneMovie from '../CartOfOneMovie/CartOfOneMovie';



const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex flex-col items-center justify-around md:flex-row">
        <li className=''>
          <Link to="/" className="navBar__li">Home</Link>
        </li>
        <li className=''>
          <Link to="/favorites" className="navBar__li">Favorites</Link>
        </li>
        <li className=''>
          <Link to="/movie-detail" className="navBar__li">Test page</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
