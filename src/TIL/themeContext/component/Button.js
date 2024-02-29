import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { useSelector, useDispatch } from 'react-redux';

const Button = (props) => {
    // const data = useContext(ThemeContext);
    // console.log('const Button = (props) => { : ',  data);
    // const toggleMode = () => {
    //     data.setisDart(!data.isDark);
    //     data.setisNum(data.isNum + 1);
    // }

    function f(state) {
        console.log(state);
        return state.number;
    }

    const number = useSelector(f);

    return(
        // <div className="btn" onClick={toggleMode}> text
            
        // </div>
         <div className="btn"> text
            
         </div>
    )
};

export default Button;