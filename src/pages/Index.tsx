
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Gap from '@/components/Gap';
import FoundersInSearch from '@/components/FoundersInSearch';
import TechnologyPlatform from '@/components/TechnologyPlatform';
import About from '@/components/About';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import BackgroundChart from '@/components/BackgroundChart';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 120;
        if (targetElement) {
          const heading = targetElement.querySelector('h1, h2, h3, h4');
          const targetEl = (heading as HTMLElement) || targetElement;
          const rect = targetEl.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          window.scrollTo({
            top: absoluteTop - headerHeight - 16, // tiny bit more gap
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup
        });
      });
    };
  }, []);
  
  return (
    <main className="relative">
      {/* Global far-background chart (hidden over hero) */}
      <BackgroundChart />
      <Header />
      <Hero />
      <Manifesto />
      <Gap />
      <TechnologyPlatform />
      <FoundersInSearch />
      <About />
      <Community />
      <Footer />
    </main>
  );
};

export default Index;
