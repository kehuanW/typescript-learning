import React, {useState} from 'react';
import './App.css';
import Button from '@components/Button';

function App() {
  const [count, setCount] = useState(0)
  console.log("count=", count)
  
  return (
    <div className="App">
      <Button setCount={setCount}/>
    </div>
  );
}

export default App;
