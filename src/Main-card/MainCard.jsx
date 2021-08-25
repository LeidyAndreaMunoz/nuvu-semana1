import React from 'react';
import './MainCard.css';
import imgMain from '../assets/img/MainCard.png'

export const MainCard = () => {
    return (
        <div className="card" id="mainCard">
            <div className="card-body">
                <div className="MainCardContainer">
                    <span className="mainText">Eres <br/> estratega</span>
                    <span className="imgMainContainer"><img src={imgMain} alt="Estatega"></img></span>
                </div>
                <div className="textContainer">
                    <p>Tu saldo</p>
                    <h1>$1.570.000</h1>
                </div>
            </div>
        </div>
    )
}