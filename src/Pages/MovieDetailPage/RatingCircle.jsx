import React from 'react';

const RatingCircle = ({ rating }) => {
    const normalizedRating = Math.max(0, Math.min(100, rating));
    const strokeWidth = 10;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedRating / 100) * circumference;

    // We determine the color based on the rating
    let strokeColor;
    if (normalizedRating <= 25) {
        strokeColor = '#FF0000'; // Red
    } else if (normalizedRating <= 50) {
        strokeColor = '#FF69B4'; // Orange  
    } else if (normalizedRating <= 70) {
        strokeColor = '#a7c957'; // ligh-green
    } else {
        strokeColor = '#4CAF50'; // green
    }


    return (
        <div className="flex items-center justify-center w-16 h-16 border-none">
            <svg
                width="60"
                height="60"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="black"            //"none"
                    stroke="#e0e0e0"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    stroke={strokeColor} // Dinamic color
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"  // Обертає на -90 градусів навколо центру
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="30"
                    fontWeight="thin"
                    fill="white"       //"#333"
                >
                    {normalizedRating}%
                </text>
            </svg>
        </div>
    );
};

export default RatingCircle;
