import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, Cloud, ShieldCheck, BrainCircuit, Users, Code, LineChart } from 'lucide-react';

const services = [
  {
    title: "Azure Cloud Solutions",
    description: "Seamless migration and optimization of your infrastructure to Microsoft Azure with enterprise-grade security and scalability.",
    icon: Cloud,
    features: ["Azure Migration & Strategy", "Cloud Architecture Design", "Infrastructure Optimization", "Azure DevOps Implementation"],
    imageId: 'card-image-1'
  },
  {
    title: "Microsoft 365 Services",
    description: "Transform workplace productivity with comprehensive Microsoft 365 deployment, management, and optimization services.",
    icon: ShieldCheck,
    features: ["Microsoft 365 Deployment", "Teams & SharePoint Solutions", "Security & Compliance", "User Adoption & Training"],
    imageId: 'card-image-2'
  },
  {
    title: "Power Platform",
    description: "Accelerate digital transformation with custom solutions built on Power Apps, Power Automate, and Power BI.",
    icon: BrainCircuit,
    features: ["Power Apps Development", "Process Automation", "Power BI Analytics", "Custom Solutions"],
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

      <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-white">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-24">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold mb-6 border border-primary/20">
              MICROSOFT SERVICES
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Expert Solutions,
              <br />
              <span className="gradient-text">Exceptional Results</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium">
              Comprehensive Microsoft partnership services designed to accelerate your digital transformation
            </p>
          </div>

          {/* Services - Alternating Layout */}
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Image/Visual Side */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 shadow-2xl">
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px]" />

                      {/* Large icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-24 h-24 text-white" />
                        </div>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

                      {/* Floating badge */}
                      <div className="absolute bottom-6 left-6 px-4 py-2 glass rounded-full text-white text-sm font-bold border border-white/20">
                        Microsoft Certified
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl -z-10" />
                  </div>

                  {/* Content Side */}
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    {/* Service number */}
                    <div className="text-8xl font-black text-slate-100 mb-4">
                      0{index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-foreground/70 mb-8 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features - Premium list */}
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div
                          key={feature}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-lg font-bold text-foreground block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      size="lg"
                      className="gradient-primary font-bold text-lg group"
                      asChild
                    >
                      <Link href="#contact">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
