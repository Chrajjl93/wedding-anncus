import '@/styles/global.css';
import { useEffect, useRef, useState } from "react";
import AMFlower1Transparent from '../public/am_flower_1_transparent.png'
import AMFlower2Transparent from '../public/am_flower_2_transparent.png'
// import AMFlower2 from '../public/am_flower_2.png'
import AMEmblem from '../public/am_emblem.png'
import Image from 'next/image';

export default function App({ Component, pageProps }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated'));
  }, []);

  let [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    const value = e.target.value;    
    setInputValue(value);

    if (value.toLowerCase() === 'anncus') {
      localStorage.setItem('isAuthenticated', true);
      setIsAuthenticated(true);
    }
  }

  const [isMounted, setIsMounted] = useState(false);

  // set if mounted, better ux on load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {(!isAuthenticated && isMounted) && (
        <div className="auth-main">
          <Image className="auth-top-left-img" src={AMFlower1Transparent} alt="flower"/>
          <div className="auth-center">
            <div className="auth-center-top-div">
              <p>Bröllop</p>
              <h4>27 juni 2026</h4>
            </div>
            
            <form>
              <input
                className="auth-input"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
                placeholder='Skriv lösenord'
              />
            </form>

            <div className="auth-center-bottom-div">
              <p style={{marginRight: 10}}>Anna</p>              
              <Image src={AMEmblem} style={{height: 60, width: 60}} alt="logo"/>
              <p>Marcus</p>
            </div>
          </div>
          <Image className="auth-bottom-right-img" src={AMFlower2Transparent}/>
        </div>
      )}
      {(isAuthenticated && isMounted) && (
        <Component {...pageProps} />
      )}
    </>
  )
}