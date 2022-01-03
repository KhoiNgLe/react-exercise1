import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

function App() {
  let name = "Koi";

  const handleEventClick = (event) => {
    console.log("Click Me", event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <input type="text" value="Koi" onClick={(event) => handleEventClick(event)}></input>
        <button type="button" onClick={(event) => handleEventClick(event)} >Click me</button>
      </header>
    </div>
  );
}

export default App;
