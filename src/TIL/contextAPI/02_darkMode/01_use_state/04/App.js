import './App.css';
import Button from './Button';
import Sub from './Sub';
import React, { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true)
  return (
      <div className="container">
        <Sub isDark={isDark}></Sub>
        <Button></Button>
      </div>
  );
}

export default App;
