import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import MovieDetailPage from '../../Pages/MovieDetailPage/MovieDetailPage';
import FavoritePage from '../../Pages/FavoritePage/FavoritePage';
// import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return (      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-detail" element={<MovieDetailPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>   
  );
};

export default AppRoutes;


// const routes = [
//     { path: '/', element: <Home /> },
//     { path: '/about', element: <About /> },
// ];
// const element = useRoutes(routes);

// return element;