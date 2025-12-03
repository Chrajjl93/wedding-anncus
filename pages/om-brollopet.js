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
                    <p style={{ fontSize: "1rem", marginTop: "1.9rem", textAlign: "center", padding: "0 1.25rem", fontWeight: 400, marginBottom: "0.5rem", width: "80%" }}>Vi ser så mycket fram emot att fira vår stora dag med er! Nedan hittar ni alla viktiga hålltider för festligheterna samt övrigt som är bra att veta.</p>

                    <div className="divider-wrapper">
                        <div />
                    </div>

                    <div className="programme-div" style={{alignItems: "center", marginTop: "1rem"}}>
                        <h3>LÖRDAG</h3>
                    </div>
                    <div className="programme-div">
                        <h4>14.00-15:00 Incheckning</h4>
                        <p>Övernattande gäster checkar in i flyglarna och välkomnas på slottets framsida. Då fotografering pågår på området ber vi er att respektera tiden och inte komma före 14.00 samt hålla er till området för incheckningen.</p>
                    </div>

                    <div className="programme-div">
                        <h4>15.30 Vigsel</h4>
                        <p>Vigseln hålls i den grönskande parken på slottets baksida. Där utlovas löften, skönsång och en kyss! Om himlen får för sig att vattna trädgården flyttar vi vigseln till sommarloungen.</p>
                    </div>
                    <div className="programme-div">
                        <h4>16.00 Mingel och brudskål</h4>
                        <p>Efter vigseln är det dags för bubbel, tårta och mingel på slottets baksida. Om vädergudarna inte samarbetar flyttar vi även brudskålen till sommarloungen.</p>
                    </div>
                    <div className="programme-div">
                        <h4>17.30 Middag</h4>
                        <p>Till bords! Det bjuds på middag i Kungssalen en trappa upp i slottet.</p>
                    </div>

                    <div className="programme-div">
                        <h4>Let's partyyyy!</h4>
                        <p>Sällskapet flyttar sig till sommarloungen, där dansgolvet inleds med en första dans av brudparet. Därefter tar discot vid och baren öppnar för alla törstiga. Var inte rädd att be någon med schyssta moves om en gratis danslektion! Vickning ca. 01.00. Dansgolvet stänger kl 02.00.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", marginTop: "2rem"}}>
                        <h3>SÖNDAG</h3>
                    </div>

                    <div className="programme-div">
                        <h4>09.00-10.30 Frukostbuffé</h4>
                        <p>Dagen efter njuter vi av en frukostbuffé tillsammans inne på slottet.</p>
                    </div>

                    <div className="programme-div" style={{marginBottom: "2rem"}}>
                        <h4>11.30 Utcheckning</h4>
                        <p>Senast kl. 11.30 är det dags för ett sista hej-då-kramkalas innan vi ger oss av.</p>
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
                        <p>Klädkod för söndagens frukost är “sommarfin”.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", textAlign: "center", marginTop: "2rem"}}>
                        <h3>GÅVOR</h3>
                        <p>Den största gåvan för oss är att få fira vår stora dag tillsammans med er. Önskar ni ändå ge en gåva hade vi uppskattat ett bidrag till vår bröllopsresa. Bidraget tas emot av Annas pappa Sergej på Swish-nummer 070-0877930.</p>
                    </div>

                    <div className="programme-div" style={{alignItems: "center", textAlign: "center", marginTop: "2rem", marginBottom: "2rem"}}>
                        <h3>BARN</h3>
                        <p>Vi firar gärna vår stora dag med våra vuxna vänner. Spädbarn som ammas är givetvis välkomna med sina föräldrar.</p>
                    </div>                                            
            </div>

            <RibbonContent />
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}