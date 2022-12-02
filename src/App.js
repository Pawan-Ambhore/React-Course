import logo from './logo.svg';
import './App.css';

function App() {

  const list = ["Pawan", "Rohan", "Samyak"];
  return (
    <div className = 'App'>
       {list.map((name)=>{
        return(
          <h1>{name}</h1>
        )
       })}
    </div>
  );
}

export default App;
