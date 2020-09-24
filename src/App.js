import React from 'react';
import './App.css';
import Hello from './Hello'
function App({name,age}) {
  return (
    <div>
      Hello from App.js updated {name} age ={age}
      <br/>
      <Hello fn={name}> </Hello>
    </div>
  );
}

export default App;
