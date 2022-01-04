import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React, { useState } from 'react';
import Todo from './Todo';

function App() {

  let [name, setName] = useState('Koi')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching Hoi Dan IT' },
    { id: 'todo2', title: 'xem phim' },
    { id: 'todo3', title: 'choi game' }
  ])




  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input")
      return
    }

    let newTodo = { id: 'abc', title: address }

    setTodos([...todos, newTodo])
    setAddress('')

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
        <Todo todos={todos} />
        <input type="text" value={address} onChange={(event) => handleOnChangeEvent(event)} ></input>
        <button type="button" onClick={(event) => handleEventClick(event)} >Click me</button>
      </header >
    </div >
  );

}
export default App;
