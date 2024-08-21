import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import tmdbApi from '../../service/tmdbSevice';
import GenrePartMovie from '../../components/GenrePartMovie/GenrePartMovie';
import SecondHederForGenre from '../../components/SecondHederForGenre/SecondHederForGenre';

const GenrePage = () => {
    const { genreId } = useParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const [moviesResponse, showsResponse] = await Promise.all([
                    tmdbApi.fetchMoviesByGenre(genreId),
                    tmdbApi.fetchShowByGenre(genreId)
                ]);

                const movies = moviesResponse.results || [];
                const shows = showsResponse.results || [];

                // Conect two results
                const combinedItems = [
                    ...movies.map(item => ({ ...item, type: 'movie' })),
                    ...shows.map(item => ({ ...item, type: 'tv' }))
                ];

                setItems(combinedItems);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchItems();
    }, [genreId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <SecondHederForGenre />
            <ul>
                {items.map((item) => {
                    const genreItemObj = item.type === 'movie'
                        ? tmdbApi.createGenreObject(item)
                        : tmdbApi.createShowObjectGenre(item);

                    return (
                        <li key={item.id}>
                            <GenrePartMovie {...genreItemObj} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GenrePage;
