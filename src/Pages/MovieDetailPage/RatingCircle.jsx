import React from 'react';

const RatingCircle = ({ rating }) => {
    const normalizedRating = Math.max(0, Math.min(100, rating));
    const strokeWidth = 10;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedRating / 100) * circumference;


    // Визначаємо колір в залежності від рейтингу
    const getColor = (rating) => {
        if (rating >= 75) return '#4caf50'; // зелений
        if (rating >= 50) return '#ffeb3b'; // жовтий
        return '#f44336'; // червоний
    };

    const color = getColor(normalizedRating);


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
                    fill="black"             //"none" Це робить внутрішню частину кола чорного кольору. "none" означало б, що внутрішня частина залишається прозорою.
                    stroke="#e0e0e0"        // Це колір обвідки (колір контуру).
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"                             // Внутрішня частина цього кола прозора.
                    //stroke={color}                       // Динамічний колір
                    stroke="#4caf50"                      // Колір обвідки цього кола зелений.
                    strokeDasharray={circumference}      // Це визначає довжину штрихів у межах обвідки.
                    strokeDashoffset={offset}           // Це зміщення штриха, що використовується для створення ефекту прогресу.
                    strokeLinecap="round"              // Кінці обвідки закруглені.
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
