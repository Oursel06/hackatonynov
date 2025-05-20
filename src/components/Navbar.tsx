import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/doc/gaspillage_alimentaire.pdf";
  link.download = "guide_gaspillage_alimentaire.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="sticky top-0 z-50 bg-receipt-paper/95 backdrop-blur-sm border-y border-dashed border-receipt-border">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <a href="#accueil" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors">ACCUEIL</a>
            <a href="#impact" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors">IMPACT</a>
            <a href="#statistiques" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors">STATS</a>
            <a href="#quiz" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors">QUIZ</a>
            <a href="#conseils" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors">CONSEILS</a>
            <a href="#associations" className="font-receipt text-lg text-receipt-text hover:text-emerald-600 transition-colors" onClick={handleDownload}>AGIR</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden font-receipt text-receipt-text mx-auto"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-receipt-paper pt-20 pb-6 px-4 flex flex-col md:hidden border-2 border-receipt-border">
          <button 
            className="absolute top-4 right-4 font-receipt text-receipt-text"
            onClick={toggleMobileMenu}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-6 items-center">
            <p className="font-receipt text-sm text-receipt-text w-full text-center border-b border-dashed border-receipt-border pb-4">
              === MENU ===
            </p>
            <a href="#accueil" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>ACCUEIL</a>
            <a href="#impact" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>IMPACT</a>
            <a href="#statistiques" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>STATS</a>
            <a href="#quiz" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>QUIZ</a>
            <a href="#conseils" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>CONSEILS</a>
            <a href="#associations" className="font-receipt text-xl text-receipt-text" onClick={toggleMobileMenu}>AGIR</a>
            <p className="font-receipt text-sm text-receipt-text w-full text-center border-t border-dashed border-receipt-border pt-4">
              ===========
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;