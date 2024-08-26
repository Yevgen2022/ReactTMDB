import React from 'react';
import { API_KEY, IMAGE_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import RatingCircle from './RatingCircle';

const CartForPopular = ({ id, poster, release, title, rating,type }) => {
    const navigate = useNavigate();

    const getMovieByID = () => {
         if (type === "movie") {
        navigate(`/movie/${id}?api_key=${API_KEY}`);
         } else if (type === "tv") {
         navigate(`/tv/${id}?api_key=${API_KEY}`);
    }
     }

    return (
        <div onClick={getMovieByID} className="relative flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg w-48 max-w-48 m-2 cursor-pointer">

            <div className="h-72 w-full overflow-hidden rounded-t-lg mb-4">
                <img
                    src={`${IMAGE_BASE_URL}/w200${poster}`}
                    alt={title}
                    className="w-full h-full object-fit"
                    loading='lazy'
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-800">{title}</h3>

                <p className="text-sm text-gray-600 mb-1">{release}</p>
            </div>

            <div className='container_rating absolute top-64 left-0'>
                 <RatingCircle rating={rating} /> 
            </div>
        </div>
    );
};

export default CartForPopular;
