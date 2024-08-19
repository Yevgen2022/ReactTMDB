import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../service/tmdbSevice";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';


const CartOfDetailShow = () => {
    const { showID } = useParams();
    const [oneShow, setOneShow] = useState(null);
    const [error, setError] = useState(null);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

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
            console.log("tvShowObj", tvShowObj);
        }
    }, [oneShow]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!oneShow) {
        return <div>Loading...</div>;
    }




    // flex flex-col md:flex-row items-center justify-between

    return (
        <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden md:py-10 md:px-20 py-5 px-10 flex items-center justify-center">

            {/* Poster and background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${oneShow.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>



            <div className="different_content border border-white w-full h-full z-10 p-10 flex md:flex-row flex-col items-center">

                <div className="wraper_img border  max-h-full  border-white p-4">
                    <div className="img_poster w-[300px] h-[450px] "
                    // style={{
                    //     backgroundImage: `url(https://image.tmdb.org/t/p/origin/${oneShow.poster_path})`,
                    // }}
                     >
                     <img src={`https://image.tmdb.org/t/p/w300_and_h450_multi_faces/${oneShow.poster_path}`} alt="" className="object-fill" /> 

                    </div>
                </div>



                <div className="wrapper_dif_info p-4 max-h-full border border-white">
                    <p className="overview text-white">{oneShow.overview}</p>
                </div>

            </div>


            {/* <div className="poster_wrapper min-w-80 w-80 h-[450px] absolute top-auto left-40">
                <div className="background_poster ">
                    <img
                        src={`https://image.tmdb.org/t/p/w300_and_h450_multi_faces${oneShow.poster_path}`}
                        alt={`${oneShow.name} Poster`}
                        className="w-full h-full object-contain overflow-hidden z-10"
                    />
                </div>
            </div> */}





        </div>






    )
}

export default CartOfDetailShow;