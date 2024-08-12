import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const OnPageOfMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = '67d62e560168631aec9f199164512b42';

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`, {
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOneMovie(data);
            } catch (error) {
                setError(error.message);
                console.error('Failed to fetch movie:', error);
            }
        };

        fetchMovie();
    }, [movieID]);

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                    src={`https://image.tmdb.org/t/p/w500_face/${oneMovie.poster_path}`}   //w300${posterPath}
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
