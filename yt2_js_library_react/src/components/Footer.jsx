import React from 'react'
import './scss/Footer.scss'

const Footer = () => {
	return (
		<>
			<footer>
			<img src="./images/footer/backToTop.svg" alt="scroll to top button"/>
			<p>BACK TO TOP</p>
			<div class="socials">
				<img src="./images/footer/facebook.svg" alt="facebook"/>
				<img src="./images/footer/linkedin.svg" alt="linkedin"/>
				<img src="./images/footer/instagram.svg" alt="instagram"/>
				<img src="./images/footer/email.svg" alt="email"/>
			</div>
			<p>@2020 Tomasz Gajda All Rights Reserved.</p>
		</footer>
		</>
	)
}

export default Footer