import { useState, useEffect } from "react";


export const useDimensions = () => {

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [isReady, setReady] = useState(false);

    let scale = width <= 800 ? 0.8 : 1; 

    const isClient = typeof window !== undefined;
    

    useEffect(() => {
        if (isClient){
            const onResize = () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
    
            }
            window.addEventListener('resize', onResize);

            onResize();
            setReady(true);

            return () => window.removeEventListener('resize', onResize)
        }

    }, [isClient])

    
    return {
        width,
        height,
        scale,
        isReady        
    }
}