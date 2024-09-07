import React, { useState, useEffect } from 'react';
import CartGeneral from '../../../components/CartGeneral/CartGeneral';

import { useSelector } from 'react-redux';

const SliderGeneral = ({ arrayItems }) => {

    //const [currentPage, setCurrentPage] = useState(0);     //previous value
    const currentPage = useSelector((state) => state.TrendMovieAndTvSlice2.setCurrentPageSlice);

    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerPage(6); // xl
            } else if (window.innerWidth >= 1024) {
                setItemsPerPage(5); // lg
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(4); // md
            } else if (window.innerWidth >= 640) {
                setItemsPerPage(3); // sm
            } else {
                setItemsPerPage(2); // base
            }
        };

        // Set initial items per page
        updateItemsPerPage();

        // Update items per page on resize
        window.addEventListener('resize', updateItemsPerPage);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    // Reset currentPage to 0 when changing arrayItems
    useEffect(() => {
        setCurrentPage(0);
    }, [arrayItems]);



    const handleScroll = (direction) => {
        if (direction === 'left' && currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        } else if (direction === 'right' && (currentPage + 1) * itemsPerPage < arrayItems.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const pages = Array.from({ length: Math.ceil(arrayItems.length / itemsPerPage) }, (_, index) =>
        arrayItems.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
    );

    return (
        <>
            <div className="relative overflow-hidden">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    onClick={() => handleScroll('left')}
                    disabled={currentPage === 0}
                >
                    ❮
                </button>

                <div className="flex my-5 mx-8 gap-x-12 px-4 justify-center">
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
                    disabled={(currentPage + 1) * itemsPerPage >= arrayItems.length}
                >
                    ❯
                </button>
            </div>
        </>
    );
};

export default SliderGeneral;
