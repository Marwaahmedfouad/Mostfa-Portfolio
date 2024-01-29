import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'
import './navbar.css'

const Nav = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (<>
    {/* <nav className='nav'> */}
    <div className={`${showMenu ? 'nav__menu show-menu':'nav__menu'}`}>
        <ul style={{display:'flex',gap:'30px'}}>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className='nav__item' key={index}>
                <NavLink to={path} 
                className={({isActive})=>
                isActive ? 'nav__link1 active-nav' :'nav__link1'}
                /*for when user press on path also close sidenav */
                onClick={()=>{setShowMenu(!showMenu)}}
                >
                  {/* {icon} */}
                  <h3 className=''>{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className={`${showMenu ? 'nav__toggle animate-toggle':'nav__toggle'}`} onClick={()=>{setShowMenu(!showMenu)}}> */}
            <div className={showMenu} onClick={()=>{setShowMenu(!showMenu)}}>
        <span></span>
        <span></span>
        <span></span>
      </div> 
      {/* </div>  */}

    {/* </nav> */}
  </>
  )
}

export default Nav
