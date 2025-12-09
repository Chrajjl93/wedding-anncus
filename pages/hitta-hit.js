import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import hitta_hit_1 from '../public/hitta_hit_1.png';
import hitta_hit_2 from '../public/hitta_hit_2.png';

export default function HittaHit() {

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container">

                <h1>HITTA HIT</h1>

                <div className="divider-wrapper">
                    <div />
                </div>

                <div className="hitta-hit-div">
                    <div>
                        <Image className="hitta-hit-img" src={hitta_hit_1} alt="image" />
                    </div>
                    <p>Noors Slott ligger intill E4an strax söder om Uppsala och ca 50 min bil från Stockholm. Prata gärna ihop er med andra gäster om att samåka!</p>
                </div>

                <div className="hitta-hit-div" style={{ marginTop: 20, alignItems: "center" }}>
                    <p style={{ textAlign: "center" }}>Smidigast tar man sig till Noors via bil och viker då av från E4an vid Trafikplats Brunnby (184) skyltat mot Knivsta. Efter en kortare resa söderut (ca 5km) hittas infarten till slottet.</p>
                    <div>
                        <Image className="hitta-hit-img" style={{borderRadius: 4}} src={hitta_hit_2} alt="image" />
                    </div>
                </div>

                <p className="hitta-hit-p" style={{marginTop: "4rem"}}>Det går också att ta sig till slottet med kollektivtrafik (om än inte lika smidigt). Resan tar då ca 1,5h från T-centralen via pendeln mot Uppsala. Avstigning sker i Knivsta, följt av 3 stopp med buss 102 och slutligen en 20 min promenad.</p>

                <div style={{ display: "flex", flexDirection: "column", color: "#3C3C3C", gap: 10, alignItems: "center", textAlign: "center", marginBottom: 40, marginTop: "2.5rem" }}>
                    <p style={{ fontSize: 14, textDecoration: "underline" }}>Adress:</p>
                    <p className="hitta-hit-p" style={{marginTop: 5}}>Ledingevägen 93, 741 44, Knivsta/Arlanda</p>
                </div>

            </div>

            <RibbonContent customStyle={{ marginTop: 0 }} />
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}