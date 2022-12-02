import logo from './logo.svg';
import './App.css';

function App() {

  const list = [
    {name: "Pawan" , age:21},
    {name: "Rohan", age:25},
    {name: "Saurabh", age:26},
  ];

  return (
    <div className = 'App'>
    {list.map((user)=>{
      return(
        <User/>
      )
    })}
    </div>
  );
}

const User = (props)=>{
  return(
    <div>{props.name} {props.age}</div>
  )
}

export default App;
