import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathName } = useLocation();

    useEffect( () => {
        window.scrollTo(0,0);
    }, [pathName]); //llama al window.scrollTo(0,0) cuando cambie el pathName

    return null;
}