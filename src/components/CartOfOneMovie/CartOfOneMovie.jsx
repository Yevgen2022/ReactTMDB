
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY, IMAGE_BASE_URL } from "../../config";

const CartOfOneMovie = ({ movieID, title, posterPath, releaseDate }) => {
    const navigate = useNavigate();

    const getMovieByID = () => {
        navigate(`/movie/${movieID}?api_key=${API_KEY}`);
    }

    return (
        <div onClick={getMovieByID} className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg w-52 m-2 cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-300">
            <div className="h-80 w-full overflow-hidden rounded-lg mb-4">
                <img
                    loading="lazy"
                    src={`${IMAGE_BASE_URL}/w220_and_h330_face/${posterPath}`}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
                <p className="text-gray-700">{releaseDate}</p>
            </div>
        </div>
    )
}

export default CartOfOneMovie;

