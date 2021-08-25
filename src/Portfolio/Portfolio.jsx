import React from 'react';
import './Portfolio.css';
import robotAdvisor from '../assets/img/holding_donut.png';
import logoPortfolio from '../assets/img/portfolio-logo.png';
import left from '../assets/img/chevron_left.png';
import right from '../assets/img/chevron_right.png';

export const Portfolio = () => {
    return (
        <div className="portfolioContainer">
            <div className="titlePortfolioContainer">
                <span><h4>Conoce tu portafolio</h4></span>
                <span className="badge" id="badgeTitle">Estratega</span>
            </div>
            <div className="cardPortfolio">
                <div className="portfolio">
                    <div className="robotAdvisor">
                        <img src={robotAdvisor} alt="Robot Advisor" />
                    </div>
                    <div className="SkandiaContainer">
                        <div className="Skandia">
                            <img src={logoPortfolio} alt="Logo del patrocinador"/>
                            <span className="badge" id="badgePortfolio">15%</span>
                            <p className="about">FIC Old Mutual Efectivo</p>
                            <p className="price">$240.000</p>
                            <p className="typeTitle">Tipo de activo</p>
                            <p className="type">Renta fija <br/> Depósito a la fija</p>
                        </div>
                        <div className="controlers">
                            <span><img src={left} alt="Atras" /></span>
                            <span><img src={right} alt="Adelante" /></span>
                        </div>
                    </div>
                </div>
                <div className="textPortfolio">
                    <p>Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</p>
                </div>
            </div>
        </div>
    )
}