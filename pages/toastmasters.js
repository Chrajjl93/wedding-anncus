import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import WeddingKevin from '../public/wedding-kevin.png';
import WeddingJesper from '../public/jesper_toastmaster_s.jpeg';
import KevinJesperAsien from '../public/kevin_jesper_asien.jpeg';
import KevinChrisNyar from '../public/kevin_chris_nyar.jpeg';
import { useDimensions } from "@/hooks/responsive";

export default function Toastmasters() {

    const dim = useDimensions();
    const isMobile = (dim.isReady && dim.width < 800) ? true : false;

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container" style={{ paddingBottom: 40 }}>

                <h1>TOASTMASTERS</h1>
                <p>Under dagen och kvällen kommer ni att bli ledsagade av två folkkära och mycket nära vänner till oss, Kevin och Jesper!</p>
                <p>För att komma i kontakt med Kevin och Jesper,</p>
                <p style={{ marginTop: 0 }}>skicka ett mail till: christovewedding@gmail.com</p>
                <div className="divider-wrapper">
                    <div />
                </div>

                <div className="toastmaster-view">
                    <div className="toastmaster-container">
                        <div className="toastmaster-image-wrapper">
                            <Image className="toastmaster-image" src={WeddingKevin} alt="kevin" />
                        </div>

                        <div className="toastmaster-sub-container">
                            <h4>Kevin (Kiwi) Eklund</h4>
                            <p>Kevin är en av Christians närmsta vänner och han råkar också vara älskad av allt och alla. Med sin gudomliga charm och glimten i ögat glider han genom livet med bravur.</p>
                            {!isMobile && (
                                <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "flex-end" }}>
                                    <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 4, opacity: 0.3 }} />
                                        <Image className="toastmaster-image" style={{ height: "16rem" }} src={KevinChrisNyar} alt="kevinchrisnyar" />
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* {!isMobile && (
                            <div style={{ flex: 1 }} />
                        )} */}
                    </div>
                    {isMobile && (
                        <div className="toastmaster-image-wrapper" style={{ marginTop: 40, backgroundColor: "#242424", paddingTop: 20, paddingBottom: 20 }}>
                            <div style={{ position: "relative", width: "fit-content", height: "fit-content", alignSelf: "flex-end" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, heigt: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 8, opacity: 0 }} />
                                <Image className="toastmaster-image" style={{ height: "14.25rem", opacity: 0.6, borderRadius: 2 }} src={KevinChrisNyar} alt="kevin" />
                            </div>
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <div style={{height: 60, width: "100%"}}/>
                )}
                <div className="toastmaster-view">
                    <div className="toastmaster-container">
                        {/* {!isMobile && (
                            <div style={{ flex: 1 }} />
                        )} */}
                        <div className="toastmaster-sub-container">
                            <h4 style={{ textAlign: "right" }}>Jesper (Sportsson) Lindmark</h4>
                            <p style={{ textAlign: "right" }}>Jesper är en av Christians närmsta vänner och genom åren har mycket bus hittats på med Jesper vid rodret. Förvänta er mycket energi och många roligheter!</p>
                            {!isMobile && (
                                <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "flex-start" }}>
                                    <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 4, opacity: 0.4 }} />
                                        <Image className="toastmaster-image" style={{ height: "20rem" }} src={KevinJesperAsien} alt="kevinjesperasien" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="toastmaster-image-wrapper">
                            <Image className="toastmaster-image" src={WeddingJesper} alt="Jesper" />
                        </div>

                    </div>
                    {isMobile && (
                        <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "center", backgroundColor: "#242424", paddingTop: 20, paddingBottom: 20 }}>
                            <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 8, opacity: 0 }} />
                                <Image className="toastmaster-image" style={{ height: "14.5rem", opacity: 0.5, borderRadius: 2 }} src={KevinJesperAsien} alt="kevinjesperasien" />
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2025-05-29T15:00:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}