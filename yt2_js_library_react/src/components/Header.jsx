import React from 'react'
import '../components/scss/Header.scss';
const Header = () => {
	return (
		<>
		<header className="header">
            <div className="logo">TG</div>
						<div className='header-titles'>
							<nav>
									<ul>
											<li><a href="#about">About Me</a></li>
											<li><a href="#skills">Skills</a></li>
											<li><a href="#portfolio">Portfolio</a></li>
									</ul>
							</nav>
							<button className="contact-btn">Contact</button>
						</div>
        </header>
		</>
	)
}

export default Header