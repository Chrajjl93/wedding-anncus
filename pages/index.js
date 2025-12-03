import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import Image from 'next/image';
import Image1 from '../public/homepage_1_s.png';
import Image2 from '../public/homepage_2_s.png';
import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';

export default function Home() {

  const [isMounted, setIsMounted] = useState(false);

  // set if mounted, better ux on load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
          <TopContent />
          <RibbonContent />

          {/* Unique page content */}
          <div className="home-main-content-container">
            <div className="home-center-wrapper">
              <div>
                <h4>Välkommen till vårt bröllop!</h4>
                <div className="divider-wrapper">
                  <div />
                </div>

                <p>Den 27 juni 2026 säger vi ja till varandra omgivna av familj och vänner.</p>
                <p>Det blir en dag fylld av kärlek, skratt och dans.</p>                
                <p style={{ marginTop: 20 }}>Här finns information inför bröllopet: tider, plats, boende och praktiska detaljer. <span style={{textDecoration: "underline"}}>OSA senast den 30 april.</span></p>
                <p style={{ marginTop: 20 }}>Varmt välkommen!</p>
                <p style={{ marginTop: 10 }}>Anna & Marcus</p>

                <div className="divider-2" />
              </div>
            </div>
            <div className="home-img-container">
              <Image className="home-image-1" src={Image1} alt="image" />
              <Image className="home-image-2" src={Image2} alt="image" />
            </div>
            
          </div>

          <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
      )}
    </>

  );
}
