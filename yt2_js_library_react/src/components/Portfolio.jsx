import React from 'react';
import './scss/Portfolio.scss';
import abstract from '../assets/images/projects/abstract.svg'
import centerImage from '../assets/images/projects/centerImage.svg'
import car from '../assets/images/projects/car.svg'

const Portfolio = () => {
	return (
		<>
			<div className='section4'>
				<div className='portfolio'>
					<div className='portfolioDiv'>
						<h2>PORTFOLIO</h2>
					</div>
					<div className='portfolioFilter'>
						<span>ALL</span>
						<span className='pSpan'>CODED</span>
						<span className='pSpan'>DESIGNED</span>
					</div>
				</div>

				<div className='projects'>
					<div className='pr-row1'>
						<img
							className='projImg'
							src={abstract}
							alt='Abstract purple image'
						/>
						<div className='projectWriteup'>
							<span className='pwLine1'>coded, designed</span>
							<span className='pwLine2'>eatsome.</span>
							<span className='pwLine3'>
								Restaurant browsing in React.js (Using Yelp API)
							</span>
							<div className='pwLine4'>
								<span className='s1'>DEMO</span>
								<span className='s2'>MORE</span>
							</div>
						</div>
						<img
							className='projImg'
							src={centerImage}
							alt='Center image'
						/>
						<img
							className='projImg'
							src={car}
							alt='car'
						/>
					</div>
					<div className='pr-row2'>
						
					
						<img
							className='projImg'
							src={centerImage}
							alt='Center image'
						/>
							<img
							className='projImg'
							src={car}
							alt='car'
						/>
						<img
							className='projImg'
							src={abstract}
							alt='Abstract purple image'
						/>
					</div>
					<p className='projectsP'>And many more to come!</p>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
