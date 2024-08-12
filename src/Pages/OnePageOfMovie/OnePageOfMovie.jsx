import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_BASE_URL } from "../../config";
import { fetchMovieById } from "../../service/tmdbSevice";


const OnPageOfMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await fetchMovieById(movieID);
                setOneMovie(data);
            } catch (error) {
                setError(error.message)
            }
        };
        loadMovie()
    }, [movieID]);

    console.log(oneMovie)

    return (
        <div>
            <h1>MOVIE ONE</h1>
            {oneMovie ? (
                <div>
                    <h2>{oneMovie.title}</h2>
                    <p>{oneMovie.overview}</p>
                    <div>
                        <img
                            loading="lazy"
                            src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}   //w300${posterPath}
                            alt={""}
                            className="w-full h-auto inline-block"
                        />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default OnPageOfMovie;
