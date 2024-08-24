import React from 'react';
import '../components/scss/About.scss';
import designIcon from '../assets/images/aboutMe/designIcon.svg';
import separator from '../assets/images/aboutMe/separatorBlack1.svg';
import developmentIcon from '../assets/images/aboutMe/developmentIcon.svg';
import maintenanceIcon from '../assets/images/aboutMe/maintenanceIcon.svg';

export const About = () => {
	return (
		<>
		<div className='section3'>
			<div className="aboutMe">
				<div className="aboutMeDiv">
					<h2>ABOUT ME</h2>
					<p>
						Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br/> sed viverra. In vel urna quis libero viverra facilisis ut ac est.
					</p>
				</div>
				<div className="invisibleButton2">
					<span className="exploreButton">EXPLORE</span>
				</div>
				<div className="separatorBlack1">
					<img src={separator} alt="separator black 1"/>
				</div>
			</div>
			<div className='services'>
				<div className='line1'>
					<div className='design'>
						<img src={designIcon} alt='design icon' />
						<h6>DESIGN</h6>
						<p>
							I can design the site based on your needs and suggestions. I can
							also design the site from scratch and consult you during the job.
						</p>
					</div>
					<div className='development'>
						<img
							src={developmentIcon}
							alt='development icon'
						/>
						<h6>DEVELOPMENT</h6>
						<p>
							I can design the site based on your needs and suggestions. I can
							also design the site from scratch and consult you during the job.
						</p>
					</div>
				</div>
				<div className='line2'>
					<div className='maintenance'>
						<img
							src={maintenanceIcon}
							alt='maintenance icon'
						/>
						<h6>MAINTENANCE</h6>
						<p>
							I can design the site based on your needs and suggestions. I can
							also design the site from scratch and consult you during the job.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default About