import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import image from '../img/home2.png'

const Services = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="icon"/>
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="icon"/>
                            <h3>Diaphragm</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="icon"/>
                            <h3>Great Cost</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Teamwork</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="hom2"/>
            </div>
        </div>

    )
}

export default Services;