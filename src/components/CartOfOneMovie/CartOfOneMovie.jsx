import React, { useEffect, useState } from "react";

import tmdbApi from "../../service/tmdbSevice";



const CartOfOneMovie = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const fetchMovies = async () => {
            const data = await tmdbApi.fetchPopularMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    console.log(movies);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">{movie.title}</h3>
                    <div className="h-96 max-w-xs overflow-hidden border rounded-xl">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>


    )
}

export default CartOfOneMovie;