"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PolyTechLogo = () => (
  <Link href="/" className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
    <span className="text-xl font-bold text-foreground">PolyTech</span>
  </Link>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add your newsletter signup logic here
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Cyber Security', href: '#services' },
      { name: 'Data & AI', href: '#services' },
      { name: 'App Modernization', href: '#services' },
    ],
    Connect: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Support', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 border-t border-slate-700">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Stay Ahead of the Curve
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Subscribe to our newsletter for the latest insights, tech trends, and exclusive content.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 backdrop-blur-sm"
              />
              <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-white">PolyTech</span>
            </div>
            <p className="text-slate-300 text-sm max-w-xs">
              Pioneering digital solutions to build the future of business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-slate-400 hover:text-white transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold text-white tracking-wider uppercase text-sm">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold text-white tracking-wider uppercase text-sm">Services</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.Services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                    <h3 className="font-semibold text-white tracking-wider uppercase text-sm">Connect</h3>
                    <ul className="mt-4 space-y-3">
                    {footerLinks.Connect.map((link) => (
                        <li key={link.name}>
                        <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Sacramento Polytechnic. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
