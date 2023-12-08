import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex grid grid-flow-col bg-gray-900'>
        <Sidebar/>
        <Outlet/>
        {/* <MainContainer/> */}
    </div>
  )
}

export default Body