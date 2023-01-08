import React from "react";
import Group77 from '../images/Group77.png'

export default function Hero(){
    return(
        <div className="hero-container">
            <div className="img-container">
                <img src={Group77} alt="" />
            </div>
            <div className="about">
                <h1 className="hero-header">Online Experience</h1>
                <p className="hero-text">Join unique interactive 
                activities led by one-of-a-kind hosts—all
                 without leaving home.</p>
            </div>

        </div>
    )
}