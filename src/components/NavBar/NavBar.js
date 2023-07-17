import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/_navbar.scss'


const NavBar = () => {
    return (
        <div className='navbar'>
            
                <Link className='navbar__link' to='/'>Take me home</Link>
            
        </div >
    )
};

export default NavBar;