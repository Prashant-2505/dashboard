import React, { useState } from 'react';
import { MdOutlineWatchLater, MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDownBtn = () => {
    const liStyle = `bg-blue-100 mb-2 rounded-sm px-3 py-2 cursor-pointer shadow-md hover:bg-blue-200`;
    const btnStyle = `shadow-md rounded-md h-9 border border-gray-200 px-3 flex items-center gap-2 bg-white`;

    const [show, setShow] = useState(false);

    return (
        <div className='relative'>
            <button
                onClick={() => setShow(prev => !prev)}
                className={`${btnStyle} flex items-center gap-2 border-blue-950`}>
                <MdOutlineWatchLater className='text-xl' />
                <span className='flex items-center gap-2'>
                    Last 2 days
                    <MdOutlineKeyboardArrowDown className={`transition-transform ${show ? 'rotate-180' : 'rotate-0'}`} />
                </span>
            </button>

            <ul className={`absolute top-full left-0 bg-white w-full py-2 rounded-sm shadow-md mt-1 ${show ? '' : 'hidden'} transition-all`}>
                <li className={liStyle}>3 days</li>
                <li className={liStyle}>4 days</li>
                <li className={liStyle}>5 days</li>
            </ul>
        </div>
    );
};

export default DropDownBtn;
