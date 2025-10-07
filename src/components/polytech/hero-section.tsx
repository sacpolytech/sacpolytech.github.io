import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-primary to-cyan-600 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Animated mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-white font-semibold text-sm glow-accent">
            <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse-slow" />
            Transform Your Business in 2025
          </div>
        </div>

        {/* Massive Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 animate-fade-in-up text-white leading-none" style={{ animationDelay: '0.1s' }}>
          Build The
          <br />
          <span className="relative inline-block">
            <span className="gradient-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent animate-gradient">
              Future
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-50 -z-10" />
          </span>
          {' '}Today
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto text-white/90 mb-12 animate-fade-in-up font-bold leading-tight" style={{ animationDelay: '0.2s' }}>
          Revolutionary cloud solutions that scale your business <span className="text-cyan-300">10x faster</span>
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {['500+ Companies', '98% Success Rate', 'AI-Powered'].map((item) => (
            <div key={item} className="flex items-center gap-2 glass px-5 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              <span className="text-white font-semibold">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            asChild
            className="gradient-accent font-black text-xl sm:text-2xl px-12 py-8 rounded-full glow-accent hover:scale-110 transition-all shadow-2xl animate-pulse-slow h-auto"
          >
            <Link href="#contact">
              Start Free Trial
              <ArrowRight className="w-7 h-7 ml-3" />
            </Link>
          </Button>
          <p className="text-white/70 text-lg font-medium">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        {/* Social proof logos */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['Microsoft', 'AWS', 'Google', 'IBM', 'Oracle'].map((company) => (
              <div key={company} className="text-white font-bold text-2xl">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
