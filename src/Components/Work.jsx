import React from 'react';
 import PickMeals from "../Assets/pick-meals-image.png";
 import ChooseMeals from "../Assets/choose-image.png";
 import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image : PickMeals,
            title : "Pic Meals",
            text  : "You can pick your favorite food from here !",

        },
        {
            image : ChooseMeals,
            title : "Choose How Often",
            text  : "Choose whatever you are cravings for Now !" ,
        },
        {
            image : DeliveryMeals,
            title : "Fast Deliveries",
            text :  "We'll deliver your order anywhere you want !",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading '>How it Works</h1>
            <p className='primary-text '>
                We Make Great And Healthy Food For You And Your Family.
            </p>
        </div>
        <div className="work-section-bottom ">
            {
               workInfoData.map((data) => (
                <div className="work-section-info ">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
