'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface StickyTOCProps {
  items: TOCItem[];
}

export default function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop TOC */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink-900 mb-4">On this page</h3>
          <nav className="space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeId === item.id
                    ? 'bg-brand-lime-100 text-ink-900 font-medium'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-brand-lime-50'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full bg-white border border-black/5 rounded-lg p-4 flex items-center justify-between text-left"
        >
          <span className="font-medium text-ink-900">On this page</span>
          <ChevronDown
            className={`h-5 w-5 text-ink-400 transition-transform ${
              isMobileOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {isMobileOpen && (
          <div className="mt-2 bg-white border border-black/5 rounded-lg shadow-sm">
            <nav className="p-4 space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeId === item.id
                      ? 'bg-brand-lime-100 text-ink-900 font-medium'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-brand-lime-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
