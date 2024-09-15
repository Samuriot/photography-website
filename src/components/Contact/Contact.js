import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
		<div className="parent-wrapper">
			<div className="left">
				<h1>Contact me on my socials or via the form!</h1>
				<h3>instagram: @pics.by.jomi</h3>
			</div>
			<div className="right">
				<input type="text" class="field" placeholder = "Your Name"/>
				<input type="email" class="field" placeholder = "Your Email"/>
				<input type="text" class="field" placeholder = "Your Instagram Handle"/>
				<textarea class="field" placeholder="Your Message"></textarea>
			</div>
		</div>
    </div>
  )
}

export default Contact