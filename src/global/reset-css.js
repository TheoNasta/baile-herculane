import { createGlobalStyle } from "styled-components"
import { FontResources } from "./../components/fonts"
import { Device } from "./sizes"

export const GlobalStyle = createGlobalStyle`

    a{text-decoration:none; color:inherit; cursor:pointer;}
    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}
    figure{margin:0;}
    input::-moz-focus-inner {border:0; padding:0; margin:0;}
    ul, ol, dd{margin:0; padding:0; list-style:none;}
    h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}
    p{margin:0;}
    cite {font-style:normal;}
    fieldset{border-width:0; padding:0; margin:0;}

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        transition: 1s ease background-color;
    }
    
    *::-webkit-scrollbar { width: 0 !important }
    * { -ms-overflow-style: none; }

`
