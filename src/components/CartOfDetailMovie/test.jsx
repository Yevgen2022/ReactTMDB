import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../service/tmdbSevice";
import { useNavigate } from "react-router-dom";

const CartOfDetailMovie = () => {
    const { movieID } = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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


    // let genres = oneMovie.genres.map(el => el.name);
    // console.log(genres)


    const handleGoToGenre = (genreId) => {
        navigate(`/discover/${genreId}`);
        console.log('After navigate:');
    }



    return (
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex flex-row items-center justify-between p-10">

            {/* poster and background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>


            <div className="z-10 w-full lg:w-2/4 s h-full flex-shrink-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${oneMovie.poster_path})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}
                >
                </div>
                {/* <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${oneMovie.poster_path})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}
                >
                </div>      */}
            </div>


            {/* diferent information */}

            <div className="relative z-10 w-full lg:w-2/3 p-8 text-white flex flex-col justify-center flex-shrink-0">
                <h2 className="text-3xl sm:text-4xl font-semibold">
                    <a href="">{oneMovie.title}</a>
                    <span className="font-light"> ({year})</span>
                </h2>
                <div>
                    <p>{newDate}</p>
                    {/* <p>{oneMovie.production_countries[0].name}</p> */}
                    <p>({oneMovie.production_countries[0].iso_3166_1})</p>
                    <p>{oneMovie.runtime} min.</p>

                    <span className="span_genres">
                        {oneMovie.genres.map((genre) => (
                            <a
                                key={genre.id}
                                href={`#${genre.name}`}
                                className="link_genres hover:text-red-600 active:text-white"
                                onClick={() => handleGoToGenre(genre.id)}
                            >
                                {genre.name}, 
                            </a>
                        ))}
                    </span>

                </div>


                <div className="movie_overview mt-4">
                    <h3 className="font-thin italic">Overview</h3>
                    <p className=" lg:text-base sm:text-xl max-w-2xl">{oneMovie.overview}</p>
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