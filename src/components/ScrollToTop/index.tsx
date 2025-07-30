import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        //Scrolls to the top of every page whenever the pathname changes to a different view
        if(!hash){
            document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
        }
    },[pathname, hash])

    return null;
}

export default ScrollToTop;