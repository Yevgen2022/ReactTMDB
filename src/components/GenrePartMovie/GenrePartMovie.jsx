import React from "react";

const GenrePartMovie = (genreMovieObj) => {

    return (
        <div className="mx-40">
            <section className="section_genre border border-gray m-3 shadow-md flex flex-row space-x-6 rounded-xl">

                <div className="genre_img  w-28 h-auto flex-shrink-0">
                    <img src={genreMovieObj.moviePoster} alt="" className="w-full h-full object-cover rounded-l-xl" loading="lazy"/>
                </div>

                <div className="dif_info flex flex-col py-4 justify-around">
                    <div>
                        <a className="text-2xl font-bold hover:text-blue-400" href="#">{genreMovieObj.movieTitle}</a>
                        <p className="text-gray-500 font-medium">{genreMovieObj.movieRelease}</p>
                    </div>
                    <p className="font-semibold text-gray-700">{genreMovieObj.movieOverview}</p>
                </div>

            </section>
        </div>
    )

}

export default GenrePartMovie