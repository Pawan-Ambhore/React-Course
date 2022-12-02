import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <TaskOne name="Pawan" role="Learner"/>
    </div>
  );
}

const TaskOne =(props)=>{
  return (
    <div className="App">
       <h1>{props.name}</h1>
       <h1>{props.role}</h1>

    </div>
  )
} 

export default App;
