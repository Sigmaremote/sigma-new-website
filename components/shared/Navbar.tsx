'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const nav = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const resources = [
  { label: 'Press', href: '/press' },
  { label: 'Blog', href: '/blog' },
  { label: 'Glossary', href: '/glossary' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') { setOpen(false); setMobileOpen(false); } }
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onEsc);
    return () => { window.removeEventListener('click', onClick); window.removeEventListener('keydown', onEsc); };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="https://www.sigmaremote.com" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="Sigma home">
          <Image
            src="/logo/sigma-logo-1.avif"
            alt="Sigma Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((i) => (
            <Link key={i.label} href={i.href} className="text-[15px] font-medium text-black hover:opacity-70">
              {i.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="resources-menu"
              className="flex items-center gap-1 text-[15px] font-medium text-black hover:opacity-70"
            >
              Resources <ChevronDown size={16} className="translate-y-[1px] text-[#0C2E1C]" />
            </button>
            {open && (
              <div
                id="resources-menu"
                className="absolute right-0 mt-3 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl"
              >
                {resources.map((r) => (
                  <Link
                    key={r.label}
                    href={r.href}
                    className="block rounded-xl px-3 py-2 text-[15px] text-black hover:bg-black/5"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full bg-[#F2F3F1] px-4 py-2 text-[15px] font-semibold text-[#0C2E1C] hover:opacity-80"
          >
            Log in
          </Link>
          <Link
            href="/book-a-demo"
            className="rounded-full bg-[#D6FF57] px-5 py-2 text-[15px] font-semibold text-black hover:brightness-95"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileSheet onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function MobileSheet({ onClose }: { onClose: () => void }) {
  const [resOpen, setResOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            {nav.map((i) => (
              <Link key={i.label} href={i.href} className="rounded-lg px-2 py-2 text-base text-black hover:bg-black/5" onClick={onClose}>
                {i.label}
              </Link>
            ))}

            <button
              className="flex items-center justify-between rounded-lg px-2 py-2 text-base text-black hover:bg-black/5"
              onClick={() => setResOpen((v) => !v)}
              aria-expanded={resOpen}
            >
              <span>Resources</span>
              <ChevronDown size={18} className={`${resOpen ? 'rotate-180' : ''} transition-transform`} />
            </button>
            {resOpen && (
              <div className="ml-2 flex flex-col gap-1">
                {resources.map((r) => (
                  <Link key={r.label} href={r.href} className="rounded-lg px-2 py-2 text-base text-black hover:bg-black/5" onClick={onClose}>
                    {r.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-2 flex items-center gap-2">
              <Link href="/login" className="flex-1 rounded-full bg-[#F2F3F1] px-4 py-2 text-center text-[15px] font-semibold text-[#0C2E1C]" onClick={onClose}>
                Log in
              </Link>
              <Link href="/book-a-demo" className="flex-1 rounded-full bg-[#D6FF57] px-4 py-2 text-center text-[15px] font-semibold text-black" onClick={onClose}>
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
