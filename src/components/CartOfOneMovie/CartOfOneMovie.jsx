import React from "react";


const CartOfOneMovie = ({ title, posterPath }) => {

    return (
        <div className="flex flex-col items-center hover:scale-105 active:scale-100 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
            <div className="h-96 max-w-xs overflow-hidden border rounded-xl">
                <img
                    src={`https://image.tmdb.org/t/p/w300${posterPath}`}
                    alt={title}
                    className="w-full h-full object-cover "
                />
            </div>
        </div>
    )
}

export default CartOfOneMovie;