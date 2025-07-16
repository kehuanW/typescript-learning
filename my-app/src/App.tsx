import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  return (
    <div className="App">
      <Button 
        borderRadius={{
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10
        }}
        />
    </div>
  );
}

export default App;
