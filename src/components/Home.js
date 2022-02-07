import React from 'react';
import {Link} from 'react-router-dom';


const Home =()=> {
return(
    <div className='home'>
        <Link className='link' to='/nasaphoto'>Check Out The Photo Of The Day!</Link>
        <Link className='link' to='/nasaphotos'>Check out multiple Random Photos Of The Day!</Link>
    </div>

)
}

export default Home;