import { createGlobalStyle } from 'styled-components';
import BGdesktop from '../src/assets/images/bg-intro-desktop.png';
import MobileDesktop from '../src/assets/images/bg-intro-mobile.png';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;   
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background: #FF7979;
        background-size:auto;
        background-repeat: no-repeat;
        background-image: url(${MobileDesktop})
    }

    @media screen and (min-width: 768px){
        body{
            background-image: url(${BGdesktop});
            background-size: cover;
        }
    }  
`;
