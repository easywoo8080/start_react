import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Footer = (props) => {
    const data = useContext(ThemeContext);
    const boolen = data.isDark;
    return(
        <div className={boolen ? 'footer' : 'footer dark_mode'}  >
            Footer
        </div>
    )
};

export default Footer;