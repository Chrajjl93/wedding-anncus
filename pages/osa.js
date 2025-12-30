import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import TopContent from '../components/TopContent';
import RibbonContent from '../components/RibbonContent';
import CountdownWrapper from '../components/CountdownWrapper';
import { useSheetWriter } from '@/hooks/sheetwriter.js'


export default function OSA() {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sheetWriter = useSheetWriter();

    // handle checkbox group 1 - state shifting
    const [checkboxGroupOne, setCheckboxGroupOne] = useState({ "ind_1": false, "ind_2": false, "ind_3": false });

    // handle checkbox group 2 - state shifting
    const [checkboxGroupTwo, setCheckboxGroupTwo] = useState({ "ind_1": false, "ind_2": false });


    const [submitSuccess, setSubmitSuccess] = useState(null);
    const [loading, setLoading] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        let array = e.target;

        let firstname = array[0].value;
        let email = array[1].value;
        let surname = array[2].value;
        let mobile = array[3].value;
        let additionalPeople = array[4].value;
        let allergy = array[5].value;
        let nonAlcohol = array[6].value;
        // checkbox group 1
        let checkedAttendAndHotel = array[7].checked;
        let checkedAttendNoHotel = array[8].checked;
        let checkedCannotAttend = array[9].checked;
        // checkbox group 2
        // let checkedSingleRoom = array[10].checked;
        // let checkedDoubleRoom = array[11].checked;

        let controlText = array[10].value;

        // validate required text fields
        if (!firstname || !email || !surname || !mobile) {
            setError(true);
            setErrorMessage("Fyll i kontaktuppgifterna!");
            return;
        }

        if (!checkedAttendAndHotel && !checkedAttendNoHotel && !checkedCannotAttend) {
            setError(true);
            setErrorMessage("Kryssa i alternativ i rutorna!");
            return;
        }

        if ((controlText && controlText.toLowerCase() !== 'ja') || !controlText) {
            setError(true);
            setErrorMessage("Fel kontrolltext!");
            return;
        }

        else {
            setError(false);
            setErrorMessage("");

            sheetWriter.onSubmit({
                "firstname": firstname,
                "surname": surname,
                "email": email,
                "mobile": mobile,
                "additionalPeople": additionalPeople,
                "allergy": allergy,
                "nonAlcohol": nonAlcohol,
                "checkedAttendAndHotel": checkedAttendAndHotel,
                "checkedAttendNoHotel": checkedAttendNoHotel,
                "checkedCannotAttend": checkedCannotAttend,
                // "checkedSingleRoom": checkedSingleRoom,
                // "checkedDoubleRoom": checkedDoubleRoom,
                "controlText": controlText
            });
            setLoading(true);

            // console.log("sheetWriter.success", sheetWriter.success);


            // GoogleSheetWriter({"data1": "123", "data2": "456"})
        }

    }

    useEffect(() => {        
        setSubmitSuccess(sheetWriter.success);
        if (sheetWriter.success != null) {
            setLoading(null);
        }
    }, [sheetWriter.success])

    const handleCheckboxGroupOne = (id) => {
        if (id === 1) {
            setCheckboxGroupOne({ "ind_1": true, "ind_2": false, "ind_3": false })
        }
        if (id === 2) {
            setCheckboxGroupOne({ "ind_1": false, "ind_2": true, "ind_3": false })
        }
        if (id === 3) {
            setCheckboxGroupOne({ "ind_1": false, "ind_2": false, "ind_3": true })
        }
    }

    // const handleCheckboxGroupTwo = (id) => {
    //     if (id === 1) {
    //         setCheckboxGroupTwo({ "ind_1": true, "ind_2": false })
    //     }
    //     if (id === 2) {
    //         setCheckboxGroupTwo({ "ind_1": false, "ind_2": true })
    //     }
    // }

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "fit-content", overflow: "auto", width: "100vw", padding: 0, margin: 0 }}>
            <TopContent />

            {/* Unique page content */}
            <div className="main-content-container">
                <h1>OSA</h1>
                <h2>Vi ser fram emot att fira med dig!</h2>
                <p>Vänligen OSA nedan senast den 30 april 2026.</p>
                <form className="osa-form" onSubmit={handleSubmit}>

                    <div style={{ display: "flex", flexDirection: "row", gap: 10, width: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <label className="text-input-label">Förnamn</label>
                                <input className="text-input" type="text" placeholder="obligatorisk"
                                // required={true}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <label className="text-input-label">E-post</label>
                                <input className="text-input" type="email" placeholder="obligatorisk"
                                // required={true}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <label className="text-input-label">Efternamn</label>
                                <input className="text-input" type="text" placeholder="obligatorisk"
                                // required={true}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <label className="text-input-label">Mobilnummer</label>
                                <input className="text-input" type="text" placeholder="obligatorisk"
                                // required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="osa-sub-center">

                        <p style={{fontSize: "0.8rem", textAlign: "center", padding: "20px 40px"}}>{`Sista datum för OSA är 30 april 2026 (men helst samma dag som du får inbjudan om du frågar Anna)`}</p>

                        <div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center", marginTop: 20, gap: 10 }}>
                            <label className="text-input-label-2">OSAr du för någon mer än dig själv? (förnamn & efternamn)</label>
                            <input className="text-input" style={{ paddingTop: 0 }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center", marginTop: 20, gap: 10 }}>
                            <label className="text-input-label-2">Fyll i eventuell specialkost eller allergi (vilken person gäller det?)</label>                            
                            <input className="text-input" style={{ paddingTop: 0 }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center", marginTop: 20, gap: 10 }}>
                            <label className="text-input-label-2">Vill någon du OSAr för ha alkoholfritt? (vilken person gäller det?)</label>                            
                            <input className="text-input" style={{ paddingTop: 0 }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", width: "60%", marginTop: 20, gap: 10 }}>
                            <h3 style={{ display: "flex", alignSelf: "center", marginBottom: 10 }}>OSA & BOENDE</h3>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <label className="checkbox-input">
                                    <input className="checkbox-input" type="checkbox" onChange={() => handleCheckboxGroupOne(1)} checked={checkboxGroupOne.ind_1} />
                                    <span className="checkmark"></span>
                                    <p>
                                        Jag / Vi kommer och övernattar!
                                        <span style={{ display: "block", paddingTop: 12 }}>
                                            Bokning sker via mail på bokning@noors.se där ni uppger datumet 27 juni och att ni är gäster till vårt bröllop.
                                        </span>
                                        <span style={{ display: "block", paddingTop: 12 }}>Pris dubbelrum: 895 kr/person</span>
                                        <span style={{ display: "block", paddingTop: 4 }}>Pris enkelrum: 995 kr/person</span>
                                        <span style={{ display: "block", paddingTop: 4 }}>I priset inkluderas frukostbuffé.</span>
                                    </p>
                                </label>

                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <label className="checkbox-input">
                                    <input className="checkbox-input" type="checkbox" onChange={() => handleCheckboxGroupOne(2)} checked={checkboxGroupOne.ind_2} />
                                    <span className="checkmark"></span>
                                    Jag / Vi kommer, men sover inte över.
                                </label>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <label className="checkbox-input">
                                    <input className="checkbox-input" type="checkbox" onChange={() => handleCheckboxGroupOne(3)} checked={checkboxGroupOne.ind_3} />
                                    <span className="checkmark"></span>
                                    Jag kan inte komma tyvärr... 
                                </label>
                            </div>
                            
                            <div className="osa-confirm-container">
                                <label className="text-input-label" style={{ margin: 0, fontSize: "0.75rem", color: "#3F4854" }}>Bekräfta svaren genom att skriva 'ja'</label>
                                <input className="text-input" style={{ paddingTop: 0 }} type="text" placeholder="ja" />
                            </div>
                            {error && (
                                <p>{`Felmeddelande: ${errorMessage}`}</p>
                            )}
                            <button
                                className="osa-form-button"
                                type="submit"
                            >
                                {!loading && (
                                    "Skicka"
                                )}
                                {loading === true && (
                                    <div className="spinnerContainer">
                                        <div className="spinner">
                                        </div>
                                    </div>
                                )}
                            </button>

                        </div>
                        {submitSuccess == true && (
                            <p style={{ display: "flex", textAlign: "center", paddingTop: 10, fontSize: 12, color: "green" }}>Tack för ditt svar!</p>
                        )}
                        {submitSuccess == false && (
                            <p style={{ display: "flex", textAlign: "center", paddingTop: 10, fontSize: 12, color: "red" }}>Någonting blev fel, försök igen eller hör av dig till anna.s.saibel@gmail.com</p>
                        )}
                        {/* <p style={{ fontSize: 12, margin: "40px 0" }}>Sista datum för OSA 31 Mars 2025</p> */}
                    </div>

                    {/* <div style={{ display: "flex", alignSelf: "center", alignItems: "center", position: "relative", height: 2, width: 460, backgroundColor: "#CBC5B9", margin: "45px 15px" }} /> */}
                    <div className="divider-2" style={{ margin: "45px 15px" }} />


                </form >
            </div >

            <RibbonContent />
            <CountdownWrapper targetDate="2026-06-27T16:30:00" /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}

            {/* <Footer /> */}
        </div >
    );

}
