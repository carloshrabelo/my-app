import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MODE = import.meta.env.MODE;
const KEY = import.meta.env.VITE_KEY;
const NEW_KEY1 = import.meta.env.VITE_NEW_KEY1;
const NEW_KEY2 = import.meta.env.VITE_NEW_KEY2;
const NEW_KEY3 = import.meta.env.VITE_NEW_KEY3;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          <li>MODE={MODE}</li>
          <li>KEY={KEY}</li>
          <li>NEW_KEY1={NEW_KEY1}</li>
          <li>NEW_KEY2={NEW_KEY2}</li>
          <li>NEW_KEY3={NEW_KEY3}</li>
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
