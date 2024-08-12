import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { API_KEY, IMAGE_BASE_URL } from "../../config"; 


const CartOfOneMovie = ({ movieID,title, posterPath, releaseDate }) => {
    const navigate = useNavigate();

    const getMovieByID = () => {
        navigate(`/movie/${movieID}?api_key=${API_KEY}`)
    }
    

    return (
        <div onClick={getMovieByID}
            className="flex flex-col items-center hover:scale-105 active:scale-100 transition-transform duration-300">

            <div className="h-96 max-w-xs overflow-hidden border rounded-xl flex flex-col items-center">
                <img
                    loading="lazy"
                    src={`${IMAGE_BASE_URL}/w220_and_h330_face/${posterPath}`}   //w300${posterPath}
                    alt={title}
                    className="w-full h-full inline-block"
                />

            </div>
            <div className="">
                <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
                <p className="">{releaseDate}</p>
            </div>


        </div >
    )
}

export default CartOfOneMovie;
{/* <img loading="lazy" class="poster w-full"
 src="https://media.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
  srcset="https://media.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg 1x,
   https://media.themoviedb.org/t/p/w440_and_h660_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg 2x"
    alt="Breaking Bad"></img> */}

{/* <div class="image">
<div class="wrapper glyphicons_v2 picture grey no_image_holder">flex
    <a class="image" href="/tv/1396-breaking-bad" title="Breaking Bad">
    <img loading="lazy" class="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
     srcset="https://media.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg 1x,
      https://media.themoviedb.org/t/p/w440_and_h660_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg 2x" alt="Breaking Bad">
      </a>
    </div>
    </div> */}

{/* <div class="percent">flex
<span class="icon icon-r89">
::before
</span>
</div>
<canvas height="34" width="34">

</div> */}