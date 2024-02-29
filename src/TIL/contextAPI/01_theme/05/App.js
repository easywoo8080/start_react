import { createContext, useContext } from 'react';
import './App.css';

// 테마 만들기
const defaultTheme = { border: '5px solid tomato' }
const themeContent = createContext(defaultTheme);

function SubComp1() {
  const theme = useContext(themeContent)
  return (
    <themeContent.Provider value={{border: '5px solid skyblue'}}>
      <div style={theme}>
        <h3>Sub 1</h3>
        <SubComp2></SubComp2>
      </div>
    </themeContent.Provider>
  )
}

function SubComp2() {
  const theme = useContext(themeContent)
  return (
    <div style={theme}>
      <h3>Sub 2</h3>
      <SubComp3></SubComp3>
    </div>
  )
}

function SubComp3() {
  const theme = useContext(themeContent)
  return (
    <div style={theme}>
      <h3>Sub 3</h3>
    </div>
  )
}

function App() {
  const theme = useContext(themeContent)
  return (
    <themeContent.Provider value={{border: '5px solid orange'}}>
      <div className="container" style={theme}>
        <h2>ROOT</h2>
        <SubComp1></SubComp1>
      </div>
      </themeContent.Provider>
  );
}

export default App;
