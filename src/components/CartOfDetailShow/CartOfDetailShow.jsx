import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../service/tmdbSevice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setGenreName } from "../../Pages/GenrePage/GenreSlice";


const CartOfDetailShow = () => {
    const { showID } = useParams();
    const [oneShow, setOneShow] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const loadShow = async () => {
            try {
                const data = await tmdbApi.fetchShowById(showID);
                setOneShow(data);
            } catch (error) {
                setError(error.message);
            }
        };
        loadShow();
    }, [showID]);



    useEffect(() => {
        if (oneShow) {
            const tvShowObj = tmdbApi.createShowObj(oneShow);
        }
    }, [oneShow]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneShow) {
        return <div>Loading...</div>;
    }

    const releaseDate = oneShow.first_air_date;
    const year = releaseDate.split('-')[0];

    const newDate = releaseDate.split('-').reverse().join('/');

    const handleGoToGenre = (genreId, genreName) => {
        navigate(`/discover/${genreId}`);// go to GenrePage
         dispatch(setGenreName(genreName));
    }



    // flex flex-col md:flex-row items-center justify-between

    return (
        <div className="relative w-full h-auto md:h-[600px] lg:h-[700px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10">

           
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${oneShow.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            
            <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_multi_faces/${oneShow.poster_path}`}
                alt={`${oneShow.name} Poster`}
                className="w-full h-full object-contain overflow-hidden z-10"
            />

         
            <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 p-6 sm:p-8 text-white flex flex-col justify-center flex-shrink-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    <a href={`#${oneShow.id}`}>{oneShow.name}</a>
                    <span className="font-light"> ({oneShow.first_air_date})</span>
                </h2>

                <div className="mt-4">
                    <p>{oneShow.name}</p>
                    <p>Release Date: {newDate}</p>
                    <p>({oneShow.production_countries[0].iso_3166_1})</p>
                    {/* <p>{oneShow.runtime} min.</p> */}

                    <div className="mt-2">
                        <span className="span_genres">
                            {oneShow.genres.map((genre) => (
                                <a
                                    key={genre.id}
                                    href={`#${genre.name}`}
                                    className="link_genres hover:text-red-600 active:text-white mr-1"
                                    onClick={() => handleGoToGenre(genre.id, genre.name)}
                                >
                                    {genre.name}
                                </a>
                            ))}
                        </span>
                    </div>
                </div>








                <div className="movie_overview mt-6">
                    <h3 className="font-thin italic">Overview</h3>
                    <p className="lg:text-base sm:text-lg text-sm max-w-full">{oneShow.overview}</p>
                </div>
            </div>

        </div>
        // <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden md:py-10 md:px-20 py-5 px-10 flex items-center justify-center">

        //     <div
        //         className="absolute inset-0 bg-cover bg-center"
        //         style={{
        //             backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${oneShow.backdrop_path})`,
        //         }}
        //     >
        //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        //     </div>

        //     <div className="different_content border border-white w-full h-full z-10 p-10 flex md:flex-row flex-col items-center">

        //         <div className="wraper_img border  max-h-full  border-white p-4">
        //             <div className="img_poster w-[300px] h-[450px] ">
        //              <img src={`https://image.tmdb.org/t/p/w300_and_h450_multi_faces/${oneShow.poster_path}`}
        //               alt=""
        //               className="object-contain overflow-hidden" /> 

        //             </div>
        //         </div>

        //         <div className="wrapper_dif_info p-4 max-h-full border border-white">
        //             <p className="overview text-white">{oneShow.overview}</p>
        //         </div>

        //     </div>
        // </div>






    )
}

export default CartOfDetailShow;