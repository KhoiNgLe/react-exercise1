import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React, { useState } from 'react';

function App() {

  let [name, setName] = useState('Koi')
  const [address, setAddress] = useState('')




  const handleEventClick = (event) => {
    console.log(address)
    setName(address);


  }

  const handleOnChangeEvent = (event) => {
    setAddress(event.target.value)

  }

  //re-render tao lai du lieu 
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <input type="text" value={address} onChange={(event) => handleOnChangeEvent(event)} ></input>
        <button type="button" onClick={(event) => handleEventClick(event)} >Click me</button>
      </header>
    </div>
  );

}
export default App;
