import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  const icon = <div>Hello there!</div>
  
  return (
    <div className="App">
      <Button children={icon}/>
    </div>
  );
}

export default App;
