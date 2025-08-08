
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
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
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className={cn('py-20 md:py-32 bg-card border-t border-border', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
              alt="BAI" 
              className="w-32 h-auto object-contain"
            />
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('thesis')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Investment Thesis
            </button>
            <button
              onClick={() => scrollToSection('strategy')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Strategy
            </button>
            <button
              onClick={() => scrollToSection('technology')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('contact')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div>&copy; {new Date().getFullYear()} BAI. All rights reserved.</div>
            <div className="text-xs mt-1">Private investment fund. Qualified investors only.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
