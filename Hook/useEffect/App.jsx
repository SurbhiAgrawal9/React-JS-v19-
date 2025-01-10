import React, { useEffect, useState } from 'react';
import  './App.css';



function App() {
  const [Count, setCount ] = useState(0);

  useEffect(() => {
    document.title = `chat (${Count})`
  })
  


 
 
  return (
    <div>
     <h1>{Count}</h1>
     <button onClick={() => setCount(Count + 1)}>click</button>
     <button onClick={() => setCount
      (
        Count > 0 ? Count - 1 : Count)}>click</button>
</div>
     
  )
}

export default App
