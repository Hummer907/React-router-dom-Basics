import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
        <h2>Welcome Help</h2>
        <p>lorefogkff sdfmdsfkmgds difdskfdsfmifp fdposfmp</p>
        <Outlet/>
        <nav>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
       
    </div>
  )
}

export default HelpLayout