import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  const handleClick = (num:number) => {console.log(`num=${num}`)}

  return (
    <div className="App">
      <Button handleClick={handleClick}/>
    </div>
  );
}

export default App;
