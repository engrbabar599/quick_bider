import Svgs from 'assets/svgs'
import React from 'react'

export const Pagination = ({ activePage, totalPages, previousOnClick, nextOnClick, onClick }) => {
    return (
        <nav aria-label="Page navigation example ">
            <ul className=" -space-x-px text-base h-10 flex items-center justify-center gap-2">
                <li>
                    <button
                        disabled={activePage === 0}
                        onClick={previousOnClick}
                        className="flex items-center justify-center px-2.5 py-2 h-[30px] w-[30px] ms-0 leading-tight text-gray-500 bg-white border  border-[#D9D9D9] rounded hover:bg-gray-100 hover:text-gray-700">
                        <Svgs.LeftIcon />
                    </button>
                </li>

                {Array(totalPages)?.fill()?.map((_, index) => (
                    <li
                        key={index}
                        className=''>
                        <button
                            onClick={() => onClick(index)}
                            href="#"
                            className={`${activePage === index ? "bg-custom-blue hover:bg-blue-500 text-white" : " bg-white text-black hover:bg-gray-100"}  h-5 w-5 text-sm rounded font-poppins font-medium`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        disabled={activePage === (totalPages - 1)}
                        onClick={() => nextOnClick()}
                        className="flex items-center justify-center px-2.5 py-2 h-[30px] w-[30px] ms-0 leading-tight text-gray-500 bg-white border  border-[#D9D9D9] rounded hover:bg-gray-100 hover:text-gray-700">
                        <Svgs.RightIcon />
                    </button>
                </li>
            </ul>
        </nav>)
}
