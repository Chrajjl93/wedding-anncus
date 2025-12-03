import Image from 'next/image';

import Hero from '../public/am-wedding-hero.png';
import NavigationBar from '../components/NavigationBar';

const TopContent = (props) => {
    return (
        // <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow: "hidden" }}>
        //     <NavigationBar />
        //     <div style={{ height: "100%", width: "100%", zIndex: 99, backgroundColor: "#000000", opacity: 0.3 }} />
        //     <Image
        //         src={Hero}
        //         alt="hero.png"
        //         layout="fill"
        //         objectFit="cover"
        //     />
        // </div>


        <div className="top-content-container">
            <NavigationBar />
            <div className="hero-overlay-filter" />
            <Image
                className="hero-image"
                src={Hero}
                alt="hero.png"
            />
        </div>
    );
}

export default TopContent;