"use client";

import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PolyTechLogo = () => (
  <Link href="/" className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-2xl font-black gradient-text">SacPolytech</span>
  </Link>
);

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 glass shadow-lg">
      <div className="container flex h-24 items-center justify-between px-6">
        <PolyTechLogo />

        <Button
          size="lg"
          asChild
          className="gradient-primary font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-xl"
        >
          <Link href="#contact">
            <Rocket className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </Button>
      </div>
    </header>
  );
}
