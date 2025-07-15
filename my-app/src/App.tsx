import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  return (
    <div className="App">
      <Button 
        backgroundColor='red'
        fontSize='16px'
        textColor='purple'
        padding={[10, 20, 10, 20]}
        />
    </div>
  );
}

export default App;
