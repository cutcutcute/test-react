import React, { useState, useEffect } from "react";



export const useResize = (): number => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = (): void =>{
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return ():void => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return width;
}