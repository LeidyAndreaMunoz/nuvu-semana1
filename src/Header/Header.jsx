import React from 'react';
import './Header.css'
import imgHeader from '../assets/img/notifications.png'

export const Header = () =>{
    return (
        <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid"  id="containerHeader">
                <span>Hola, Camila</span>
                <img src={imgHeader} alt="Notificaciones" width="15" className="align-text-top" id="imgHeader"></img>
            </div>
        </nav>
    )
}