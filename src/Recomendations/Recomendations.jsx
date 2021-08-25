import React from 'react'; 
import './Recomendations.css';
import img1 from '../assets/img/IMG.png';
import img2 from '../assets/img/IMG-1.png';
import img3 from '../assets/img/IMG-2.png';


export const Recomendations =() => {
    return (
        <div className="gridRcomendations">
            <div className="row" >
                <div className="col-8">
                    <h6>10 gastos que debes evitar</h6>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <div className="col-4">
                    <img src={img1} alt="Gastos" />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>10 gastos que debes evitar</h6>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <div className="col-4">
                    <img src={img2} alt="Gastos" />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h6>10 gastos que debes evitar</h6>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <div className="col-4">
                    <img src={img3} alt="Gastos" />
                </div>
            </div>
        </div>
    )
}