"use client";

import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clients Worldwide',
    description: 'Trusted by leading organizations'
  },
  {
    icon: Briefcase,
    value: 1200,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed solutions'
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Exceptional service quality'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Industry experience'
  },
];

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
            Proven <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-foreground/70 font-semibold">Delivering results for enterprise clients worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-3xl bg-white hover:scale-105 transition-all duration-500 border-2 border-slate-200 hover:border-primary/50 shadow-lg hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                <stat.icon className="w-10 h-10 text-white" />
              </div>

              {/* Counter with gradient text */}
              <div className="mb-4">
                <div className="text-6xl md:text-7xl font-black gradient-text">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl font-black text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-foreground/60 font-medium">
                {stat.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-slow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
