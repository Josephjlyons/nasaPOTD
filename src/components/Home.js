import React from 'react';
import {Link} from 'react-router-dom';



const Home =()=> {
return(
    <div className='home'>
        <Link className='link' to='/nasaphoto'>Check Out The Photo Of The Day!</Link>
        <Link className='link' to='/nasaphotos'>See 10 Random Photos from past P.O.T.D.</Link>
        <Link className='link' to='/searchphotos'>Search by a specific date</Link>
    </div>

)
}

export default Home;