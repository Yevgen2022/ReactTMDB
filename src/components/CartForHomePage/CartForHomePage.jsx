import React from 'react';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../config";

const CartForHomePage = ({ average, id, poster, release, title }) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md flex flex-col w-52 m-2">
            <img 
                src={`${IMAGE_BASE_URL}/w200${poster}`} 
                alt={title} 
                className="w-full h-auto object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-1">Release Date: {release}</p>
                <p className="text-sm text-gray-600">Average Rating: {average}</p>
            </div>
        </div>
    );   
};

export default CartForHomePage;
