import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar'>
            
                <Link className='link' to='/'>Take me home</Link>
            
        </div >
    )
};

export default NavBar;