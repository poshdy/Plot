import React from 'react'
import { Link } from 'react-router-dom'
import {FiTwitter} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-[#252525] '>
      <div className='container flex items-center px-2 justify-between'>
    <Link to={'/'}>

     <h1 className='sm:text-3xl text-xl font-bold' >Plot</h1>
     </Link>
      <div className='flex gap-1 flex-col sm:flex-row items-center sm:gap-2 px-1 py-2 sm:py-4 font-medium text-xs sm:text-base'>
        <Link to={'/'}>Home</Link>
        <Link to={'/discover'}>Discover</Link>
        <Link to={'/trending'}>Trending</Link>
        
      </div>
      <div className='flex items-center gap-1'>
        <FiGithub  className='w-6 sm:w-8' />
        <FiInstagram className='w-6 sm:w-8' />
        <FiTwitter className='w-6 sm:w-8'/>
      </div>
      </div>
    </div>
  )
}

export default Footer