import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Stats from './components/Stats';
import Tips from './components/Tips';
import Quiz from './components/Quiz';
import Associations from './components/Associations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <main>
        <Hero />
        <Categories />
        <Stats />
        <Quiz />
        <Tips />
        <Associations />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;