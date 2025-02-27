import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'></div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <h1 className='text-4xl font-bold underline'> Hello world! </h1>
    </>
  );
}

export default App;
