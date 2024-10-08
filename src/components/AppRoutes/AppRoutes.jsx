import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import TestPage from '../../Pages/TestPage/TestPage';
import FavoritePage from '../../Pages/FavoritePage/FavoritePage';
import OnPageOfMovie from '../../Pages/OnePageOfMovie/OnePageOfMovie';
import GenrePage from '../../Pages/GenrePage/GenrePage';
import OnPageOfTvShow from '../../Pages/OnePageOfTvShow/OnePageOfTvShow'

const AppRoutes = () => {
  return (      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-detail" element={<TestPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/movie/:movieID" element={<OnPageOfMovie />}/>
        <Route path="/tv/:showID" element={<OnPageOfTvShow />}/>
        <Route path="/discover/:genreId" element={<GenrePage />}/>
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