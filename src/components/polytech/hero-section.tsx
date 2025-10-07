import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-accent/30" />
      
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          Innovate. Transform. Lead.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We partner with leading organizations to deliver groundbreaking solutions that drive digital transformation and sustainable business growth.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 group rounded-full px-8 py-6 text-lg">
            <Link href="#services">
              Explore Our Solutions
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
