import React from 'react'
import { BsGraphUp } from "react-icons/bs";

const WidgetCard = ({ widgets,setSidebarShow }) => {
    console.log(widgets)
    return (
        widgets?.type === "empty" ? (
            <div className='h-full w-[30%] min-w-[11rem] bg-white rounded-md shadow-md flex items-center justify-center'>
                <button 
                onClick={()=>setSidebarShow(true)}
                className=' font-semiBold  border-[1px] border-x-gray-300 px-2 py-1 rounded-md'>+ Add  Widget</button>
            </div>
        ) : (
            <div className='h-full w-[33%] min-w-[11rem] bg-white rounded-md shadow-md relative'>
               <p className=' absolute top-2 left-2 font-bold'> {widgets?.name}</p>
                <div className=' h-full w-full flex flex-col items-center justify-center'>
                    {widgets?.data.length == 0 ?
                        <>
                            <BsGraphUp />
                            <p className=' font-semibold'>No Graph data available</p>
                        </>
                        :
                        null
                    }
                </div>

            </div>
        )
    )
}

export default WidgetCard