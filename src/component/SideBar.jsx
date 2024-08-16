import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import DashBoardCategory from '../assets/dashboardCategory.json';


const SideBar = ({ categoryWidgets, selectedCategory, onCategoryChange, onToggleWidget ,setSidebarShow}) => {
    return (
        <div className='fixed top-0 right-0 h-[100vh] w-[40vw] bg-white z-50'>
            <header className=' flex justify-between items-center bg-blue-950 px-2'>
                <h1 className=' text-white p-2'>Add Widget</h1>
                <p
                 onClick={()=>setSidebarShow(false)}
                className=' text-white cursor-pointer'>X</p>
            </header>
            <p className='py-2 bg-red-300 px-2'>Personalize your dashboard by adding the following widget</p>

            <div>
                <ul className='flex gap-4 px-2'>
                    {categoryWidgets.map((_, index) => (
                        <li
                            key={index}
                            onClick={() => onCategoryChange(index)}
                            className={`border-b-[2px] cursor-pointer ${index === selectedCategory ? 'border-blue-800' : ''}`}>
                            {DashBoardCategory[index].category}
                        </li>
                    ))}
                </ul>

                <div className='mt-4'>
                    {categoryWidgets[selectedCategory].map((widget, index) => (
                        <div
                            key={index}
                            onClick={() => onToggleWidget(selectedCategory, index)}
                            className={`p-2 bg-gray-100 rounded-md mb-2 cursor-pointer flex items-center`}
                        >
                            {widget.show ? <MdCheckBox className="mr-2 text-blue-600" /> : <MdCheckBoxOutlineBlank className="mr-2" />}
                            <h3 className='font-bold'>{widget.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
