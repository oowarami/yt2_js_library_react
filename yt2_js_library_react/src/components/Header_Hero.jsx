import React from 'react';
import '../components/scss/Header_Hero.scss';
import logo from '../assets/images/navbar/logo.svg';
import menuIcon from '../assets/images/navbar/hamburgerMenu.svg'
import icon1 from '../assets/images/hero/icon1.svg';
import icon2 from '../assets/images/hero/icon2.svg';
import icon3 from '../assets/images/hero/icon3.svg';
import heroImage from '../assets/images/hero/userImage.svg';
const Header_Hero = () => {
	return (
		<>
			<div className='section1'>
				<header className='header'>
					<img className='logo' src={logo}/>
					<nav>
						<ul>
							<li className="links">
									<a href="#">About me</a>
									<a href="#">Skills</a>
									<a href="#">Portfolio</a>
									<a href="#" className="contact-btn">CONTACT ME</a>
							</li>
							<li className="menu dropdown">
								<img className="menu-icon" src={menuIcon}/>
									<div className="dropdown-content">
										<a href="#">About me</a>
										<a href="#">Skills</a>
										<a href="#">Portfolio</a>
										<a href="#">CONTACT ME</a>
									</div>
							</li>
						</ul>
					</nav>
				</header>

				<div className='hero'>
					<div className='hero-text'>
						<h4>Hi, I am</h4>
						<h2>Tomasz Gajda</h2>
						<p>Front-end Developer / UI Designer</p>
						<div class="social-icons">
							<img class="icon one" src={icon1} alt="icon 1"/>
							<img class="icon" src={icon2} alt="icon 2"/>
							<img class="icon" src={icon3} alt="icon 3"/>
						</div>
					</div>

					<div className='hero-image'>
						<img src={heroImage} alt='Tomasz Gajda' />
						<span>
							this is not my photo, <br/> but I dearly hope to <br/> get one just like this
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header_Hero;
