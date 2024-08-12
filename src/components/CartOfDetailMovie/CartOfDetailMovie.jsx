import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../service/tmdbSevice";

const CartOfDetailMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await tmdbApi.fetchMovieById(movieID);
                setOneMovie(data);
            } catch (error) {
                setError(error.message);
            }
        };
        loadMovie();
    }, [movieID]);

    console.log(oneMovie);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneMovie) {
        return <div>Loading...</div>;
    }


    return (
        <div className="relative">
            <div
                className="movi_bg bg-cover bg-center inset-0 h-96"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${oneMovie.backdrop_path})` }}
            >

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="text-white p-4 relative z-10">
                    <h1 className="text-3xl font-bold">{oneMovie.title}</h1>
                    <p>{oneMovie.overview}</p>
                </div>


            </div>
        </div>
    );
};

export default CartOfDetailMovie;
