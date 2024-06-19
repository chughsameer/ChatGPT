import React, { useContext, useState } from 'react'
import './Sidebar.css'
import logo_icon from '../assets/chatgptlogo.png'
import newmsg_icon from '../assets/newmessage.png'
import line_icon from '../assets/line.png'
import left_icon from '../assets/left.png'
import right_icon from '../assets/right.png'
import sidebar_menu from '../assets/menu.png'
import { Context } from './Context/Context'

const Sidebar = () => {

    const {newChat} = useContext(Context);
    const [isOpen, setIsOpen] = useState(true);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [imageSrc,setImageSrc] = useState(line_icon)
        const handleMouseEnter = () => {
            if (isOpen) {
                setImageSrc(left_icon);
            }
            else{
                setImageSrc(right_icon);
            }
          };
          const handleMouseLeave = () => {
            setImageSrc(line_icon);
          };

  return (
    <>
    <div className={`container ${isOpen ? 'open' : 'closed'}`}>
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className={`top ${isOpen ? 'open' : 'closed'}`} onClick={()=>newChat()}>
            <div  className='new-message'><img src={logo_icon} className='sidebar-img1' />
            <p>New Chat</p></div>
            <img src={newmsg_icon} className='sidebar-img2'/>
        </div>
        <div className={`bottom ${isOpen ? 'open' : 'closed'}`}>
            <p className='sidebar_p1'>Sign up or log in</p>
            <p className='sidebar_p2'>Get smarter responses, upload files<br/>and images, and more.</p>
            <button className='signup-btn'>Sign up</button>
            <button className='login-btn'>Log in</button>
        </div>
    </div>
    <div onClick={toggleNavbar} className={`transparent-shield ${isOpen ? 'open' : 'closed'}`} id="shield"></div>
    <div className={`sidebar-close-open ${isOpen ? 'open' : 'closed'}`}>
        <img src={imageSrc} className='side-bar-toggle-btn' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleNavbar}/>
    </div>
    </div>
    <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
    <img className='new-chat-icon' onClick={()=>newChat()} src={newmsg_icon}/>
    <img src={sidebar_menu} className='side-bar-responsive-btn' onClick={toggleNavbar} />
    </div>
    </>
)
}

export default Sidebar
