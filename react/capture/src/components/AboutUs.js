import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {Description,About, Image, Hide} from '../styles';

const AboutUs = () => {
    return (
        <About>
            <Description>
               
                <div className="title">
                    <Hide>
                        <h2>
                        We Work to make
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>
                        your <span>dreams</span> 
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>
                        come true.
                        </h2>
                    </Hide>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis, possimus minus et illum, pariatur tempora culpa fugit illo eum iure omnis? Ut sed velit, architecto voluptatibus nobis consequatur consectetur.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                    <img src={home1} alt="camara"/>
                </Image>
        </About>
    )
}


export default AboutUs;
