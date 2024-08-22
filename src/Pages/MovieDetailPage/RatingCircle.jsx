import React from 'react';

const RatingCircle = ({ rating }) => {
    const normalizedRating = Math.max(0, Math.min(100, rating));
    const strokeWidth = 10;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedRating / 100) * circumference;

    return (
        <div className="flex items-center justify-center w-32 h-32">
            <svg
                width="120"
                height="120"
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
                    stroke="#4caf50"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="20"
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
