import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PastWeek from './components/PastWeek';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <PastWeek />
    </div>
  );
}

export default App;
