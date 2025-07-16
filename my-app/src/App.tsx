import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  return (
    <div className="App">
      <Button 
        style={{
          backgroundColor:'red',
          fontSize:'16px',
          color:'purple',
          padding:"1rem 2rem",
          borderRadius: '8px',
        }}
        />
    </div>
  );
}

export default App;
