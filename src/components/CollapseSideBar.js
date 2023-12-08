import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CollapseSideBar = () => {
    const theme = useSelector((store) => store.theme.isDarkTheme);
    const containerClasses = `  bg-${theme ? 'gray-900' : 'slate-50'} text-${theme ? 'white' : 'black'}`;
    const listItemClasses = `flex flex-col items-center space-x-4 cursor-pointer  ${theme ? "hover:bg-gray-800" : "hover:bg-gray-300"} p-2 rounded h-16`;
    return (
        <aside className={` fixed top-16  z-50 w-28 p-1 h-screen  top-18 left-0 overflow-y-auto ${containerClasses}`}>
            <ul className='space-y-2'>
                <li className={listItemClasses}>
                    <div className='flex items-center flex-col m-2'>
                        <HomeIcon className=''/>
                        <Link to="/"><span className='text-sm text-center'>Home</span></Link>
                    </div>
                </li>
                <li className={listItemClasses}>
                    <div className='flex items-center flex-col m-2'> 
                        <FlashOnIcon className=''/>
                        <span className='text-sm text-center'>Shorts</span>
                    </div>
                </li>
                <li className={listItemClasses}>
                    <div className='flex items-center flex-col m-2'>
                        <SubscriptionsIcon />
                        <span className='text-sm text-center'>Subscriptions</span>
                    </div>
                </li>
                <li className={listItemClasses}>
                    <div className='flex items-center flex-col m-2'>
                        <PlayCircleOutlineIcon className="text-4xl w-12 h-12"/>
                        <span className='text-sm text-center'>You</span>

                    </div>
                </li>
            </ul>
        </aside>
    )
}

export default CollapseSideBar