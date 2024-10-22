import React, { useState } from 'react';
import viteLogo from '/vite.svg'; // Assurez-vous que le chemin est correct
import reactLogo from '../../assets/react.svg'; // Assurez-vous que le chemin est correct
import './index.css';

interface ClickCounterProps {
  title : string;
  message : string;
  messageHover : string;

}

const ClickCounter  = ({ title , message, messageHover }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  const handleSetCount = () => {
    setCount((count) => count + 1)
  }

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseExit = () => {
    setHover(false)
  }




  return (
    <div>
      <h1>{title}</h1>
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
       
        <button 
        onClick={handleSetCount}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseExit}
                   >
          count is {count}
        </button>
        {hover ? <p>{messageHover}</p> : null }
        {count >=10 ? <p>{message}</p> : null}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default ClickCounter;