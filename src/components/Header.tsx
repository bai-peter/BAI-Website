import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'h-16 bg-background/90 backdrop-blur-md border-b border-border/20 shadow-sm'
          : 'h-20 bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center transition-opacity hover:opacity-80 h-full"
        >
          <img 
            src="/BAI-Website/lovable-uploads/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
            alt="BAI" 
            className="h-12 w-auto object-contain px-2"
            style={{ maxWidth: 'none' }}
          />
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>
        
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          )}>
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </span>
        </button>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-5 right-5 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-foreground transform -rotate-45" />
        </button>
        
        <nav className="flex flex-col space-y-6 text-lg">
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('home');
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('thesis');
              setIsMobileMenuOpen(false);
            }}
          >
            Investment Thesis
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('strategy');
              setIsMobileMenuOpen(false);
            }}
          >
            Strategy
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('technology');
              setIsMobileMenuOpen(false);
            }}
          >
            Technology
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('team');
              setIsMobileMenuOpen(false);
            }}
          >
            Team
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </button>
          <button 
            className="text-left hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => {
  const navItems = [
    { id: 'thesis', label: 'Investment Thesis' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'technology', label: 'Technology' },
    { id: 'team', label: 'Team' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-sm font-medium hover:text-foreground transition-colors"
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default Header;
