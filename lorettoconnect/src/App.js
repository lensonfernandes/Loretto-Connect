import React from 'react'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
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
        <Footer />
    </div>
  );
}

export default App;
