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

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Solutions for the Digital Age</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              We provide the strategic guidance and technical expertise to solve your most complex challenges and unlock new growth.
            </p>
          </div>
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <div key={service.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                    {serviceImage && (
                      <Image
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:order-first' : ''}`}>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-accent mr-2 shrink-0"/>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
