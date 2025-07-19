import React from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  
  return (
    <div className="App">
      <Button type="submit" autoFocus={true} 
      defaultValue="test" className='test'/>
    </div>
  );
}

export default App;
