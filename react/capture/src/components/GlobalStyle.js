import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;


}

button{
    font-size:1.1rem;
    font-weight:bold;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid  #23d977;
    background:transparent;
    transition: all 0.3s ease;
    color:white;
    font-family: 'Lobster', cursive;

    &: hover{
        background-color:#23d977;
        color:white;
    }
}
h2{
        font-weight:lighther;
        font-size:4rem;
    }
h3{
    color:white;

}
h4{
    font-weight:bold;
}
p{
    padding: 3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
}   
a{
    font-size:1.1rem
}

span{
    font-weight:bold;
    color:#23d977;

}

`;
export default GlobalStyle;