import React from 'react';
import WidgetCard from '../component/WidgetCard';
import DashBoardCategory from '../assets/dashboardCategory.json';
import AddWidgetBtn from '../component/AddWidgetBtn'
import DropDownBtn from '../component/DropDownBtn';

import { FiRefreshCcw } from "react-icons/fi";
import { VscKebabVertical } from "react-icons/vsc";


const Dashboard = ({ categoryWidgets, selectedCategory ,setSidebarShow}) => {

    const btnStyle = `shadow-md rounded-md h-9 border-[1px] border-gray-200 px-2`

    return (
        <div className='w-full min-h-[100vh] h-[100%] bg-blue-100 p-[1.5rem]'>
            <header className='flex justify-between items-center h-[20%] bg-white py-[1rem]'>
                <h2 className='font-bold'>CNAPP Dashboard</h2>
                <div className='flex items-center justify-center gap-4'>
                <AddWidgetBtn setSidebarShow={setSidebarShow}/>
                        <button  className={btnStyle}><FiRefreshCcw />
                        </button>
                        <button className={btnStyle}><VscKebabVertical />
                        </button>
                        <DropDownBtn />
                </div>
            </header>

            <div className='h-full w-full'>
                {categoryWidgets.map((widgets, index) => (
                    <div key={index} className='w-full h-[12em] mb-[2rem]'>
                        <h2>{DashBoardCategory[index].category} Dashboard</h2>
                        <div className='flex flex-wrap w-full h-full gap-2 '>
                            {widgets.map((widget, idx) => (
                                widget.show && (
                                    <WidgetCard
                                   setSidebarShow={setSidebarShow}
                                    key={idx} widgets={widget} />
                                )
                            ))}
                            {/* Add the empty card at the end */}
                            <WidgetCard
                             setSidebarShow={setSidebarShow}
                            widgets={{ name: 'Add New Widget', type: 'empty' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;