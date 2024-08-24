import React from 'react'
import './scss/Contact.scss'

const Contact = () => {
	return (
		<>
			<div className="contact">
		<div className="contactDiv">
			<h2>CONTACT</h2>
		</div>
		<p>
		Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br/> sed viverra. In vel urna quis libero viverra facilisis ut ac est.
		</p>
		<img className="separatorBlack3" src="./images/aboutMe/separatorBlack1.svg" alt="separator"/>
			<form className="contactForm">
				<input type="text" id="name" name="name" placeholder="ENTER YOUR NAME*"/><br/>
				<input type="text" id="email" name="email" placeholder="ENTER YOUR EMAIL*"/><br/>
				<input type="text" id="phone" name="phone" placeholder="PHONE NUMBER"/><br/>
				<input className="contactMessage" type="text" id="message" name="phone" placeholder="YOUR MESSAGE*" maxlength="200"/><br/>
				<input type="submit" value="Submit"/>
			</form> 
		</div>
		</>
	)
}

export default Contact