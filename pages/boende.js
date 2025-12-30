import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import boende_1 from '../public/boende_1.jpg';
import boende_2 from '../public/boende_2.jpg';

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

                <Image className="hitta-hit-img" style={{paddingLeft: "5.25rem", paddingRight: "5.25rem", paddingTop: "3rem", borderRadius: "0.5rem"}} src={boende_1} alt="image" />
                <p style={{margin: 20}}>Vi hoppas att så många som möjligt vill stanna över natten med oss på Noors Slott. Här finns plats för alla, en mumsig frukost som väntar på söndagsmorgonen och – kanske det finaste av allt – en chans att tillsammans få landa, skratta och dela minnen från dagen vi just skapat.</p>
                <p style={{margin: 20}}>Rummen är av hotellstandard och fördelas på enkel- och dubbelrum. Lakan, handdukar, hårfön samt tvål finns på alla rummen.</p>
                <p style={{margin: 10}}>Bokning sker via mail på bokning@noors.se där ni uppger datumet 27 juni och att ni är gäster till vårt bröllop.</p>
                <p style={{margin: 2}}>Pris dubbelrum: 895 kr/person</p>
                <p style={{margin: 2}}>Pris enkelrum: 995 kr/person</p>
                <p style={{margin: 2}}>I priset inkluderas frukostbuffé.</p>
                <p style={{margin: 10, marginBottom: 40}}>Betalning sker vid utchecking.</p>
                <Image className="hitta-hit-img" style={{paddingLeft: "5.25rem", paddingRight: "5.25rem", borderRadius: "0.5rem", marginBottom: "2rem"}} src={boende_2} alt="image" />                                                

            </div>

            <RibbonContent customStyle={{marginTop: 0}}/>
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}