import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
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

const About = styled.div`
min-height:90vh;
display:flex;
justify-content:space-between;
align-items:center;
padding: 5rem 10rem;
color:white;

`;


const Description = styled.div`
flex:1;
padding-right:5rem;
h2{
    font-weight:lighter;
}

`;
const Image = styled.div`
flex:1;
overflow:hidden;
img{
    width:100%;
    height: 80vh;
    object-fit:cover;
}
`;

const Hide = styled.div`
overflow:hidden;

`;

export default AboutUs;
