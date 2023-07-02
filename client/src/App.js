import Nav from './components/Nav';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import List from './pages/List';
import Profile from './pages/Profile';
import PartnerProfile from './pages/PartnerProfile';
import NotFound from './pages/NotFound';

import { GlobalStyle } from './style/GlobalStyle';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useToken from './hooks/useToken'
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, deneysel } from './themes';
import { PopupKarartma } from './style/App.styled';

function App() {
  const [token] = useToken();
  const backgroundRef = useRef(null);
  const [popupBack, setPopupBack] = useState(false);
  const [popupAnimation, setPopupAnimation] = useState(true);
  const [currPath, setCurrPath] = useState(window.location.pathname);
  useEffect(() => {
    setCurrPath(window.location.pathname)
  }, [])

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={deneysel}>
        <GlobalStyle/>

        {currPath !== "/login" && <Nav setPopupBack={setPopupBack} 
        popupAnimation={popupAnimation} 
        setPopupAnimation={setPopupAnimation} modalOpen={popupBack} setModal={setPopupBack} token={token}></Nav>}

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={token?.token ? <Navigate to={"/"} replace/> : <LogIn/>}/>
          {/* <Route path='/slidertest' element={<SliderJsx/>}/> */}
          {/* <Route path='/test' element={<Test />}/> */}
          <Route path='/list' element={<List />}/>
          <Route path='/partner/:title/:id' element={<PartnerProfile token={token}/>}/>
          <Route path='/profile' element={<Profile token={token}/>}/>
          <Route path='/404' element={<NotFound />}/>
          <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>

      </ThemeProvider>
      
    </BrowserRouter>

      { popupBack && <PopupKarartma 
      ref={backgroundRef} onClick={
        async(e) => {
          if (e.target === backgroundRef.current) {
            setPopupAnimation(false);
            await delay(1000);
            setPopupBack(false);
            setPopupAnimation(true);
          }
          setPopupBack(false)
          }}/>}
    <ToastContainer />
    </>
  );
}

export default App;
