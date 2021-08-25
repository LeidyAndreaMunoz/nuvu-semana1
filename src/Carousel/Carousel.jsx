import React from 'react'; 
import './Carousel.css';
import mainImg from '../assets/img/media.png';
import Counter from '../assets/img/Counter.png';

export const Carousel =() => {
    return (
        <div className="mediaContainer">
            <h2>Los P*t@s del ahorro</h2>  
            <div className="imgContainer">
                <img className="mainImg" src={mainImg} alt="Media"/>
            </div>
            <div className="counterContainer">
                <img className="counterImg" src={Counter} alt="counter" />
            </div>
        </div>
    )
}