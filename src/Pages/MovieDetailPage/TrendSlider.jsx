
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartGeneral from './CartGeneral';

const TrendSlider = () => {

    const popularItems = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);
    
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

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
        <div className='flex justify-center border border-blue-600 w-full'>

            <div className="relative overflow-hidden border border-black w-4/5 my-auto">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    onClick={() => handleScroll('left')}
                    disabled={currentPage === 0}
                >
                    ❮
                </button>
                <div className="flex justify-around gap-4 my-5 ">
                    {pages[currentPage]?.length > 0 && pages[currentPage].map((item) => (
                        <CartGeneral 
                             item={item}
                             key={item.id}
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
        </div>
    );
};

export default TrendSlider;
