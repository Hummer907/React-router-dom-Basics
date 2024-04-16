import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (<>
  
        <header>
        <nav>
            <h1>Navigation</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>
            </div>
            
        </nav>
        </header> 
        <main>

            <Outlet/>
        </main>
    </>
  )
}

export default RootLayouts