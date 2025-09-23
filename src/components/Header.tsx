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

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
    return () => body.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 120;
      if (element) {
        // Prefer the first heading inside the section for precise alignment
        const heading = element.querySelector('h1, h2, h3, h4');
        const targetEl = (heading as HTMLElement) || element;
        const rect = targetEl.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        window.scrollTo({
          top: absoluteTop - headerHeight - 16, // tiny bit more breathing room
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[70] transition-all duration-300',
        isScrolled 
          ? 'h-16 bg-background/90 backdrop-blur-md border-b border-border/20 shadow-sm text-foreground'
          : 'h-20 bg-transparent text-white',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center transition-opacity hover:opacity-80 h-full"
        >
          <img 
            src="/assets/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
            alt="BAI" 
            className="h-12 w-auto object-contain px-2"
            style={{ maxWidth: 'none' }}
          />
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} isScrolled={isScrolled} />
        </div>
        
        <button 
          className="md:hidden flex items-center text-inherit"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          )}>
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-4 h-0.5 bg-current" />
          </span>
        </button>
      </div>
      
      <div className={cn("md:hidden", isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none")}> 
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={cn(
            "fixed top-0 right-0 h-[100svh] w-[88vw] max-w-sm bg-background z-50 flex flex-col pt-12 px-6 border-l border-border shadow-xl transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <img 
              src="/assets/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
              alt="BAI" 
              className="h-8 w-auto object-contain"
              style={{ maxWidth: 'none' }}
            />
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-foreground transform -rotate-45" />
            </button>
          </div>
        
        <nav className="flex flex-col space-y-6 text-lg">
          <button 
            className="text-left hover:opacity-80 transition-colors"
            onClick={() => {
              scrollToSection('home');
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </button>
          <button 
            className="text-left hover:opacity-80 transition-colors"
            onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}
          >
            Our Firm
          </button>
          <button 
            className="text-left hover:opacity-80 transition-colors"
            onClick={() => {
              scrollToSection('what-we-do');
              setIsMobileMenuOpen(false);
            }}
          >
            Our Approach
          </button>
          <button 
            className="text-left hover:opacity-80 transition-colors"
            onClick={() => {
              scrollToSection('technology');
              setIsMobileMenuOpen(false);
            }}
          >
            Technology
          </button>
          <button 
            className="text-left hover:opacity-80 transition-colors"
            onClick={() => {
              scrollToSection('team');
              setIsMobileMenuOpen(false);
            }}
          >
            Our Team
          </button>
        </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
  isScrolled: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection, isScrolled }) => {
  const navItems = [
    { id: 'about', label: 'Our Firm' },
    { id: 'what-we-do', label: 'Our Approach' },
    { id: 'technology', label: 'Technology' },
    { id: 'team', label: 'Our Team' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={cn(
            "text-sm font-medium transition-colors",
            isScrolled ? "text-foreground hover:opacity-80" : "text-white hover:opacity-80"
          )}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default Header;
