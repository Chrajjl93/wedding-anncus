import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import Anncus1 from '../public/anncus_1.png';
import Anncus2 from '../public/anncus_2.png';
import Anncus3 from '../public/anncus_3.png';
import Anncus4 from '../public/anncus_4.png';
import Anncus5 from '../public/anncus_5.png';
import Anncus6 from '../public/anncus_6.png';
import Anncus7 from '../public/anncus_7.png';
import Anncus8 from '../public/anncus_8.png';
import Anncus9 from '../public/anncus_9.png';
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
                <p>9 år tillsammans går fort. Låt oss titta på vad som egentligen har hänt under den här tiden...</p>

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
                                <h2>2017</h2>
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
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2017</p>
                                        <div style={{ width: "4rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus1} alt="första träffen" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Två töntiga spexare hittar varandra på I-sektionen. I skådisgruppen spelar de – något olägligt – ett syskonpar.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2018</p>
                                        <div style={{ width: "8rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus2} alt="kth början" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>En tunnhårigare Marcus tar examen och har nyss fått sitt diplom. Anna har blivit entledigad från jobbet som marskalk på ceremonin och är redo att skåla.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2019</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus3} alt="kth party" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Anna och Marcus dressar upp för fest på Gotland, fyllt av lekar, sång och ståhej!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2020</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>                                    
                                    <Image src={Anncus4} alt="kak-paradiset" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Utsikt över Sri Lanka – vårt andra äventyr med familjen Kjellberg. Efter en covid-paus blev det många fler resor – idag hela 28 länder tillsammans!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2021</p>
                                        <div style={{ width: "5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus5} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Vandring upptäcktes redan vårt första år – innan vi hade råd. Som nyblivna DINKar gick vi från välling på Kebnekaise till renskavsbuffé på Jämtlandstriangeln.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2022</p>
                                        <div style={{ width: "8rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus6} alt="rom" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Innan dykning på Malta. Bilden ser gullig ut men skenet bedrar, för Anna har som vanligt nervöskissat ungefär hundra gånger innan.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2023</p>
                                        <div style={{ width: "6.5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus7} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Vem vet, kanske är detta vårt sista festande på KTH? Här har vi fångat biljetter till Kravallen för att dansa loss in på småtimmarna.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2024</p>
                                        <div style={{ width: "4.5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus8} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Efter att Anna på nyårsafton hotat om att snart ta saken i egna händer fick Marcus tummen ur och beställde en ring. Frieriet skedde vid Lake Ohrid i Nordmakedonien och hör och häpna… Anna sa “Ja”!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2025</p>
                                        <div style={{ width: "6.5rem", height: 1.5, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus9} alt="förlovade" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: "0.75rem", maxWidth: 200 }}>Två trötta men segerlystna löpare som tagit sig i mål på Lidingöloppet. Efter åtta år tillsammans har Marcus dumheter smittat av sig på Anna, som nu stolt genomför sin första klassiker.</p>
                                </div>
                            </div>


                        </div>

                        {/* Bottom Row */}
                        <div style={{ display: "flex", width: "100%", flexDirection: "row", marginBottom: 40, justifyContent: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2>2026</h2>
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
                                <h2>2017</h2>
                            </div>
                            <div style={{ flex: 1 }} />
                        </div>

                        {/* Center Row */}
                        <div style={{ display: "flex", flexDirection: "row", margin: "10px 0" }}>

                            {/* Center row - Left Col*/}
                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", gap: 40 }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>En tunnhårigare Marcus tar examen och har nyss fått sitt diplom. Anna har blivit entledigad från jobbet som marskalk på ceremonin och är redo att skåla.</p>
                                    <Image src={Anncus2} alt="examen" className="our-love-image"/>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2018</p>
                                        <div style={{ width: "7.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Utsikt över Sri Lanka – vårt andra äventyr med familjen Kjellberg. Efter en covid-paus blev det många fler resor – idag hela 28 länder tillsammans!</p>
                                    <Image src={Anncus4} alt="sri-lanka" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2020</p>
                                        <div style={{ width: "6.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Innan dykning på Malta. Bilden ser gullig ut men skenet bedrar, för Anna har som vanligt nervöskissat ungefär hundra gånger innan.</p>
                                    <Image src={Anncus6} alt="malta" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2022</p>
                                        <div style={{ width: "8.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 10 }}>
                                    <p style={{ textAlign: "right", fontSize: 12, maxWidth: 300 }}>Efter att Anna på nyårsafton hotat om att snart ta saken i egna händer fick Marcus tummen ur och beställde en ring. Frieriet skedde vid Lake Ohrid i Nordmakedonien och hör och häpna… Anna sa “Ja”!</p>
                                    <Image src={Anncus8} alt="frieri" className="our-love-image" />
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginLeft: 10, paddingBottom: 10 }}>2024</p>
                                        <div style={{ width: "8.5rem", height: 2, backgroundColor: "#8AAED1" }} />
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
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2017</p>
                                        <div style={{ width: "5.75rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus1} alt="första träffen" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Två töntiga spexare hittar varandra på I-sektionen. I skådisgruppen spelar de – något olägligt – ett syskonpar.</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2019</p>
                                        <div style={{ width: "7.25rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>                                    
                                    <Image src={Anncus3} alt="gotland" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Anna och Marcus dressar upp för fest på Gotland, fyllt av lekar, sång och ståhej!</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2021</p>
                                        <div style={{ width: "6.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus5} alt="vandring" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Vandring upptäcktes redan vårt första år – innan vi hade råd. Som nyblivna DINKar gick vi från välling på Kebnekaise till renskavsbuffé på Jämtlandstriangeln.</p>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2023</p>
                                        <div style={{ width: "7.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus7} alt="kravallen" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Vem vet, kanske är detta vårt sista festande på KTH? Här har vi fångat biljetter till Kravallen för att dansa loss in på småtimmarna.</p>
                                </div>
                                {/* NEW */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingRight: 10 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                                        <p style={{ marginRight: 10, paddingBottom: 10, textAlign: "right" }}>2025</p>
                                        <div style={{ width: "7.5rem", height: 2, backgroundColor: "#8AAED1" }} />
                                    </div>
                                    <Image src={Anncus9} alt="lidingöloppet" className="our-love-image" />
                                    <p style={{ textAlign: "left", fontSize: 12, maxWidth: 300 }}>Två trötta men segerlystna löpare som tagit sig i mål på Lidingöloppet. Efter åtta år tillsammans har Marcus dumheter smittat av sig på Anna, som nu stolt genomför sin första klassiker.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div style={{ display: "flex", flexDirection: "row", marginBottom: 40 }}>
                            <div style={{ flex: 1 }} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h2>2026</h2>
                                <p>Wedding time baby!</p>
                            </div>
                            <div style={{ flex: 1 }} />
                        </div>
                    
                    </div>
                )}
            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}

        </div>
    );

}