import React from 'react';
import './GoalGrid.css';
import addImg from '../assets/img/add_circle.png';
import beachImg from '../assets/img/beach.png';
import computerImg from '../assets/img/computer.png';
import donut20 from '../assets/img/20_donut.png';
import donut0 from '../assets/img/0_donut.png';

export const GoalGrid =() =>{
    return(
        <div className="goalGridContainer">
            <div className="titleGridContainer">
                <span><h4>Tus metas</h4></span>
                <span><img src={addImg} alt="Agregar meta" /></span>
            </div>
            <div className="row" id="goalGrid">
                <div className="col">
                    <div className="titleGoalContainer">
                        <img src={beachImg} alt="Viajar" />
                        <p className="titleGoal">Viaje a Islas Canarias</p>
                    </div>
                    <div className="goalProgress">
                        <div><img src={donut20} alt="Progreso" /></div>
                        <div className="progress">
                            <div>
                                <h6>$1.630.000</h6>
                            </div>
                            <div>
                                <p>$8.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="titleGoalContainer">
                        <img src={computerImg} alt="Viajar" />
                        <p className="titleGoal">Macbook Pro</p>
                    </div>
                    <div className="goalProgress">
                        <div><img src={donut0} alt="Progreso" /></div>
                        <div className="progress">
                            <div>
                                <h6>$0</h6>
                            </div>
                            <div>
                                <p>$7.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}