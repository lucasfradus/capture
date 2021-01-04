import React from 'react';
import home1 from '../img/home1.png';
const AboutUs = () => {
    return (
        <div>
            <div className="description">
               
                <div className="title">
                    <div className="hide">
                        <h2>
                        We Work to make
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                        your <span>dreams</span> 
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                        come true.
                        </h2>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis, possimus minus et illum, pariatur tempora culpa fugit illo eum iure omnis? Ut sed velit, architecto voluptatibus nobis consequatur consectetur.</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                    <img src={home1} alt="camara"/>
                </div>
        </div>
    )
}
 
export default AboutUs;
