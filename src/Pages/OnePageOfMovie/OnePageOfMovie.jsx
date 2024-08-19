import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_BASE_URL } from "../../config";
import tmdbApi from "../../service/tmdbSevice";
import CartOfDetailMovie from "../../components/CartOfDetailMovie/CartOfDetailMovie"


const OnPageOfMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await tmdbApi.fetchMovieById(movieID);
                setOneMovie(data);
            } catch (error) {
                setError(error.message)
            }
        };
        loadMovie()
    }, [movieID]);

    return (
        <div>
            {oneMovie ? (
                <div>
                    < CartOfDetailMovie />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default OnPageOfMovie;
