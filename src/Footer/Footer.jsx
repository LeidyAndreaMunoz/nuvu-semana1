import React from 'react';
import './Footer.css';
import more from '../assets/img/more.png';
import profile from '../assets/img/profile.png';
import history from '../assets/img/history.png';
import home from '../assets/img/home.png';
import invest from '../assets/img/invest.png';

export const Footer =() => {
    return (
        <div className="footer">
            <ul className="nav" >
                <li className="nav-item">
                    <img src={home} alt="Home icon "/>
                </li>
                <li className="nav-item">
                    <img src={history} alt="List icon"/>
                </li>
                <li className="nav-item" id="agg-footer-icon">
                    <img src={invest} alt="Add icon" />
                </li>
                <li className="nav-item">
                    <img src={profile} alt="Account icon"/>
                </li>
                <li className="nav-item">
                    <img src={more} alt="More icon"/>
                </li>
          </ul> 
        </div>
    )
}