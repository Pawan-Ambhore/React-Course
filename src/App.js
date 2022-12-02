import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  // const [show , setShow] = useState(true);
  const [pageColor, setPageColor] = useState("red");

  return (
    <>
    <div className = 'App' style={{backgroundColor: pageColor }}>
       <button onClick={()=>{
          // setShow(!show)
          setPageColor(pageColor === "red" ? "blue" : "red")
          
       }}>
        Click here to Change the color
       </button>
      {/* {show && <h1>Hello world!</h1>} */}
    </div>
    </>
  );
}



export default App;
