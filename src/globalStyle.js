import {createGlobalStyle} from 'styled-components';



export const GlobalStyle =createGlobalStyle`
body{
    padding:20px 60px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (max-width:800px){
        padding:8px;
    }
  
  }
  a{
    text-decoration: none;
    color: black;
  }
  *{
    box-sizing: border-box;
  }
  
`