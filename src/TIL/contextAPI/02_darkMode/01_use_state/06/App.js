import './App.css';
import Button from './Button';
import Sub from './Sub';
import React, { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
      <div className="container">
        <Sub isDark={isDark}></Sub>
        <Button isDark={isDark} setIsDark={setIsDark}></Button>
      </div>
  );
}

export default App;
