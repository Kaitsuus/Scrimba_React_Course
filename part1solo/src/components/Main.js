import React from "react";
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
export default function Main(){
    return(
        <div className="main-container">
            <div className="main-text">
                <h1 className="name">Kai Jukarainen</h1>
                <h3 className="job">Frontend Developer</h3>
                <h4 className="page">kaijukarainen.com</h4>
            </div>
            <div className="email" >
                <button className="emailbtn">Email</button>
            </div>
            <div className="about">
                <h3 className="about-head">About</h3>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, 
                tempora officiis. Numquam, odio blanditiis? 
                Voluptate nam itaque vero in optio id iure 
                quasi neque. Accusamus impedit et provident ducimus nesciunt?</p>
                <h3 className="about-head">Intrests</h3>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, 
                tempora officiis. Numquam, odio blanditiis? 
                Voluptate nam itaque vero in optio id iure 
                quasi neque. Accusamus impedit et provident ducimus nesciunt?</p>
            </div>
            <div className="medialinks">
                <ul className="list">
                    <li><a href="#">
                    <img src={facebook} alt="" />
                        </a></li>
                    <li><a href="#">
                    <img src={instagram} alt="" />
                        </a></li>
                    <li><a href="#">
                    <img src={linkedin} alt="" />
                        </a></li>
                </ul>
            </div>
            
        </div>
    )
}