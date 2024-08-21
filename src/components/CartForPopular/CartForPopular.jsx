import React from 'react';
import { API_KEY, IMAGE_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const CartForPopular = ({ average, id, poster, release, title }) => {
    const navigate = useNavigate();
    const curentPopValue = useSelector((state) => state.popularSlider.popularValue);

    const getMovieByID = () => {
        if (curentPopValue === "popMovie") {
            navigate(`/movie/${id}?api_key=${API_KEY}`);
        } else if (curentPopValue === "popTv") {
            navigate(`/tv/${id}?api_key=${API_KEY}`);
        }
    }

    return (
        <div onClick={getMovieByID} className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg w-52 m-2 cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-300">
            <div className="h-80 w-full overflow-hidden rounded-lg mb-4">
                <img
                    src={`${IMAGE_BASE_URL}/w200${poster}`}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mb-1">Release Date: {release}</p>
                <p className="text-sm text-gray-600">Average Rating: {average}</p>
            </div>
        </div>
    );
};

export default CartForPopular;
