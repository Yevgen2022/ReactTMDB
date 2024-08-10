import React, { useState, useEffect } from 'react';
import CartOfOneMovie from '../CartOfOneMovie/CartOfOneMovie'; 

const SliderOfMovie = ({ fetchMovies }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  
  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchMovies();
      setItems(data);
    };

    loadItems();
  }, [fetchMovies]);

  const handleScroll = (direction) => {
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    } else if (direction === 'right' && (currentPage + 1) * itemsPerPage < items.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const pages = Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => 
    items.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );

  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => handleScroll('left')}
        disabled={currentPage === 0}
      >
        ❮
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 my-5">
        {pages[currentPage]?.map((item) => (
          <CartOfOneMovie
            key={item.id}
            title={item.title || item.name}
            posterPath={item.poster_path}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => handleScroll('right')}
        disabled={(currentPage + 1) * itemsPerPage >= items.length}
      >
        ❯
      </button>
    </div>
  );
};

export default SliderOfMovie;
