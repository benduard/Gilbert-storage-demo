import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Storage Units', href: '#units' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'About', href: '#benefits' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center -ml-8">
            <button 
              onClick={() => scrollToSection('#hero')}
              className="flex items-center"
            >
              <img 
                src="/Logo/Dolly_Logo_Trimmed.png" 
                alt="Gilbert's Storage Logo" 
                className="h-32 w-auto object-contain"
                style={{
                  transform: 'rotate(90deg)'
                }}
              />
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-secondary text-lg font-semibold transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:(555) 123-4567" className="hidden md:block text-secondary text-lg font-bold hover:text-secondary/80 transition-colors duration-200">
              (555) 123-4567
            </a>
            <button
              type="button"
              className="md:hidden rounded-md p-2 text-gray-700 hover:text-secondary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left rounded-md px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}