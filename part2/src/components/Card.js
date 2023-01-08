import React from "react";
import Star from '../images/Star.png'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if (props.location === "Online"){
        badgeText = 'ONLINE'
    }
    
    

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`images/${props.coverImg}`} className="card-image" />
            <div className="card-stats">
                <img className="star" src={Star} alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) . </span>
                <span>{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}