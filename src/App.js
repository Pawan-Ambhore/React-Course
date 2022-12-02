import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [inputValue , setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  }

  return (
    <>
    <div className = 'App'>
       <input type="text" onChange={handleInputChange}/>
       <h1>{inputValue}</h1>
    </div>
    </>
  );
}



export default App;
