
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 120;
    if (element) {
      const heading = element.querySelector('h1, h2, h3, h4');
      const targetEl = (heading as HTMLElement) || element;
      const rect = targetEl.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      window.scrollTo({ top: absoluteTop - headerHeight - 16, behavior: 'smooth' });
    }
  };

  return (
    <footer className={cn('py-8 md:py-12 bg-card border-t border-border', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/assets/850bdd41-c8a0-41b8-b1a0-fa05f418aabb.png" 
              alt="BAI" 
              className="w-32 h-auto object-contain"
            />
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('about')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Our Firm
            </button>
            <button
              onClick={() => scrollToSection('what-we-do')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('technology')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('team')} 
              className="text-sm hover:text-foreground transition-colors"
            >
              Our Team
            </button>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div>&copy; {new Date().getFullYear()} BAI Funds. All rights reserved.</div>
            <div className="text-xs mt-1">Private investment fund. Qualified investors only.</div>
            <div className="text-xs mt-1">Contact: team@baifunds.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
