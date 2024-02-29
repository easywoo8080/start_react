import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Button from "./Button";


function SubComp1() {
    return(
        <div className="sub">
          <h2>left1 : { useContext(ThemeContext).isNum}</h2>
          <SubComp2></SubComp2>
        </div>
    )
  }
  
  function SubComp2() {
    return(
      <div className="sub">
        <h2>left2 : { useContext(ThemeContext).isNum} </h2>
        <SubComp3></SubComp3>
      </div>
    )
  }
  
  function SubComp3() {
    return(
      <div className="sub">
        <h2>left3 : { useContext(ThemeContext).isNum} </h2>
      </div>
    )
  }
  
  function SubButton1() {
    return(
        <div className="sub">
          <h2>right : { useContext(ThemeContext).isNum}</h2>
          <SubButton2></SubButton2>
        </div>
    )
  }
  
  function SubButton2() {
    return(
      <div className="sub">
        <h2>right2 : { useContext(ThemeContext).isNum}</h2>
        <SubButton3></SubButton3>
      </div>
    )
  }
  
  function SubButton3() {
    return(
      <div className="sub">right3 : { useContext(ThemeContext).isNum}
      <Button></Button>
      </div>
    )
  }
  

const Context = (props) => {
    const data = useContext(ThemeContext);
    const boolen = data.isDark ? data.isDark : false;
    return(
        <div className={boolen ? 'context' : 'context dark_mode'} >
            <SubComp1 num = {data.num}></SubComp1>
            <SubButton1></SubButton1>
        </div>
    )
};

export default Context;