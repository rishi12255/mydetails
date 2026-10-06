import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tech from './Pages/Tech';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans scroll-smooth">
      <Navbar />
      <div className="pt-28"> {/* 7rem = 112px to offset fixed navbar */}
        <Home />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
