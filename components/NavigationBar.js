import Link from "next/link";
import Image from 'next/image';
import DarkLogo from '../public/WeddingLogoDark_fixed.png';
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "@/hooks/responsive";
import { IoMenu } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";




const MobileMenu = ({ onBlur }) => {

    // const router = useRouter();

    const menuRef = useRef();
    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.focus();
        }
    }, [menuRef.current])


    return (
        <div ref={menuRef} className="mobile-menu" tabIndex={-1} onBlur={onBlur}>

            <Link href="/osa" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">OSA</p>
            </Link>
            <Link href="/om-brollopet" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">Om bröllopet</p>
            </Link>
            <Link href="/karlek-historia" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">Vår kärlekshistoria</p>
            </Link>
            <Link href="/toastmasters" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">Toastmasters</p>
            </Link>
            <Link href="/hitta-hit" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">Hitta hit</p>
            </Link>
            <Link href="/boende" className="navbar-mobile-link">
                <p className="navbar-mobile-button-text">Boende</p>
            </Link>


        </div>
    )
}


const NavigationBar = (props) => {

    const dim = useDimensions();
    const isMobile = (dim.isReady && dim.width < 800) ? true : false;
    const isMidSize = (dim.isReady && 1200 > dim.width && dim.width > 800) ? true : false;


    const [menuOpen, setMenuOpen] = useState(false);
    // const router = useRouter();

    const onToggleMenu = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    const onBlur = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setMenuOpen(false);
        }
    }

    return (

        <div style={{ zIndex: 101, display: "flex", flexDirection: "row", position: "absolute", overflow: "visible", top: 0, alignItems: "center", justifyContent: "space-around", height: "fit-content", width: "100vw" }}>

            <div className="mobile-only" style={{ flex: 1, flexDirection: "row" }}>

                <div style={{ flex: 2 }} />

                <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 20 }}>
                    <p style={{ fontSize: 12, color: "#363636" }}>29 Maj 2025</p>
                    <div className="navbar-logo-wrapper">
                        <Image className="navbar-logo" src={DarkLogo} alt="logo" />
                    </div>
                    <div className="firework" id="firework1">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                    <div className="firework" id="firework2">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                    <div className="firework" id="firework3">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                </Link>

                <div style={{ flex: 1 }} />
                <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IoMenuOutline size={40} color="#363636" onMouseDown={onToggleMenu} className="mobile-only" style={{ cursor: 'pointer', opacity: 1, marginRight: 20 }} />
                    {menuOpen &&
                        <MobileMenu onBlur={onBlur} />
                    }
                </div>
            </div>


            <div className="desktop-only" style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" }}>
                <div style={{ flex: 1 }} />
                <Link href="/osa" className="navbar-button-link" style={{marginLeft: -50}}>
                    <p className="navbar-button-text">OSA</p>
                </Link>
                <Link href="/om-brollopet" className="navbar-button-link" style={{paddingRight: 50}}>
                    <p className="navbar-button-text">Om bröllopet</p>
                </Link>
                <Link href="/karlek-historia" className="navbar-button-link">
                    <p className="navbar-button-text">Vår kärlekshistoria</p>
                </Link>
                <div style={{ flex: 1 }} />
                <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 20 }}>
                    <p style={{ fontSize: 12, color: "#363636" }}>29 Maj 2025</p>
                    <div className="navbar-logo-wrapper">
                        <Image className="navbar-logo" src={DarkLogo} alt="logo" />
                    </div>
                    <div className="firework" id="firework1">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                    <div className="firework" id="firework2">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                    <div className="firework" id="firework3">
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                        <div className="explosion"></div>
                    </div>
                </Link>
                <div style={{ flex: 1 }} />
                <Link href="/toastmasters" className="navbar-button-link">
                    <p className="navbar-button-text">Toastmasters</p>
                </Link>
                <Link href="/hitta-hit" className="navbar-button-link">
                    <p className="navbar-button-text">Hitta hit</p>
                </Link>
                <Link href="/boende" className="navbar-button-link">
                    <p className="navbar-button-text">Boende</p>
                </Link>
                <div style={{ flex: 1 }} />
            </div>

        </div>

    );

}


export default NavigationBar;




