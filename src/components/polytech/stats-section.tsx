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
    <section className="relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 clip-path-diagonal" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.2),transparent_70%)]" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Microsoft logo watermark */}
      <div className="absolute top-20 right-10 text-white/5 font-black text-9xl rotate-12 select-none">
        MICROSOFT
      </div>

      <div className="container mx-auto relative z-10 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange-400 text-sm font-bold mb-6 border border-white/20">
            PROVEN TRACK RECORD
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Trusted by
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Delivering exceptional Microsoft solutions that transform businesses
          </p>
        </div>

        {/* Stats Grid - Modern Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glass card */}
              <div className="relative p-8 rounded-2xl glass border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Small icon */}
                  <stat.icon className="w-8 h-8 text-orange-400 mb-4" />

                  {/* Large counter */}
                  <div className="mb-3">
                    <span className="text-6xl md:text-7xl font-black text-white inline-block">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transition-all duration-1000 delay-300"
                      style={{ width: `${stat.value > 100 ? 100 : stat.value}%` }}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-white/60 font-medium">
                    {stat.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Client logos bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-wider text-center mb-8">
            Powered by Microsoft Technologies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Azure', 'Microsoft 365', 'Power Platform', 'Dynamics 365', 'SharePoint'].map((tech) => (
              <div key={tech} className="text-white font-bold text-xl hover:opacity-100 transition-opacity cursor-pointer">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
