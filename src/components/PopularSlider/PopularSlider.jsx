
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPopularItems } from './PopularSliderSlice';
import CartForPopular from '../CartForPopular/CartForPopular';

const PopularSlider = () => {
    const popularItems = useSelector(selectPopularItems);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const handleScroll = (direction) => {
        if (direction === 'left' && currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        } else if (direction === 'right' && (currentPage + 1) * itemsPerPage < popularItems.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const pages = Array.from({ length: Math.ceil(popularItems.length / itemsPerPage) }, (_, index) =>
        popularItems.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
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
            <div className="flex justify-around gap-4 my-5">
                {pages[currentPage]?.map((item) => (
                    <CartForPopular
                        key={item.id}
                        average={item.average}
                        id={item.id}
                        poster={item.poster}
                        release={item.release}
                        title={item.title}
                    />
                ))}
            </div>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                onClick={() => handleScroll('right')}
                disabled={(currentPage + 1) * itemsPerPage >= popularItems.length}
            >
                ❯
            </button>
        </div>
    );
};

export default PopularSlider;
