import React from "react";
import fill from '../fill.png'

export default function Header(){
    return(
        <header className="header">
            <img src={fill} alt="" className="header-img" />
            <p className="header-txt">my travel hournal</p>
        </header>
    )
}