import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="" className="card-img"/>
            <div className="location">
                <p className="card-location">{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h3 className="card-header">{props.title}</h3>
                <p className="online"><span className="bolder">{props.startDate} - {props.endDate}</span></p>
                <p className="card-info">{props.description}</p>
            </div>
        </div>
    )
}