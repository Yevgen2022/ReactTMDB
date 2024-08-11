import React from "react";


const CartOfOneMovie = ({ title, posterPath, releaseDate }) => {

    return (
        <div className="flex flex-col items-center hover:scale-105 active:scale-100 transition-transform duration-300 bg-white">

            <div className="h-96 max-w-xs overflow-hidden border rounded-xl flex flex-col items-center">
                <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${posterPath}`}   //w300${posterPath}
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