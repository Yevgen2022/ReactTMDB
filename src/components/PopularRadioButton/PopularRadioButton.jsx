import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from "../../config";
import tmdbApi from "../../service/tmdbSevice";
import { useDispatch } from 'react-redux';
import { setPopularItems } from "../../components/PopularSlider/PopularSliderSlice";

const PopularRadioButton = () => {
    const [selectedValue, setSelectedValue] = useState("popTv");
    const [selectedPath, setSelectedPath] = useState(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadObject = async () => {
            try {
                const data = await tmdbApi.fetchMovieOrTvByPopular(selectedPath);
                if (data) {
                    dispatch(setPopularItems(ShowCurentObj(data.results)));
                }
            } catch (error) {
                console.log('Error loading data:', error);
            }
        };
        loadObject();
    }, [selectedPath]);

    function ShowCurentObj(data) {
        if (selectedValue === "popTv") {
            return createTvObj(data);
        } else if (selectedValue === "popMovie") {
            return createMovieObj(data);
        }
    }

    function createTvObj(data) {
        return data.map(element => ({
            id: element.id,
            title: element.name,
            release: element.first_air_date,
            average: element.vote_average,
            poster: element.poster_path
        }));
    }

    function createMovieObj(data) {
        return data.map(element => ({
            id: element.id,
            title: element.title,
            release: element.release_date,
            average: element.vote_average,
            poster: element.poster_path
        }));
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setSelectedPath(event.target.dataset.path);
    };

    return (
        <form className="flex items-center space-x-4 ml-10" onChange={handleChange}>
            <div className="flex items-center">
                <input
                    type="radio"
                    id="popular_tv"
                    name="popularSection"
                    value="popTv"
                    defaultChecked={selectedValue === "popTv"}
                    data-path={`${BASE_URL}/tv/popular?api_key=${API_KEY}`}
                    className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="popular_tv" className="ml-2 text-gray-700 font-medium">Popular TV</label>
            </div>

            <div className="flex items-center">
                <input
                    type="radio"
                    id="popular_movie"
                    name="popularSection"
                    value="popMovie"
                    defaultChecked={selectedValue === "popMovie"}
                    data-path={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}
                    className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="popular_movie" className="ml-2 text-gray-700 font-medium">Popular Movie</label>
            </div>
        </form>
    );
};

export default PopularRadioButton;
