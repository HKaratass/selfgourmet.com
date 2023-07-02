import { useRef } from "react";
import { StyledPostModal, PopupCont, PopupItem } from "./style/Popup.styled";
import { useNavigate } from "react-router-dom";

const PostModal = ({popupAnimation, setPopupAnimation, setPopupBack, setModal, token}) => {
    const navigate = useNavigate();
    const backgroundRef = useRef(null);

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const logoutFunc = () => {
      localStorage.clear();
      window.location = "/login";
    }

    async function openProfile () {
        navigate("/profile");
        setPopupAnimation(false);
        await delay(1000);
        setPopupBack(false);
        setPopupAnimation(true);
    }

  return (
    <StyledPostModal 
        ref={backgroundRef} 
        onClick={
            async(e) => {
                if (e.target === backgroundRef.current){
                    setPopupAnimation(false);
                    await delay(1000);
                    setPopupBack(false);
                    setPopupAnimation(true);
                }
                
            }
        }
    >
      
        <PopupCont Open={popupAnimation} Act={true}>
            <PopupItem onClick={openProfile}><span>{token?.userNow?.user_name}</span></PopupItem>
            <PopupItem><span>Dil: Türkçe</span></PopupItem>
            <PopupItem><span>Ülke: Türkiye</span></PopupItem>
            <PopupItem><span>Tema: Varsayılan</span></PopupItem>
            <PopupItem onClick={logoutFunc}><span>Çıkış</span></PopupItem>
        </PopupCont>
    </StyledPostModal>
  )
}

export default PostModal;