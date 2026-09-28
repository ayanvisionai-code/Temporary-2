import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  // Simple hash or state router for the 3 primary pages
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'contact'>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'menu' || hash === 'contact') return hash;
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'menu' || hash === 'contact') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'menu' | 'contact') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-preachers-cream text-preachers-ink selection:bg-preachers-blue/40 selection:text-preachers-ink">
      {/* Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Dynamic 3-Page Main Content */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && <MenuPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
