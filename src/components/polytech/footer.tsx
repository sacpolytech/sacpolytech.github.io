import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

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
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <PolyTechLogo />
            <p className="text-muted-foreground text-sm max-w-xs">
              Pioneering digital solutions to build the future of business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold text-foreground tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.Company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold text-foreground tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.Services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                    <h3 className="font-semibold text-foreground tracking-wider uppercase">Connect</h3>
                    <ul className="mt-4 space-y-2">
                    {footerLinks.Connect.map((link) => (
                        <li key={link.name}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} PolyTech Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
