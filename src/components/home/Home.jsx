import React from 'react';
import './Home.css';
//import Me from '../../assets/avatar-1.svg';
import Me from '../../assets/IMG_7525.HEIC';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='200' />
                <h1 className="home__name">Mariia Eremina</h1>
                <span className="home__education">I'm a Computer Vision, AI and Software Engineer</span>

                <HeaderSocials />

                <a href="mailto:mariia.erem@gmail.com" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home