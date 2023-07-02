import styled, { keyframes } from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`;

const grad = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;


const Nav = styled.div`
    /* background-color: #3c2659; */
    background: ${({theme}) => theme.navbar};
    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
    background-size: 400% 400%;
    animation: ${grad} 20s ease infinite;

    width: 100%;
    height: 60px;

    display: flex;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    /* overflow: hidden; */ /** hidden kapandı sırf arama yeri için */
    /* z-index: 1; */
    //total 80 px alan
`;
export default Nav;

export const ResponsiveContainer = styled.div`
    position: relative;
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    /* background-color: bisque; */

    height: 100%;


`;

export const TTest = styled.div`
    /* position: absolute; */
    /* background-color: bisque; */

    margin-right: 15px;
    margin-left: auto;

    width: 60px;
    height: 60px;
    border-radius: 100px;
    right: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);

    }
`;

export const GirisYapBut = styled.div`
    /* position: absolute;
    top: 22.5px;
    right: 15px; */

    margin-right: 15px;
    margin-left: auto;
    margin-top: 12.5px;

    user-select: none;
    background-color: ${({theme}) => theme.sale_card_test_bg};
    width: 100px;
    text-align: center;
    padding-top: 5px;
    font-size: large;
    font-weight: 700;
    color: white;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.95);
    }
`;



export const Logo = styled.img`
    /* position: absolute; */
    user-select: none;
    width: 69.2px; //calc(3.72vh + 5.62vw);           //562px
    height: 60px; //calc(5.62vh + 3.72vw);           //372px */
    /* padding-left: 12px; */
    margin-left: 12px;
    /* margin: 0; */
    /* padding-left: 0; */
    /* border-radius: calc(0.9vh + 1.35vw); */
    cursor: pointer;
`;


export const InputArea = styled.div`
    position: relative;
    width: 35%;
    margin-left: 10px;
    display: table-column;
`;
export const SearchSuggestLabel = styled.label`
    width: calc(100% - 1px);
    height: 24px;
    display: block;
    font-size: 20px;
    overflow: hidden;
    border-bottom: 1px solid silver;
    padding-bottom: 2px;
    padding-left: 1px;

    &:hover {
        background-color: grey;
    }
`;
export const SearchSuggestArea = styled.div`
    width: 86%;
    height: 200px;
    background-color: #FDFDFD;
    z-index: 5;
    margin-left: 7%;
    margin-right: 10%;
    margin-top: -7px;
    overflow: auto;
    display: ${(props) => props.act ? "" : "none" };
`;


export const Girdi = styled.input.attrs(props => ({type : `${props.t}`}))`
    width: 82%;//35%;
    margin-left: 2%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 5%;
    padding-right: 10%;
    /* min-width: 250px; */


    height: 80%;
    font-size: 19px;//calc(0.75vh + 1vw);
    font-weight: 520;
    border: none;
    background-color: #FDFDFD;
    border-radius: 25px;//calc(0.9vh + 1.35vw);
    outline: none;


    color: #000;


`;
