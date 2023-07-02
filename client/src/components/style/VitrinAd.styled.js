import styled from "styled-components";


export const VitrinAdStyled = styled.div`
    /* background-color: burlywood; */
    position: relative;
    background: none;
    margin-left: .5%;
    width: 19.4%;
    margin-top: 1vh;
    height: 36vh;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: scale(1.012);
    }
    
    @media (max-width: 415px){
        width: 95%;
        margin-left: 2.5%;
        height: 18vh;
    };

`;


export const AdImg = styled.img`
    width: 100%;
    height: 100%;
`;