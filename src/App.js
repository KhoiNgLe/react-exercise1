import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function App() {

  let [name, setName] = useState('Koi')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'cooking', type: 'koi' },
    { id: 'todo2', title: 'chilling', type: 'koi' },
    { id: 'todo3', title: 'choi game', type: 'hoidanit' },
    { id: 'todo4', title: 'eading books', type: 'hoidanit' }
  ])

  useEffect(() => {
    console.log('run use effect')
  }, [address])

  useEffect(() => {
    console.log('run use effect todos')
  }, [todos])

  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input")
      return
    }

    let newTodo = { id: Math.floor((Math.random() * 1000) + 1), title: address, type: 'eric' }

    setTodos([...todos, newTodo])
    setAddress('')

  }

  const handleOnChangeEvent = (event) => {
    setAddress(event.target.value)

  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  //re-render tao lai du lieu 
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <Todo
          todos={todos}
          title={'All todos'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'koi')}
          title={`Koi's todos`}
          deleteDataTodo={deleteDataTodo}
        />






        <input type="text" value={address} onChange={(event) => handleOnChangeEvent(event)} ></input>
        <button type="button" onClick={(event) => handleEventClick(event)} >Click me</button>
      </header >
    </div >
  );

}
export default App;
