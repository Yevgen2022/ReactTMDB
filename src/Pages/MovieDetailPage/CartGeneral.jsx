import React from 'react';
import { API_KEY, IMAGE_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import RatingCircle from './RatingCircle';

// const CartForPopular = ({ id, poster, release, title, rating,type }) => {
    const CartForPopular = ({ item }) => {
    const navigate = useNavigate();

    const getMovieByID = () => {
         if (item.mediaType === "movie") {
        navigate(`/movie/${item.id}?api_key=${API_KEY}`);
         } else if (item.mediaType === "tv") {
         navigate(`/tv/${item.id}?api_key=${API_KEY}`);
    }
     }

    return (
        <div onClick={getMovieByID} className="relative flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg w-40 cursor-pointer">

            <div className="h-60 w-full overflow-hidden rounded-t-lg mb-2">
                <img
                    src={`${IMAGE_BASE_URL}/w200${item.posterPath}`}
                    alt={item.title}
                    className="w-full h-full object-fit"
                    loading="lazy"
                />
            </div>
            <div className="p-4 text-center flex flex-col justify-between h-28">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-800 overflow-hidden text-ellipsis">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.releaseDate}</p>
            </div>

            <div className='container_rating absolute top-52 left-0'>
                 <RatingCircle rating={item.ratingPercent} /> 
            </div>
        </div>
    );
};

export default CartForPopular;
