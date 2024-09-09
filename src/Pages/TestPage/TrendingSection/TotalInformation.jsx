import React from 'react';
import Select from 'react-select';

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPageSlice } from "./TrendingSlice2";


const TotalInformation = () => {
    const totalItems = useSelector((state) => state.TrendMovieAndTv2.totalItems);
    const totalPages = useSelector((state) => state.TrendMovieAndTv2.totalPages);
    const currentPage = useSelector((state) => state.TrendMovieAndTv2.currentPageSlice); // Отримуємо поточну сторінку з Redux
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newPage = parseInt(e.target.value) - 1; // Значення select - це 1-indexed, а currentPage - 0-indexed
        dispatch(setCurrentPageSlice(newPage)); // Оновлюємо глобальний стейт
    }

    // Створюємо масив з номерами сторінок
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    // console.log(totalPages);

    // для селекта
    const options = pageNumbers.map((item) => ({
        value: item,
        label: item
    }));

    return (
        <>
            <div className="flex flex-row w-96 px-6 justify-between">
                <div className="">
                    <p className="text-base italic text-gray-400">Total Results : {totalItems}</p>
                </div>
                <div className="flex flex-row" >
                    <label className="text-base italic text-gray-400" htmlFor="numberPage">Number page:</label>

                    <Select
                        value={options[currentPage]}
                        onChange={(selectedOption) => dispatch(setCurrentPageSlice(selectedOption.value - 1))}
                        options={options}
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: 'inherit',
                                // color: 'white',
                                width: '50px',
                                minHeight: '30px',
                                borderRadius: '5px',
                                fontSize: '12px',
                                fontStyle: 'italic',
                                padding: '0px',
                                display: 'flex', // Використовуємо Flexbox
                                justifyContent: 'center', // Горизонтальне вирівнювання по центру
                                alignItems: 'center', // Вертикальне вирівнювання по центру
                            }),
                            valueContainer: (base) => ({
                                ...base,
                                padding: '0 2px', // Мінімальні відступи для вміщення тексту
                            }),
                            dropdownIndicator: (base) => ({
                                ...base,
                                padding: '0', // Прибрати відступ у правого індикатора
                                // display: 'none', // Прибрати індикатор (опційно)
                            }),
                            // clearIndicator: (base) => ({
                            //     ...base,
                            //     padding: '0', // Прибрати відступ
                            //    // display: 'none', // Прибрати індикатор очищення (опційно)
                            // }),
                            option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused ? 'lightgray' : 'white',
                                color: 'black',
                            }),
                            menu: (base) => ({
                                ...base,

                            }),

                            menuList: (base) => ({
                                ...base,
                                fontStyle: 'italic',
                                fontSize: '14px'
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: 'blue', // Колір тексту обраного значення
                                fontWeight: 'bold', // Жирний шрифт
                                textAlign: 'center', // Вирівнювання тексту по центру
                            }),
                        }}
                    />

                    {/* <select className="w-10 mx-4 bg-indigo-100 text-base italic text-gray-400" id="numberPage" value={currentPage+1} onChange={handleChange}>
                        {pageNumbers.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select> */}

                </div>
            </div>
        </>
    )
}

export default TotalInformation;