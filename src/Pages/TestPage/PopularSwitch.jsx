import React, { useState, useEffect, useRef } from 'react';

const PopularSwitch = () => {
    const [activeTab, setActiveTab] = useState('movie');
    const [runnerStyle, setRunnerStyle] = useState({});
    
    // References to the tab elements
    const movieTabRef = useRef(null);
    const tvTabRef = useRef(null);
    const animationTabRef = useRef(null);

    useEffect(() => {
        const updateRunnerStyle = () => {
            let tabRef;
            if (activeTab === 'movie') {
                tabRef = movieTabRef.current;
            } else if (activeTab === 'tv') {
                tabRef = tvTabRef.current;
            } else if (activeTab === 'animation') {
                tabRef = animationTabRef.current;
            }

            if (tabRef) {
                const tabRect = tabRef.getBoundingClientRect();  //curent block (div)
                const containerRect = tabRef.parentNode.getBoundingClientRect(); //main container (div className="switch_container)

                // Calculate new width and position for switch_runner  
                const elementLeft = tabRect.left - containerRect.left - 1 ; // the left coordinate of the element relative to the container
                const elementWidth = tabRect.width;                   // width of the element
                const runnerWidth = elementWidth;                    // width of switch_runner 
                const newLeft = elementLeft + (elementWidth / 2) - (runnerWidth / 2) ; // calculate position left for switch_runner          
              
                setRunnerStyle({
                    left: `${newLeft}px`,
                    width: `${runnerWidth}px`,
                    height: '100%', 
                    top: '0',
                    transition: 'left 0.3s ease, width 0.3s ease',
                });
            }
        };

        // Initial update and update on tab change
        updateRunnerStyle();

        // Update the runner on window resize
        window.addEventListener('resize', updateRunnerStyle);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateRunnerStyle);
        };
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex">
            <div>
                <h2 className="text-2xl">Popular</h2>
            </div>

            <div className="switch_container flex flex-row items-stretch w-auto border border-black ml-8 rounded-full relative">
                <div 
                    className="switch_runner absolute z-0 top-0 rounded-full bg-gray-800"
                    style={runnerStyle}
                ></div>

                <div className="flex items-center justify-center px-5 rounded-full" ref={movieTabRef}>
                    <h2 
                        className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'movie' ? 'font-medium text-green-500' : ''}`}
                        onClick={() => handleTabClick('movie')}
                    >
                        Movie
                    </h2>
                </div>

                <div className="flex items-center justify-center mx-6 px-5 rounded-full" ref={tvTabRef}>
                    <h2 
                        className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'tv' ? 'font-medium text-green-500' : ''}`}
                        onClick={() => handleTabClick('tv')}
                    >
                        On TV
                    </h2>
                </div>

                <div className="flex items-center justify-center px-5 rounded-full" ref={animationTabRef}>
                    <h2 
                        className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'animation' ? 'font-medium text-green-500' : ''}`}
                        onClick={() => handleTabClick('animation')}
                    >
                        Animation
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PopularSwitch;