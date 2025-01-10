// Home.js or another component
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToContact = () => {
    // Navigate to the "Contact" page
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToContact}>Go to About</button>
    </div>
  );
}

export default Home;
