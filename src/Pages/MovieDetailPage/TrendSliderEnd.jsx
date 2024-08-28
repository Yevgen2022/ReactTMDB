// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import CartGeneral from './CartGeneral';

// const TrendSlider = () => {
//     const popularItems = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);

//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage, setItemsPerPage] = useState(6);

//     useEffect(() => {
//         const updateItemsPerPage = () => {
//             if (window.innerWidth >= 1280) {
//                 setItemsPerPage(6); // xl
//             } else if (window.innerWidth >= 1024) {
//                 setItemsPerPage(5); // lg
//             } else if (window.innerWidth >= 768) {
//                 setItemsPerPage(4); // md
//             } else if (window.innerWidth >= 640) {
//                 setItemsPerPage(3); // sm
//             } else {
//                 setItemsPerPage(2); // base
//             }
//         };

//         // Set initial items per page
//         updateItemsPerPage();
        
//         // Update items per page on resize
//         window.addEventListener('resize', updateItemsPerPage);

//         // Clean up event listener on component unmount
//         return () => {
//             window.removeEventListener('resize', updateItemsPerPage);
//         };
//     }, []);


//     useEffect(() =>{
//         console.log(window.innerWidth);
//     },[itemsPerPage])

//     const handleScroll = (direction) => {
//         if (direction === 'left' && currentPage > 0) {
//             setCurrentPage(prevPage => prevPage - 1);
//         } else if (direction === 'right' && (currentPage + 1) * itemsPerPage < popularItems.length) {
//             setCurrentPage(prevPage => prevPage + 1);
//         }
//     };

//     const pages = Array.from({ length: Math.ceil(popularItems.length / itemsPerPage) }, (_, index) =>
//         popularItems.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
//     );

//     // Dynamically set grid columns based on itemsPerPage
//     const gridClass = `grid my-5 gap-x-8 justify-items-center px-4 ${itemsPerPage >= 6 ? 'grid-cols-6' : 
//                          itemsPerPage === 5 ? 'grid-cols-5' : 
//                          itemsPerPage === 4 ? 'grid-cols-4' : 
//                          itemsPerPage === 3 ? 'grid-cols-3' : 
//                          itemsPerPage === 2 ? 'grid-cols-2' : 
//                          'grid-cols-1 '} `;

//     return (
//         <>
//         <div className="relative overflow-hidden border border-black">
//             <button
//                 className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
//                 onClick={() => handleScroll('left')}
//                 disabled={currentPage === 0}
//             >
//                 ❮
//             </button>

//             <div className={gridClass}>
//                 {pages[currentPage]?.length > 0 && pages[currentPage].map((item) => (
//                     <CartGeneral 
//                         item={item}
//                         key={item.id}
//                     />
//                 ))}
//             </div>

//             <button
//                 className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
//                 onClick={() => handleScroll('right')}
//                 disabled={(currentPage + 1) * itemsPerPage >= popularItems.length}
//             >
//                 ❯
//             </button>
//         </div>
//         </>
//     );
// };

// export default TrendSlider;


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartGeneral from './CartGeneral';

const TrendSlider = () => {
    const popularItems = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);

    const [currentPage, setCurrentPage] = useState(0);
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

    useEffect(() => {
        console.log(window.innerWidth);
    }, [itemsPerPage]);

    const handleScroll = (direction) => {
        if (direction === 'left' && currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        } else if (direction === 'right' && (currentPage + 1) * itemsPerPage < popularItems.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const pages = Array.from({ length: Math.ceil(popularItems.length / itemsPerPage) }, (_, index) =>
        popularItems.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
    );

    return (
        <>
            <div className="relative overflow-hidden border border-black">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    onClick={() => handleScroll('left')}
                    disabled={currentPage === 0}
                >
                    ❮
                </button>

                <div className="flex my-5 mx-8 gap-x-12 px-4 justify-center border border-green-700">
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
        </>
    );
};

export default TrendSlider;
