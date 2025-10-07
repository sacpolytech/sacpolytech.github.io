import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, Cloud, ShieldCheck, BrainCircuit, Users, Code, LineChart } from 'lucide-react';

const services = [
  {
    title: "Cloud Transformation",
    description: "Leverage the full power of the cloud with our end-to-end services, from strategy and migration to management and optimization.",
    icon: Cloud,
    features: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Multi-Cloud & Hybrid Solutions", "Cloud-Native Development"],
    imageId: 'card-image-1'
  },
  {
    title: "Intelligent Security",
    description: "Proactively protect your organization with our 360-degree cybersecurity services, powered by AI and threat intelligence.",
    icon: ShieldCheck,
    features: ["Managed Detection & Response", "Zero Trust Architecture", "Security Audits & Compliance", "Incident Response"],
    imageId: 'card-image-2'
  },
  {
    title: "Data & AI Innovation",
    description: "Turn your data into a strategic asset. We help you build intelligent systems that drive efficiency and create new opportunities.",
    icon: BrainCircuit,
    features: ["Modern Data Platforms", "Machine Learning & AI Models", "Business Intelligence Dashboards", "Data Governance & Quality"],
    imageId: 'card-image-3'
  },
];

export default function ContentBlocks() {
  const contentImage1 = PlaceHolderImages.find(p => p.id === 'content-image-1');

  return (
    <div className="bg-background">
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-last md:order-first">
              {contentImage1 && (
                <Image
                  src={contentImage1.imageUrl}
                  alt={contentImage1.description}
                  fill
                  className="object-cover"
                  data-ai-hint={contentImage1.imageHint}
                />
              )}
            </div>
            <div className="order-first md:order-last">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Vision, Engineered.</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At PolyTech, we don't just build technology. We build futures. Our dedicated teams work hand-in-hand with you to understand your challenges and deliver tailor-made solutions that create lasting value.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 shrink-0"/>
                  <span className="text-muted-foreground">Agile development for rapid delivery.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 shrink-0"/>
                  <span className="text-muted-foreground">Expert teams with deep industry knowledge.</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 shrink-0"/>
                  <span className="text-muted-foreground">Focus on measurable business outcomes.</span>
                </li>
              </ul>
              <Button asChild variant="link" className="p-0 h-auto text-accent text-lg font-semibold">
                <Link href="/about">
                  Learn more about our approach <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),transparent_60%)]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">Supercharge</span> Your Growth
            </h2>
            <p className="max-w-3xl mx-auto text-foreground/70 text-xl md:text-2xl font-semibold">
              Enterprise-grade solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative p-8 rounded-3xl bg-white border-2 border-purple-100 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black mb-4 text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 text-lg font-medium">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5"/>
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-slow" />

                  {/* Bottom gradient bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
