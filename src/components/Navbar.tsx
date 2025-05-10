
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-5 md:px-10 py-4 ${
        isScrolled ? 'bg-portfolio-blue shadow-lg bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-mono text-portfolio-accent text-2xl font-bold">
          <a href="#" className="flex items-center">
            <span>JD</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button 
              key={link.section} 
              onClick={() => scrollToSection(link.section)}
              className="nav-link"
            >
              <span className="nav-number">0{index + 1}.</span>
              {link.name}
            </button>
          ))}
          <Button className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:bg-opacity-10">
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-portfolio-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed top-[66px] right-0 h-screen w-3/4 bg-portfolio-lightBlue transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link, index) => (
            <button 
              key={link.section} 
              onClick={() => scrollToSection(link.section)}
              className="text-portfolio-lightest font-mono text-lg"
            >
              <span className="text-portfolio-accent">0{index + 1}.</span> {link.name}
            </button>
          ))}
          <Button className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:bg-opacity-10 mt-4">
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
