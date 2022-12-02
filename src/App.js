import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  }

  return (
    <>
    <div className = 'App' >
     <button onClick={increment} >Increase</button>
     <button onClick={decrement} >Decrease</button>
     <button onClick={reset} >Set to zero</button>

     <h1>Count: {count}</h1>

    </div>
    </>
  );
}



export default App;
