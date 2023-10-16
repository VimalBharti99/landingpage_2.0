import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image (1).png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
         <div className="about-section-text-container">
           <p className='primary-subheading'>About</p>
           <h1 className='primary-heading'>
               Food Is An Important Part Of A Balanced Diet
           </h1>
           <p className='primary-text'>
           Food is any substance consumed by an organism for nutritional support. Food is
            usually of plant, animal, or fungal origin and contains essential
            nutrients such as carbohydrates, fats, proteins, vitamins, or minerals .
           </p>
           <p className='primary-text'>
           Humans generally use cooking to prepare food for consumption. The majority of the 
           food energy required is supplied by the industrial food industry,
           </p>
            <div className="about-button-container">
                <button className='secondary-button'>Learn More <a href="https://en.wikipedia.org/wiki/Food"></a></button>
            </div>
         </div>
    </div>
  )
}

export default About
