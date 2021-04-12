import React from 'react'

import Hamburger from './Hamburger'
import Logo from './Logo'
import Searchbox from './Searchbox'
import Tiles from './Tiles'
import './topnavbar.css'


function Navbar()
{
    return(
        <div className="navbar">
            <Hamburger />
            <Logo />
            <Searchbox />
            <Tiles />
        </div>
    )
}

export default Navbar