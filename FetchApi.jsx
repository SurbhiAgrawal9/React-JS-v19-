import React, { useEffect, useState } from 'react';
import  './App.css';


const Api = "https://jsonplaceholder.typicode.com/posts";


function App() {
  const [apiData, setApiData] = useState([])
  
  function CallApi(){
    fetch(Api)
.then((res) => res.json())
.then((data) => 
  setApiData(data))
.catch((error) => console.log(error))
  }

 useEffect(() => {
 CallApi();
 }, [])

 
  return (
    <div>
 {
  apiData.map((currentData) => {
    return (
      <div>
        <h1>{currentData.id}</h1>
       <li key={currentData.id}> {currentData.title}</li>
      </div>
    )
  } )
}
  
</div>
     
  )
}

export default App
