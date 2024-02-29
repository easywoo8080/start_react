import React from "react";
import { useSelector } from "react-redux";
const Header = (props) => {
    
    function f(state) {
        console.log(state);
        return state.number;
    }
    
    const number = useSelector(f);
    return(
        <div >
            Header : {number}
        </div>
    )
};

export default Header;