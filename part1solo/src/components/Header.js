import React from "react";
import img from "../img/mina.jpg"

export default function Header(){
    return(
        <div className="header">
            <img src={img} alt="" className="header-img"/>
        </div>
    )
}