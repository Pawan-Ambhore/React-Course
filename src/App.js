import logo from './logo.svg';
import './App.css';

function App() {

  const list = [
    {name: "Pawan" , capable:true},
    {name: "Rohan", capable:true},
    {name: "Saurabh", capable:false},
    {name: "Samyak", capable:false},

  ];

  return (
    <div className = 'App'>
    {list.map((user, key)=>{
      return(
        <div>
          {user.capable ? user.name : null}
        </div>
      )
    })}
    </div>
  );
}



export default App;
