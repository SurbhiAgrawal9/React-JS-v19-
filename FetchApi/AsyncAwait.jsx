import React, { useEffect, useState } from 'react';
import './App.css';

const Api = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [apiData, setApiData] = useState([]);

  async function CallApi() {
     try{
      const response = await fetch(Api);
      const data = await response.json();
      setApiData(data);
     } catch (error) {
          console.log(error)
     }

  }

  useEffect(() => {
    CallApi(); // Component mount hone pe pehli baar API call karna better hai

    const interval = setInterval(() => {
      CallApi();
    }, 5000); // 5 second ka interval rakha

    // return () => clearInterval(interval); // Cleanup function to avoid memory leak
  }, []);

  return (
    <div>
      {apiData.map((currentData) => (
        <div key={currentData.id}>
          <h1>{currentData.id}</h1>
          <li>{currentData.title}</li>
        </div>
      ))}
    </div>
  );
}

export default App;
