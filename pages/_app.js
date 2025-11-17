import '@/styles/global.css';
import { useEffect, useRef, useState } from "react";
import Flower from '../public/flower.png'
import LightLogo from '../public/WeddingLogoLight_fixed.png'
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

    if (value.toLowerCase() === 'christove') {
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
          <Image className="auth-top-left-img" src={Flower} alt="flower"/>
          <div className="auth-center">
            <div className="auth-center-top-div">
              <p>Bröllop</p>
              <h4>29 Maj 2025</h4>
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
              <p style={{marginRight: 10}}>Tove</p>
              <Image src={LightLogo} style={{height: 100, width: 100}} alt="logo"/>
              <p>Christian</p>
            </div>
          </div>
          <Image className="auth-bottom-right-img" src={Flower}/>
        </div>
      )}
      {(isAuthenticated && isMounted) && (
        <Component {...pageProps} />
      )}
    </>
  )
}