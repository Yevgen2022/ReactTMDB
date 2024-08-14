import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../service/tmdbSevice";
import { useNavigate } from "react-router-dom";
import { setGenreName, setGenreObj } from "../../Pages/GenrePage/GenreSlice";
import { useDispatch } from 'react-redux';

const CartOfDetailMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // const [genre, setGenre] = useState('');
    const dispatch = useDispatch();


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

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneMovie) {
        return <div>Loading...</div>;
    }


    const releaseDate = oneMovie.release_date;
    const year = releaseDate.split('-')[0];

    const newDate = releaseDate.split('-').reverse().join('/');

    const handleGoToGenre = (genreId,genreName) => {
        navigate(`/discover/${genreId}`);// go to GenrePage
        dispatch(setGenreName(genreName));
        // dispatch(setGenreObj(oneMovie));
        // setGenre(genreName);
    }



    return (
        <div className="relative w-full h-auto md:h-[600px] lg:h-[700px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10">

    {/* Poster and background */}
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path})`,
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    {/* Постер фільму, прихований на екранах менше 768px */}
    {/* <div className="z-10 md:w-2/4 h-auto md:h-full flex-shrink-0 mb-6 md:mb-0 hidden md:block border-2 border-white"> */}
        <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_multi_faces${oneMovie.poster_path}`}
            alt={`${oneMovie.title} Poster`}
            className="w-full h-full object-contain overflow-hidden z-10 border"
        />
    {/* </div> */}

    {/* Different information */}
    <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 p-6 sm:p-8 text-white flex flex-col justify-center flex-shrink-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            <a href="#">{oneMovie.title}</a>
            <span className="font-light"> ({year})</span>
        </h2>

        <div className="mt-4">
            <p>{newDate}</p>
            <p>({oneMovie.production_countries[0].iso_3166_1})</p>
            <p>{oneMovie.runtime} min.</p>

            <div className="mt-2">
                <span className="span_genres">
                    {oneMovie.genres.map((genre) => (
                        <a
                            key={genre.id}
                            href={`#${genre.name}`}
                            className="link_genres hover:text-red-600 active:text-white mr-1"
                            onClick={() => handleGoToGenre(genre.id,genre.name)}
                        >
                            {genre.name}
                        </a>
                    ))}
                </span>
            </div>
        </div>

        <div className="movie_overview mt-6">
            <h3 className="font-thin italic">Overview</h3>
            <p className="lg:text-base sm:text-lg text-sm max-w-full">{oneMovie.overview}</p>
        </div>
    </div>

</div>


    );
};

export default CartOfDetailMovie;


{/* <div class="poster_wrapper true">
    </div><div class="poster">
        <div class="image_content">
            <div class="blurred" style="background-image: url('https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)/oGythE98MYleE6mZlGs5oBGkux1.jpg');">
            <img class="poster w-full" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oGythE98MYleE6mZlGs5oBGkux1.jpg" 
            srcset="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oGythE98MYleE6mZlGs5oBGkux1.jpg 1x, https://media.themoviedb.org/t/p/w600_and_h900_bestv2/oGythE98MYleE6mZlGs5oBGkux1.jpg 2x" alt="Bad Boys: Ride or Die">
            </div></div> */}