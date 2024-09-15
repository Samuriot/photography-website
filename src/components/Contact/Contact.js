import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
		<h1>Contact me on my socials or via the form below!</h1>
		<h3>instagram: @pics.by.jomi</h3>
		<div className="parent-form">
			<form id = "contact-form">
				<input type="text" 
					name = "name" 
					className="form-control formInput" 
					placeholder="Name:" >
				</input>
				<input type="email" 
					name = "email" 
					className="form-control formInput" 
					placeholder="Email:" >
				</input>
				<input type="text" 
					name = "social-media" 
					className="form-control formInput" 
					placeholder="Instagram username: " >
				</input>
				<input type="text" 
					name = "body" 
					className="form-body" 
					placeholder="Message: " >
				</input>
			</form>
		</div>
    </div>
  )
}

export default Contact