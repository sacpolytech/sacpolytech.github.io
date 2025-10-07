import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden pt-24">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_70%)]" />

      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Subtle floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-white font-semibold text-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-orange-400" />
            Microsoft Gold Partner
          </div>
        </div>

        {/* Massive Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 animate-fade-in-up text-white leading-none" style={{ animationDelay: '0.1s' }}>
          Enterprise
          <br />
          <span className="relative inline-block">
            <span className="gradient-text bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent">
              Solutions
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 blur-2xl opacity-30 -z-10" />
          </span>
          <br />
          That Deliver
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto text-white/90 mb-12 animate-fade-in-up font-bold leading-tight" style={{ animationDelay: '0.2s' }}>
          Expert Microsoft consulting and cloud transformation services for forward-thinking organizations
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {['Microsoft Gold Partner', '500+ Clients Served', '15+ Years Excellence'].map((item) => (
            <div key={item} className="flex items-center gap-2 glass px-5 py-2 rounded-full border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            asChild
            className="gradient-accent font-black text-xl sm:text-2xl px-12 py-8 rounded-full hover:scale-105 transition-all shadow-2xl h-auto"
          >
            <Link href="#contact">
              Schedule Consultation
              <ArrowRight className="w-7 h-7 ml-3" />
            </Link>
          </Button>
          <p className="text-white/70 text-lg font-medium">
            Expert guidance • Proven results • Trusted by industry leaders
          </p>
        </div>

        {/* Microsoft logo */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">
            Certified Microsoft Partner
          </p>
          <div className="text-white font-black text-4xl opacity-80">Microsoft</div>
        </div>
      </div>
    </section>
  );
}
