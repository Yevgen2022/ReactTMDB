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
                    {/* <h2 className="movie_title">{oneMovie.title}</h2>
                    <p className="movie_overview">{oneMovie.overview}</p>
                    <p className="movie_buget">{oneMovie.budget}</p>
                    <p className="movie_release">{oneMovie.release_date}</p>
                    <p className="movi_runtime">{oneMovie.runtime}</p>
                    <p className="movi_score">{oneMovie.vote_average}</p>
                    <p className="movi_count">{oneMovie.vote_count}</p> */}


                    {/* <div className="movi_bg">
                      <img
                      loading="lazy"
                       src={`https://image.tmdb.org/t/p/w500/${oneMovie.backdrop_path}`} alt="" />
                    </div> */}


                    {/* <div className="w-80 h-96">
                        <img
                            loading="lazy"
                            src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}   //w300${posterPath}
                            alt={""}
                            className="w-full h-auto inline-block"
                        />
                    </div> */}


                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default OnPageOfMovie;
