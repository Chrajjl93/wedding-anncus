import CountdownTimer from './CountdownTimer';

const CountdownWrapper = (props) => {
        
    return (
        <div style={{ flex: 1, gap: 10, display: "flex", flexDirection: "column", height: "fit-content", padding: "40px 0", width: "100vw", backgroundColor: "#8AAED1", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: "1.125rem", letterSpacing: 1, color: "#363636" }}>Nedräkning till bröllopet!</p>
            <CountdownTimer targetDate={props.targetDate} /> {/* (ant. 14.00 + 1 || 14.00 + 2) Behöver göra Svensk tid + 1h (vinter) + 2h sommartid för att beräkningarna ska funka*/}
        </div>
    );
}

export default CountdownWrapper;