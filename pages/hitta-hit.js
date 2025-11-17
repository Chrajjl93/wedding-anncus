import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import Image from 'next/image';
import Schenstromska from '../public/schenstromska.png';
import RamnasKyrka from '../public/ramnas_kyrka.jpg';

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
                        <Image className="hitta-hit-img" src={Schenstromska} alt="image" />
                    </div>
                    <p>Platsen för bröllopet, Ramnäs, är en gammal bruksort en bit utanför brudparets hemstad Västerås.</p>
                </div>

                <div className="hitta-hit-div" style={{ marginTop: 20, alignItems: "center" }}>
                    <p style={{ textAlign: "center" }}>Bästa sättet att ta sig till Ramnäs kyrka och Schenströmska Herrgården är med bil, och det är bara några minuters bilfärd mellan platserna. Gratis parkeringsplatser finns precis intill kyrkan samt på Schenströmska Herrgården. På Schenströmska finns även tillgång till elbilsladdare. Prata gärna ihop er med andra gäster om att samåka!</p>
                    <div>
                        <Image className="hitta-hit-img" style={{borderRadius: 4}} src={RamnasKyrka} alt="image" />
                    </div>
                </div>

                <p className="hitta-hit-p" style={{marginTop: "4rem"}}>Det går även bra att ta sig till Västerås Centralstation eller Ramnäs Resecentrum med tåg och buss, och därifrån ta taxi sista biten.</p>

                <div style={{ display: "flex", flexDirection: "column", color: "#3C3C3C", gap: 10, alignItems: "center", textAlign: "center", marginBottom: 40, marginTop: "2.5rem" }}>
                    <p style={{ fontSize: 14, textDecoration: "underline" }}>Adresser:</p>
                    <p className="hitta-hit-p" style={{marginTop: 5}}>Ramnäs Kyrka, Bergslagsvägen 9, 735 60 Ramnäs</p>
                    <p className="hitta-hit-p" style={{marginTop: 5}}>Schenströmska Herrgården, Schenströms Väg 1, 730 60 Ramnäs</p>
                </div>

            </div>

            <RibbonContent customStyle={{ marginTop: 0 }} />
            <CountdownWrapper targetDate="2025-05-29T15:00:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );

}