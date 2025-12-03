import Link from "next/link";
import Image from 'next/image';
import AMEmblem from '@/public/am_emblem.png'
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "@/hooks/responsive";
import { IoMenu } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { useRouter } from "next/router";


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

    const router = useRouter();
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

        <div style={{ zIndex: 101, display: "flex", flexDirection: "row", position: "absolute", overflow: "visible", top: 0, alignItems: "center", justifyContent: "space-around", height: "fit-content", width: "100vw", backgroundColor: "#A9C0D4" }}>

            <div className="mobile-only" style={{ flex: 1, flexDirection: "row" }}>

                <div style={{ flex: 2 }} />

                <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ fontSize: 12, color: "#495869" }}>27 Juni 2026</p>
                    {/* <div className="navbar-logo-wrapper">
                        <Image className="navbar-logo" src={AMEmblem} alt="logo" />
                    </div> */}
                </Link>

                <div style={{ flex: 1 }} />
                <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IoMenuOutline size={30} color="#495869" onMouseDown={onToggleMenu} className="mobile-only" style={{ cursor: 'pointer', margin: "6px 0", opacity: 1, marginRight: 20 }} />
                    {menuOpen &&
                        <MobileMenu onBlur={onBlur} />
                    }
                </div>
            </div>


            <div className="desktop-only" style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#A9C0D4" }}>
                <div style={{ flex: 1 }} />
                <Link href="/osa" className={`navbar-button-link${router.pathname === "/osa" ? " active" : ""}`} style={{marginLeft: -50}}>
                    <p className="navbar-button-text">OSA</p>
                </Link>
                <Link href="/om-brollopet" className={`navbar-button-link${router.pathname === "/om-brollopet" ? " active" : ""}`}>
                    <p className="navbar-button-text">Om bröllopet</p>
                </Link>
                <Link href="/karlek-historia" className={`navbar-button-link${router.pathname === "/karlek-historia" ? " active" : ""}`} style={{marginLeft: 40}}>
                    <p className="navbar-button-text">Vår kärlekshistoria</p>
                </Link>
                <div style={{ flex: 1 }} />
                <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, paddingBottom: 4,gap: 2 }}>
                    <p style={{ fontSize: 12, color: "#495869" }}>27 Juni 2026</p>
                    <div className="navbar-logo-wrapper">
                        <Image className="navbar-logo" src={AMEmblem} alt="logo" />
                    </div>

                </Link>
                <div style={{ flex: 1 }} />
                <Link href="/toastmasters" className={`navbar-button-link${router.pathname === "/toastmasters" ? " active" : ""}`}>
                    <p className="navbar-button-text">Toastmasters</p>
                </Link>
                <Link href="/hitta-hit" className={`navbar-button-link${router.pathname === "/hitta-hit" ? " active" : ""}`}>
                    <p className="navbar-button-text">Hitta hit</p>
                </Link>
                <Link href="/boende" className={`navbar-button-link${router.pathname === "/boende" ? " active" : ""}`}>
                    <p className="navbar-button-text">Boende</p>
                </Link>
                <div style={{ flex: 1 }} />
            </div>

        </div>

    );

}


export default NavigationBar;



