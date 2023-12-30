import React from 'react'
import logo from './images/logo.svg'
// import DiamondIcon from '@mui/icons-material/Diamond';
// import BookIcon from '@mui/icons-material/Book';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { FaBook,FaRegBell } from "react-icons/fa6";

import { FaSearch,FaRegGem } from "react-icons/fa";

import photo from './images/photo.jpg';
const Header = () => {
  return (
    <div className='header'>
          <div className='left'>
              <img src={logo} alt='logo' />
              <h1>KeazoN<span id='span-text'>BOOKS</span></h1>
          </div>
          <div className='center'>
             <FaSearch id='mag-glass' />
              <input type='text' placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' />
              <button id='search-btn'>Search</button>
          </div>
          <div className='right'>
              <FaBook />
              <FaRegBell />
              <FaRegGem />
              <img src={photo} alt='photo' width='30px'/>
          </div>
    </div>
  )
}

export default Header