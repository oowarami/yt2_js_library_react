import React from 'react';
import '../components/scss/Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Hi, I am Tomasz Gajda</h1>
                <p>Front-end Developer / UI Designer</p>
            </div>
            <div className="hero-image">
                <img src="path_to_image" alt="Tomasz Gajda" />
								<span>this is not my photo, but I dearly hope to get one just like this </span>
            </div>
        </section>
    );
}

export default Hero;