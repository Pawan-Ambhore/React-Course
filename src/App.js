import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [age , setAge] = useState(0)

  const increase =()=>{
    setAge(age+1)
    console.log(age);
  }


  return (
    <>
    <div className = 'App'>
    <h1 >
     {age}
    </h1>
    <button onClick={increase}>Increse age by one</button>
    </div>
    </>
  );
}



export default App;
