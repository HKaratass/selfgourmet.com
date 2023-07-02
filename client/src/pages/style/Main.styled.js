import styled from "styled-components";

const MainJsx = styled.div`
    padding: 0;
    margin: 0;
    height: calc(100vh - 80px);
    width: 100%;
    /* background: linear-gradient(0deg, #181a1f, #0c0613); */
    color: white;
    overflow: auto;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 415px){
        &::-webkit-scrollbar {
            display: none;
        }
    };
`;

export default MainJsx;

export const AdsContainer = styled.div`
    display: flex;

    @media (max-width: 415px){
        display: grid;
        grid-template-columns: auto auto;
    };

`;

export const QuickSearchContainer = styled.div`
    display: grid;
    grid-template-columns: 16.66666666666667% 16.66666666666667% 16.66666666666667% 16.66666666666667% 16.66666666666667% 16.66666666666667%;
    margin-top: 1vh;
    margin-left: .5%;
    width: 99%;
    border-radius: 10px;
    /* background-color: aqua; */

    @media (max-width: 415px){
        display: grid;
        grid-template-columns: 33.333333333333333% 33.333333333333333% 33.333333333333333%;
    };
`;

export const Banner = styled.div`
    /* background-color: bisque; */
    margin-left: .5%;
    width: 99%;
    margin-top: 2vh;
    height: 36vh;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 415px){
        height: auto;
    };

`;


export const QuickSearch = styled.div`
    background-color: #38b9e0;
    text-align: center;
    align-items: center;
    font-size: 29px;
    /* padding-top: 1vh; */
    margin-left: 1%;
    margin-bottom: .5vh;
    width: 98%;
    margin-top: .5vh;
    border-radius: 5px;
    height: 5vh;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    transition: .1s;
    overflow: hidden;

    &:hover{
        background-color: #6bdcc2;
    }
    &:active{
        transform: scale(0.97);
    }

    @media (max-width: 975px){
        font-size: 3vw;
        padding-top: calc(25px - 3vw);
        height: calc(5vh - 25px + 3vw);
    };

    @media (max-width: 415px){
        padding-top: 0;
        height: auto;
        font-size: 18px;
    };
`;

