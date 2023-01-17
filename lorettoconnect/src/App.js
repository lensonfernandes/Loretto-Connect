import React from 'react'
import Carousel from './components/Carousel';
import Happening from './components/Happening';
import Hero from './components/Hero';
import Memories from './components/Memories';
import Navbar from './components/Navbar';
import PastWeek from './components/PastWeek';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <PastWeek />
        <Happening />
        <Memories/>
        <Carousel />
    </div>
  );
}

export default App;
