import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';

export default function AboutTheWedding() {

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container">
                
                    <h1>OM BRÖLLOPET</h1>
                    <p style={{ fontSize: "1rem", marginTop: "1.9rem", textAlign: "center", padding: "0 1.25rem", fontWeight: 400, marginBottom: "0.5rem", width: "80%" }}>Vi ser så mycket fram emot att fira vår stora dag med er! 
                    Nedan hittar ni alla viktiga hålltider för festligheterna samt övrigt som är bra att veta.</p>

                    <div className="divider-wrapper">
                        <div />
                    </div>

                    <div className="programme-div" style={{alignItems: "center", marginTop: "1rem"}}>
                        <h3>TORSDAG</h3>
                    </div>
                    <div className="programme-div">
                        <h4>12.30-13:30 Incheckning</h4>
                        <p>Övernattande gäster välkomnas i Herrgårdsbyggnaden och checkar in i flyglarna och Sjövillan. Då fotografering pågår på området ber vi er att respektera tiden och inte komma före 12.30.</p>
                    </div>

                    <div className="programme-div">
                        <h4>14.00 Vigsel</h4>
                        <p>Vigseln hålls Ramnäs Kyrka där skönsång och en kyss utlovas!</p>
                    </div>
                    <div className="programme-div">
                        <h4>15.30 Brudskål</h4>
                        <p>Efter vigseln är det dags för bubbel, tårta och mingel på Schenströmska Herrgårdens terrass.</p>
                    </div>
                    <div className="programme-div">
                        <h4>17.30 Middag</h4>
                        <p>Till bords! Det bjuds på middag i Stallet på Schenströmska Herrgården.</p>
                    </div>

                    <div className="programme-div">
                        <h4>Party all night</h4>
                        <p>Dags att plocka fram sina bästa moves! När dansgolvet värmts upp ordentligt bjuds på vickning och runt kl. 01 flyttas festligheterna till “the secret location” på området, där det kan dansas hela natten lång.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", marginTop: "2rem"}}>
                        <h3>FREDAG</h3>
                    </div>

                    <div className="programme-div">
                        <h4>09.00-11.00 Brunch</h4>
                        <p>Dagen efter njuter vi av en brunch tillsammans i Herrgårdens matsal, drop-in från kl. 09 för de morgonpigga.</p>
                    </div>

                    <div className="programme-div" style={{marginBottom: "2rem"}}>
                        <h4>11.00 Utcheckning</h4>
                        <p>Senast kl. 11 behöver vi checka ut och lämna rummen men det går bra att hänga kvar på herrgården till kl. 12 innan det är dags att kramas hejdå.</p>
                    </div>

                    <div className="divider-wrapper">
                        <div />
                    </div>

                    <div className="programme-div" style={{alignItems: "center", marginTop: "2rem"}}>
                        <h3 style={{fontWeight: 900}}>BRA ATT VETA</h3>
                    </div>
                    

                    <div className="programme-div" style={{alignItems: "center", textAlign: "center", marginTop: "2rem"}}>
                        <h3>KLÄDKOD</h3>
                        <p>För bröllopsdagen gäller klädkod Kavaj, gärna med en somrig twist. <br/>Mer om klädkoden kan ni läsa <a style={{textDecoration: "underline"}} href="https://metromode.se/mode/kladkoder-pa-brollop-dam-och-herr/">här</a>.</p>
                        <p>Klädkod för fredagens brunch är sommarfin.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", textAlign: "center", marginTop: "2rem"}}>
                        <h3>GÅVOR</h3>
                        <p>Den största gåvan för oss är att få fira vår stora dag tillsammans med er. Önskar ni ändå ge en gåva hade vi uppskattat ett bidrag till vår bröllopsresa. Bidraget tas emot av Toves pappa Göran på Swish-nummer 070-203 82 92.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", textAlign: "center", marginTop: "2rem", marginBottom: "2rem"}}>
                        <h3>BARN</h3>
                        <p>Barn är välkomna under vigseln men därefter önskar vi fira i vuxet sällskap. Spädbarn som ammas är givetvis välkomna med sina föräldrar. Önskar gäster med spädbarn övernatta passar boende i en av herrgårdens flyglar som har både kök och vardagsrum.</p>
                    </div>                                
                
            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2025-05-29T15:00:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}