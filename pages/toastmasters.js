import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import WeddingAlice from '../public/alice_1.png';
import WeddingMarcus from '../public/marcus_1.png';
import WeddingMarcus2 from '../public/marcus_2.png';
import WeddingAlice2 from '../public/alice_2.png';
import { useDimensions } from "@/hooks/responsive";

export default function Toastmasters() {

    const dim = useDimensions();
    const isMobile = (dim.isReady && dim.width < 800) ? true : false;

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container" style={{ paddingBottom: 0 }}>

                <h1>TOASTMASTERS</h1>
                <p>Under dagen kommer ni att föras och förföras av våra fantastiska toastmasters. Låt oss presentera dunderduon Alice och Marcus!</p>
                <p>Dessa galenskapare nås enklast via mejl:</p>
                <p style={{ marginTop: 0 }}>annaochmarcus2026@gmail.com</p>
                <div className="divider-wrapper">
                    <div />
                </div>

                <div className="toastmaster-view">
                    <div className="toastmaster-container">
                        <div className="toastmaster-image-wrapper">
                            <Image className="toastmaster-image" src={WeddingAlice} alt="alice" />
                        </div>

                        <div className="toastmaster-sub-container">
                            <h4>Alice Rosenfeldt</h4>
                            <p>Denna pingla gjorde entré i gymnasietider där hon tillsammans med brudgummen vadade i dy och lera i jakt på tångräkor för den marina läran. Hon är en konferencier av rang och räds inte rampljuset där hon i juni kommer göra succé. Ett varningens ord dock, Alice är jurist så passa er för vad ni säger…</p>
                            {!isMobile && (
                                <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "flex-end" }}>
                                    <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 4, opacity: 0 }} />
                                        <Image className="toastmaster-image" style={{ height: "16rem" }} src={WeddingAlice2} alt="alice" />
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* {!isMobile && (
                            <div style={{ flex: 1 }} />
                        )} */}
                    </div>
                    {isMobile && (
                        <div className="toastmaster-image-wrapper" style={{ marginTop: 40, backgroundColor: "#8AAED1", paddingTop: 20, paddingBottom: 20 }}>
                            <div style={{ position: "relative", width: "fit-content", height: "fit-content", alignSelf: "flex-end" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, heigt: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 8, opacity: 0 }} />
                                <Image className="toastmaster-image" style={{ height: "14.25rem", opacity: 1, borderRadius: 2 }} src={WeddingAlice2} alt="aliceochmarcus" />
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
                            <h4 style={{ textAlign: "left" }}>Marcus Ask (aka. Marcus 2)</h4>
                            <p style={{ textAlign: "left" }}>Det som började med en nördklubb för skräpfilmer på bio blomstrade ut i nördklubb för skräp TV-serier där till och med Anna och Marcus fru Emma ställde upp på att delta. Marcus seglar genom livet och förkroppsligar andan ”hur svårt kan det vara” och ”ett gott skratt förlänger livet”. Var på din vakt för ruggigt dåliga vitsar (ps. vid behov går han att muta med en glassbåt).</p>
                            {!isMobile && (
                                <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "flex-start" }}>
                                    <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 4, opacity: 0 }} />
                                        <Image className="toastmaster-image" style={{ height: "20rem" }} src={WeddingMarcus} alt="marcusochmarcus" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="toastmaster-image-wrapper">
                            <Image className="toastmaster-image" src={WeddingMarcus2} alt="Marcus" />
                        </div>

                    </div>
                    {isMobile && (
                        <div className="toastmaster-image-wrapper" style={{ marginTop: 20, justifyContent: "center", backgroundColor: "#8AAED1", paddingTop: 20, paddingBottom: 20, borderBottomRightRadius: "1rem", borderBottomLeftRadius: "1rem" }}>
                            <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "100%", width: "100%", backgroundColor: "white", zIndex: 100, borderRadius: 8, opacity: 0 }} />
                                <Image className="toastmaster-image" style={{ height: "14.5rem", opacity: 1, borderRadius: 2 }} src={WeddingMarcus} alt="marcusochmarcus" />
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}