import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_base.scss';
import backgroundVideo from '../assests/background-video.mp4'



const Home = (props) => {
    return (

        <div className='home'>
            <section className="home__bg-video">
                <video className="home__bg-video home__bg-video--content" autoPlay muted loop>
                    <source src={backgroundVideo} type="video/mp4"></source>
         

                </video>
            </section>
            <h1 className='home__header'>NASA Photo Search and Query</h1>
            <button className='home__link home__link--1'><Link to='/nasaphoto'>Photo of the day</Link></button>
            <button className='home__link home__link--2' ><Link to='/nasaphotos'>10 random P.O.T.D.</Link></button>
            <button className='home__link home__link--3'>  <Link to='/searchform'>Search date Range</Link></button>

        </div>

    )
}

export default Home;