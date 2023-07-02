import styled, { keyframes } from "styled-components";


export const StyledPostModal = styled.div`
    position: absolute;
    inset: 0;
    z-index: 9;
    background: none;
    display: flex;
`;




const animOpen = keyframes`
    0% { height: 0px; width: 0px; }
    /* 30% { height: 400px; width: 400px; opacity: 1 } */
    /* 40% { height: 405px; width: 405px; opacity: 0.3; } */
    100% { height: 200px; width: 200px;  } //opacity: 0.6;
`;

const animClose = keyframes`
    0% { height: 200px; width: 200px; }
    /* 30% { height: 400px; width: 400px; opacity: 1 } */
    /* 40% { height: 405px; width: 405px; opacity: 0.3; } */
    100% { height: 0px; width: 0px;  } //opacity: 0.6;
`;



export const PopupItem = styled.div`
    position: relative;
    background-color: #d6c9e8;
    margin-left: 8px;
    margin-right: 8px;
    padding: 2px 0px 3px 10px;
    border-radius: 10px;
    font-size: 18px;
    right: 0px;
    user-select: n;

    &:hover {
        cursor: pointer;
        background-color: #796692;

    }
    
    & span {
        color: black ;
    }

    
`;

const animItemOpen = keyframes`
    10% { height: 0px; width: 0px; }
    100% { height: 24px; width: 174px;  } 
`;
const animItemClose = keyframes`
    0% { height: 24px; width: 174px; }
    60% { height: 0px; width: 0px;  } 

`;


export const PopupCont = styled.div`
    position: absolute;
    background: linear-gradient(0deg, #181a1f, #0c0613);
    border-radius: 20px;
    right: 10px;
    /* top: 10px; */
/* 
    margin-right: 50px;
    margin-top: 10px;
    margin-left: auto; */

    z-index: 2;
    /* animation-play-state: ${props => props.Act ? "running" : "paused"}; */
    animation-name: ${props => props.Open ? animOpen : animClose};
   
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    overflow: hidden;


    ${PopupItem}:first-child{
        margin-top: 15px;
    }
    ${PopupItem}{
        margin-top: 6px;
        
        animation-name: ${props => props.Open ? animItemOpen : animItemClose};
        animation-delay: 0s;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        & span {
            visibility: ${props => props.Open ? "visible" : "hidden"};
            opacity: ${props => props.Open ? "1" : "0"};;
            transition: visibility 0s, opacity 1.2s linear;
           
        }
        
    }
`; 


