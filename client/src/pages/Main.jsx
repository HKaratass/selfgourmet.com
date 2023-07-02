import MainStyled, { AdsContainer, Banner, QuickSearch, QuickSearchContainer } from "./style/Main.styled"
import dominosbanner from "../Images/domban.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getPartnerActionWhere, getPartnerTakeAdsAction } from "../redux/actions/partner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VitrinAd from "../components/VitrinAd";
import { useWindowSize } from "../hooks/useWindowSize";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setFirst] = useState(true);
  async function run() {
    await dispatch(getPartnerTakeAdsAction());
  }

  if(first) {
    run();
    setFirst(false);
  }
  const {ads} = useSelector(state => state.ads);
  console.log("ads", ads);
  console.log('%cGazi Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği Projesidir', 'color: blue; font-size: 45px; background-color: yellow;');
  console.log('%cKurum ve kuruluşlar temsilidir, rastgele değerler ile puanlanmış ve yorumlanmıştır. %cGerçekliği yansıtmaz.', 'color: blue; font-size: 30px; background-color: yellow;', 'color: red; font-size: 40px; background-color: yellow;');

  const adsShow = [];
  const [width, height] = useWindowSize();
  if(width > 415) {
    for(var i=0; i< ads?.length; i++) {
      adsShow.push(<VitrinAd key={i} data={ads?.[i]}/>)
      if(i === 4) break;
    }
  } else {
    ads?.map((ad, i) => (
      adsShow.push(<VitrinAd key={i} data={ad}/>)
    ))
  }



  return (
    <MainStyled>
        <Banner><img src={dominosbanner} alt="dom-ban" style={{width: "100%", height: "100%"}} /></Banner>
        <QuickSearchContainer>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=1")); navigate("/list")}}>₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=2")); navigate("/list")}}>₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=3")); navigate("/list")}}>₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=4")); navigate("/list")}}>₺₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=5")); navigate("/list")}}>₺₺₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=6")); navigate("/list")}}>₺₺₺₺₺₺</QuickSearch>         
        </QuickSearchContainer>
        <QuickSearchContainer style={{marginTop: "0"}}>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Döner%25'")); navigate("/list")}}>Döner</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Izgara%25'")); navigate("/list")}}>Izgara</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Tatlı%25'")); navigate("/list")}}>Tatlı</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Hamburger%25'")); navigate("/list")}}>Hamburger</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Pizza%25'")); navigate("/list")}}>Pizza</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Tavuk%25'")); navigate("/list")}}>Tavuk</QuickSearch>         
        </QuickSearchContainer>
        <AdsContainer>
          {
            adsShow
          }
        </AdsContainer>
    </MainStyled>
  )
}

export default Main