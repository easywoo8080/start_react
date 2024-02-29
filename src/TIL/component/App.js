
import './App.css';
import { createContext, useContext, useState } from 'react';
import Sub from './component/Sub';
import Button from './component/Button';

const defaultTheme = { border : '5px solid tomato'};
const themeContent = createContext(defaultTheme);


function SubComp1(params) {
  const theme = useContext(themeContent);
  return(
    <themeContent.Provider value={{border : '5px solid skyblue'}}>
      <div style={theme}>
        <h2>Sub1</h2>
        <SubComp2></SubComp2>
      </div>
    </themeContent.Provider>
  )
}

function SubComp2(params) {
  const theme = useContext(themeContent);
  return(
    <div style={theme}>
      <h2>Sub2</h2>
      <SubComp3></SubComp3>
    </div>
  )
}

function SubComp3(params) {
  const theme = useContext(themeContent);
  return(
    <div style={theme}>
      <h2>Sub3</h2>
    </div>
  )
}

function App() {
 const theme = useContext(themeContent);
  const [isDark, setisDart] = useState(true);
  //console.log( 'isDark : ', isDark);
  return (
    <themeContent.Provider value={{border : '5px solid orange'}}>
      <div className='container' style={theme}>
          <h3>title</h3>
          <SubComp1 style={theme}></SubComp1>
        </div>
    </themeContent.Provider>
  );
}

export default App;
