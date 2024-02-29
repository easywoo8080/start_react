import '../App.css';
import { useReducer, useState } from 'react';
import Sub from './component/Sub';

import { ThemeContext } from './context/themeContext';
import { createStore } from 'redux';



function App() {
  const [isDark, setisDart] = useState(true);
  const [isNum, setisNum ] = useState(0);

  function reducer(currentState, action ) {

    if( currentState ){}
    const newState = {...currentState};
    
  
    return newState;
    
  }
  const store = createStore(reducer);
  return (
    <ThemeContext.Provider value={{isDark, setisDart, isNum, setisNum}}>
      <div className='container'>
        <Sub></Sub>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
