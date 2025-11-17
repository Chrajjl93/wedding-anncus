import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import WeddingAustralia from '../public/wedding-australia-s.png';
import WeddingEngagement from '../public/wedding-engagement-s.png';
import WeddingFirstMeet from '../public/wedding-firstmeet.png';
import WeddingRome from '../public/wedding-rome-s.png';
import Wedding14 from '../public/2014_1.jpeg';
import Wedding16 from '../public/2016_1.jpeg';
import Wedding17 from '../public/2017_1.jpeg';
import { useDimensions } from "@/hooks/responsive";


export default function KarlekHistoria() {

    const dim = useDimensions();
    const isMobileOrMidSize = (dim.isReady && dim.width < 1250) ? true : false;
    

    return (
        <div style={{ display: "flex", height: "fit-content", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container" style={{marginBottom: 40}}>
                <h1>VÅR KÄRLEKSHISTORIA</h1>
                <p>11 år tillsammans går fort, låt oss titta på vad som egentligen har hänt under den här tiden!</p>

                <div className="divider-wrapper">
                    <div />
                </div>

                {/* Render 2 different setups based on mobile vs desktop */}

                {/* Tree Structure */}
                {isMobileOrMidSize && (
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "0 20px" }}>

                        {/* Top Row */}
                        <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start" }}>

                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <p style={{ fontSize: "0.9rem" }}>Där det började...</p>
                                <h2>2013</h2>
                            </div>
                        </div>

                        {/* Center Row */}
                        <div style={{ display: "flex", flexDirection: "row", margin: "10px 10px 10px 20px" }}>

                            {/* Center row - Left Col*/}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div className="our-love-main-branch" />
                            </div>

                            {/* Center row - Right Col*/}
                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", gap: 20 }}>

                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2013</p>
                                        <div style={{ width: "4rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingFirstMeet} alt="första träffen" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Efter många månaders uppvaktning från Christian är denna bild från efterfesten då Tove släppte garden och vi lärde känna varandra!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2014</p>
                                        <div style={{ width: "8rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={Wedding14} alt="kth början" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Christian börjar på KTH och flyttar till Stockholm. Tove kommer på besök över helgerna och vi delar på det rymliga 18 kvm stora studentrummet.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2016</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={Wedding16} alt="kth party" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Tove och Christian studerar nu på KTH tillsammans och steker runt på finsittningar.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2017</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    
                                    <Image src={Wedding17} alt="kak-paradiset" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Bild tagen (innan) kak-frossa på Taxinge slott. Christian har precis opererat höger knä så Tove får vara stöd. Wife material!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2019</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingAustralia} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Tove åker så långt bort från Sverige som möjligt för en utbytestermin i Brisbane, Australien. Bilden är tagen på okänd mark efter något regnskogsäventyr.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2021</p>
                                        <div style={{ width: "8rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingRome} alt="rom" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Många resor har vi gjort genom åren, här är vi i Rom under en resa i Italien.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2023</p>
                                        <div style={{ width: "6.5rem", height: 1.5, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingEngagement} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>På vår 10-årsdag (som firades i Spanien) gick Christian äntligen ner på knä och vi förlovade oss!</p>
                                </div>
                            </div>


                        </div>

                        {/* Bottom Row */}
                        <div style={{ display: "flex", width: "100%", flexDirection: "row", marginBottom: 40, justifyContent: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2>2025</h2>
                                <p>Wedding time baby!</p>
                            </div>
                        </div>

                    </div>

                )}

                {/* Tree Structure */}
                {!isMobileOrMidSize && (
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        {/* Top Row */}
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ flex: 1 }} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <p style={{ fontSize: "0.9rem" }}>Där det började...</p>
                                <h2>2013</h2>
                            </div>
                            <div style={{ flex: 1 }} />
                        </div>

                        {/* Center Row */}
                        <div style={{ display: "flex", flexDirection: "row", margin: "10px 0" }}>

                            {/* Center row - Left Col*/}
                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", gap: 40 }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Christian börjar på KTH och flyttar till Stockholm. Tove kommer på besök över helgerna och vi delar på det rymliga 18 kvm stora studentrummet.</p>
                                    <Image src={Wedding14} alt="kth start" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2014</p>
                                        <div style={{ width: "7.5rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Bild tagen (innan) kak-frossa på Taxinge slott. Christian har precis opererat höger knä så Tove får vara stöd. Wife material!</p>
                                    <Image src={Wedding17} alt="kak paradiset" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2017</p>
                                        <div style={{ width: "6.5rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Många resor har vi gjort genom åren, här är vi i Rom under en resa i Italien.</p>
                                    <Image src={WeddingRome} alt="rom" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2021</p>
                                        <div style={{ width: "8.5rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Center row - Center Col*/}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div className="our-love-main-branch" />
                            </div>

                            {/* Center row - Right Col*/}
                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", gap: 40 }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2013</p>
                                        <div style={{ width: "5.75rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingFirstMeet} alt="första träffen" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Efter många månaders uppvaktning från Christian är denna bild från efterfesten då Tove släppte garden och vi lärde känna varandra!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2016</p>
                                        <div style={{ width: "7.25rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>                                    
                                    <Image src={Wedding16} alt="kth party" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Tove och Christian studerar nu på KTH tillsammans och steker runt på finsittningar.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2019</p>
                                        <div style={{ width: "6.5rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingAustralia} alt="australien" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Tove åker så långt bort från Sverige som möjligt och tar en utbytestermin i Brisbane (Australien). Bilden är tagen på okänd mark efter något regnskogsäventyr.</p>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2023</p>
                                        <div style={{ width: "7.5rem", height: 2, backgroundColor: "#CBC5B9" }} />
                                    </div>
                                    <Image src={WeddingEngagement} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>På vår 10-årsdag (som firades i Spanien) gick Christian äntligen ner på knä och vi förlovade oss!</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div style={{ display: "flex", flexDirection: "row", marginBottom: 40 }}>
                            <div style={{ flex: 1 }} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h2>2025</h2>
                                <p>Wedding time baby!</p>
                            </div>
                            <div style={{ flex: 1 }} />
                        </div>
                    
                    </div>
                )}
            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2025-05-29T15:00:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}

        </div>
    );

}