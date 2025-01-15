// uses for increasing performance of Application 

import React, {  useMemo, useState } from 'react';
import  './App.css';




function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100)

   const multy  = useMemo(
    function mul(){
      // console.log("**")
      console.log("print")
      return add *10
    },[add])


 
  return (
    <div>
   
   {multy} <br/>

   <span>{add}</span>  <button onClick={() => setAdd(add + 1)}>Addition</button> 
<h1>{minus}</h1>
   <button onClick={() => setMinus(minus - 1)}>subtraction</button> 
</div>
     
  )
}

export default App
