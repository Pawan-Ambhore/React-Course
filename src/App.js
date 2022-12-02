import logo from './logo.svg';
import './App.css';

function App() {

  const isGreen = false;
  return (
    <div className = 'App'>
      <h1 style={{color: isGreen ? "Green" : "red"}}>Check the color</h1>

      {isGreen && <button>This is button</button>}
    </div>
  );
}

export default App;
