import React from 'react'
import './About.css'
import portrait from '../../assets/images/image0.jpg'

const About = () => {
  return (
    <div className="About">
        <div className="About-layout">
            <div className="About-text">
                <h1>Jomi Ruiz</h1>
                <p>Hi! I am a third year college student studying Computer Science and Data Science! 
                    Photography has always been a passion of mine since high school and I have had my far share of different cameras and equipment!
                </p>
                <p>Currently, I shoot on a Sony A6100 for my mirrorless go-to! At the same time, I'm learning 35mm film photography on my Minolta SR T202!
                    My lenses of choice has been the Rokkor-X 50mm f/1.4 prime lens for portraits and the Nikon 18-200mm for other types of photography!
                </p>
            </div>
            <div className="portrait-wrapper">
                <img className="portrait" src={portrait} alt="Portrait of Jomi Ruiz"></img>
            </div>
        </div>
    </div>
  )
}

export default About