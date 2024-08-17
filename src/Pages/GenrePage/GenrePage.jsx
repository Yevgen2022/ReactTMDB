import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../service/tmdbSevice';
import GenrePartMovie from '../../components/GenrePartMovie/GenrePartMovie';
import SecondHederForGenre from '../../components/SecondHederForGenre/SecondHederForGenre';
// import { useDispatch } from 'react-redux';
// import { setGenreObj } from "../../Pages/GenrePage/GenreSlice";

const GenrePage = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    // const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await tmdbApi.fetchMoviesByGenre(genreId);
                setMovies(data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMovies();
    }, [genreId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

// {...genreMovieObj}

    return (
        <div>
            <SecondHederForGenre />
            <ul>
                {movies.map((movie) => {

                     const genreMovieObj = tmdbApi.createGenreObject(movie);////////////////////////

                    return (
                        <li key={movie.id}>
                            {/* <a href={`/movie/${movie.id}`}> */}
                            <GenrePartMovie  {...genreMovieObj} />
                            {/* </a> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GenrePage;
