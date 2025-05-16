
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-montserrat font-bold text-harper-navy">
          Alex<span className="text-harper-terracotta">Harper</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-medium hover:text-harper-terracotta transition-colors ${
                location.pathname === item.path 
                  ? 'text-harper-terracotta' 
                  : 'text-harper-navy'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-harper-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-6 py-3 font-medium hover:bg-harper-cream hover:text-harper-terracotta transition-colors ${
                  location.pathname === item.path 
                    ? 'text-harper-terracotta' 
                    : 'text-harper-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
