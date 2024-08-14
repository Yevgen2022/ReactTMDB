import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../service/tmdbSevice';
import GenrePartMovie from '../../components/GenrePartMovie/GenrePartMovie';

const CategoryPage = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

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



    console.log(movies)

    return (
        <div>
            <h1>Movies in Genre {genreId}</h1>
            <ul>
                {movies.map((movie) => {
                    const genreMovieObj = tmdbApi.createGenreObject(movie); 
                    return (
                        <li key={movie.id}>
                            {/* <a href={`/movie/${movie.id}`}> */}
                            <GenrePartMovie {...genreMovieObj} /> 
                            {/* </a> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CategoryPage;
