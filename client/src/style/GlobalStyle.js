import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    &body {
        /* position: relative; */
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* margin-left: 200px;
        margin-right: 200px; */
        /* max-width: 1280px;
        margin-left: auto;
        margin-right: auto; */
        /* background: linear-gradient(135deg, rgba(199,168,255,1) 0%, rgba(147,70,252,1) 28%, rgba(49,16,94,1) 100%); */
        background: linear-gradient(90deg, rgba(49,16,94,1) 10%, rgba(147,70,252,1) 20%, rgba(199,168,255,1) 50%, rgba(147,70,252,1) 80%, rgba(49,16,94,1) 90%);

        @media (max-width: 415px){
            height: 100%;
        };


    }

    &code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }



    /** custom scroll /
    /* width */
    &::-webkit-scrollbar {
        width: 4px;
        height: 3px;
    }



    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #16181c; 
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #000; 
    }
`;
