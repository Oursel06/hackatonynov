import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

// Fonction pour télécharger le PDF
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/doc/gaspillage_alimentaire.pdf";
  link.download = "guide_gaspillage_alimentaire.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Smooth scroll vers "associations" après le téléchargement
  setTimeout(() => {
    const section = document.getElementById("associations");
    section?.scrollIntoView({ behavior: "smooth" });
  }, 200);
};

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-emerald-800">ÉcoNourrir</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#accueil" className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium">Accueil</a>
          <a href="#statistiques" className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium">Statistiques</a>
          <a href="#quiz" className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium">Quiz</a>
          <a href="#conseils" className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium">Conseils</a>
        </div>
        
        <div className="hidden md:block">
          <button
          onClick={handleDownload}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Agir Maintenant
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-emerald-800"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-4 flex flex-col md:hidden">
          <button 
            className="absolute top-4 right-4 text-emerald-800"
            onClick={toggleMobileMenu}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-6 items-center">
            <a href="#accueil" className="text-emerald-800 text-lg font-medium" onClick={toggleMobileMenu}>Accueil</a>
            <a href="#statistiques" className="text-emerald-800 text-lg font-medium" onClick={toggleMobileMenu}>Statistiques</a>
            <a href="#quiz" className="text-emerald-800 text-lg font-medium" onClick={toggleMobileMenu}>Quiz</a>
            <a href="#conseils" className="text-emerald-800 text-lg font-medium" onClick={toggleMobileMenu}>Conseils</a>
            
            <button
            onClick={handleDownload}
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-full max-w-xs">
              Agir Maintenant
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;