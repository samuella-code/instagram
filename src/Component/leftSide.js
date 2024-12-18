import './leftSide.css';
import React from 'react';
import Logo from '../assets/Logo.png';
import Home from '../assets/Home-fill.jpg'
import Search from '../assets/Search.png'
import Explore from '../assets/Menu-Button-Item.png'
 import Messages from'../assets/Messenger.png'
 import Notifications from '../assets/ActivityFeed.png'
 import Create from '../assets/NewPosts.png'
 import Profile from '../assets/Profile-Pic-S.png'
 import Reel from '../assets/Video.png'
const LeftSide = ()=> {
  return(
   <div className="leftSidePart">
    <div className="logoPart">
      <img className="logoImg" src={Logo} alt='instagram'/>
    </div>
    <div className="navLinkPart">
      <div className='navLink'>
        <img src={Home} alt='instagram'/>
        <div className='navName'>Home</div>
      </div>
      <div className='navLink'>
        <img src={Search} alt='instagram'/>
        <div className='navName'>Search</div>
      </div>
      <div className='navLink'>
        <img src={Explore} alt='instagram'/>
        <div className='navName'>Explore</div>
      </div>
      <div className='navLink'>
        <img src={Reel} alt='instagram'/>
        <div className='navName'>Reel</div>
      </div>
      <div className='navLink'>
        <img src={Messages} alt='instagram'/>
        <div className='navName'>Messages</div>
      </div>
      <div className='navLink'>
        <img src={Notifications} alt='instagram'/>
        <div className='navName'>Notifications</div>
      </div>
      <div className='navLink'>
        <img src={Create} alt='instagram'/>
        <div className='navName'>Create</div>
      </div>
      <div className='navLink'>
        <img src={Profile} alt='profile-image'/>
        <div className='navName'>Profile</div>
      </div>
    </div>
   </div>
  )
}
export default LeftSide