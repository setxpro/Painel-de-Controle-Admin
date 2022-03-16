import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,500;0,600;0,700;0,800;1,200;1,500;1,600;1,700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    :root {
        --color--topo: #1C1C1C;
        --color--header:#EFEFEF;
        --color--barStatus: #fff;
        --color--barTitle: #F9F9F9;

        --color--sidebar: #2B2B2B;
        --color--text: #eee;
        --color--borderleft: #FF4C37;

        --color-bs: 0px 0px 13px 0px #000000;
    }
`;