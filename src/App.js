import './App.css';
import { useState } from "react"

function App() {

  const [ctime, setCTime] = useState(getTime());

  function getTime() {
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    return time;
  }

  setInterval(() => {
    setCTime(getTime());
  }, 1000)

  return (
    <div className="App">
      <h1>Time</h1>
      <p>{ctime}</p>
    </div>
  );
}

export default App;
