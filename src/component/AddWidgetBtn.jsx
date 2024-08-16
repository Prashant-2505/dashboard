import React from 'react';

const AddWidgetBtn = ({ setSidebarShow }) => {
    return (
        <button
            onClick={() => setSidebarShow(true)}
            className='border border-gray-300 bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100 transition-colors'>
            Add Widget
            <span className='text-lg'>+</span>
        </button>
    );
};

export default AddWidgetBtn;
