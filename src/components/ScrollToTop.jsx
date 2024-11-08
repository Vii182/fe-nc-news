import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// <<<<< SCROLL COMPONENT (APP) - SCROLLS TO TOP OF THE NEW PAGE WHEN USING LINKS >>>>> ------
const ScrollToTop = () => {
    const location = useLocation();

    // <<<<< SCROLL POSITION >>>>> ------
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

export default ScrollToTop;