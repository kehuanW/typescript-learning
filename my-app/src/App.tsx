import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  
  return (
    <div className="App">
      <Button countvalue={"0"} countHistory={["1", "2"]} />
    </div>
  );
}

export default App;
