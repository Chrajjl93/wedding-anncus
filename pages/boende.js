import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import Rum from '../public/rum.jpg';
import Herrgarden from '../public/herrgarden.jpg';

export default function Boende() {

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />


            {/* Unique page content */}
            <div className="main-content-container">

                <h1>BOENDE</h1>

                <div className="divider-wrapper">
                    <div />
                </div>

                <Image className="hitta-hit-img" style={{paddingLeft: "5.25rem", paddingRight: "5.25rem", paddingTop: "3rem", borderRadius: "0.5rem"}} src={Herrgarden} alt="image" />
                <p style={{margin: 10}}>På Schenströmska finns möjlighet för samtliga gäster att övernatta i de angränsande flyglarna samt Sjövillan. Vi hoppas att ni vill bo kvar och även spendera fredagens brunch med oss och övriga gäster, och dela minnen från dagen innan.</p>
                <p style={{margin: 10}}>Rummen är av hotellstandard och fördelas på enkel- och dubbelrum. Lakan, handdukar, hårfön samt tvål finns på alla rum. Det finns även en flygel med kök och vardagsrum som passar bra för våra allra minsta gäster. Bröllopsgäster står själva för boendekostnaden om 1200 kr per person, inklusive brunch. Ange i OSAn om ni önskar boka boende.</p>
                <p style={{margin: 10, marginBottom: 40}}>Inför bröllopet kommer övernattande gäster att få information via mejl med en guide för användning av digital nyckel via ASSA ABLOY Livvi. Vid incheckningen finns även möjlighet att hämta ut ett fysiskt nyckelkort.</p>
                <Image className="hitta-hit-img" style={{paddingLeft: "5.25rem", paddingRight: "5.25rem", borderRadius: "0.5rem", marginBottom: "2rem"}} src={Rum} alt="image" />                                                

            </div>

            <RibbonContent customStyle={{marginTop: 0}}/>
            <CountdownWrapper targetDate="2025-05-29T15:00:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}