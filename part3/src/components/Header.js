import React from 'react'
import troll from '../troll.png'
export default function Header(){
    return(
        <header className="App-header">
            <img src={troll} alt="" className='left-img'/>
            <h2 className='left-text'>Meme Generator</h2>
            <h4 className='right-text'>React course - Project 3</h4>
        </header>

    )
}