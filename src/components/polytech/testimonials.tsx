import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, Innovate Inc.",
    image: "https://picsum.photos/seed/testimonial1/100/100",
    quote: "PolyTech's cloud migration strategy was flawless. Our infrastructure is now more scalable and secure than ever before, directly impacting our bottom line.",
  },
  {
    name: "Michael Chen",
    title: "Head of Data Science, QuantumLeap",
    image: "https://picsum.photos/seed/testimonial2/100/100",
    quote: "The AI models developed by the PolyTech team have revolutionized our data analysis capabilities. We're uncovering insights we never thought possible.",
  },
  {
    name: "David Lee",
    title: "Director of IT, Global Solutions",
    image: "https://picsum.photos/seed/testimonial3/100/100",
    quote: "Working with PolyTech felt like a true partnership. Their expertise in cybersecurity and proactive approach gave us complete peace of mind.",
  },
  {
    name: "Jessica Rodriguez",
    title: "CEO, FutureGadget",
    image: "https://picsum.photos/seed/testimonial4/100/100",
    quote: "From app modernization to data strategy, PolyTech delivered at every stage. Their team is professional, knowledgeable, and dedicated to our success.",
  },
];


export default function Testimonials() {
  const featuredTestimonial = testimonials[0];
  const secondaryTestimonials = testimonials.slice(1);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold mb-6 border border-primary/20">
            CLIENT SUCCESS STORIES
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            What Our
            <br />
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-medium">
            Real results from real partnerships that transform businesses
          </p>
        </div>

        {/* Featured Testimonial - Large Format */}
        <div className="mb-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-8 p-12 md:p-16">
            {/* Quote Side */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
                "{featuredTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-20 w-20 ring-4 ring-white/20">
                    <AvatarImage src={featuredTestimonial.image} alt={featuredTestimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold">
                      {featuredTestimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-black text-white">{featuredTestimonial.name}</p>
                    <p className="text-white/70 font-medium">{featuredTestimonial.title}</p>
                  </div>
                </div>

                {/* Company logo placeholder */}
                <div className="inline-block px-6 py-3 glass rounded-full text-white font-bold text-sm border border-white/20">
                  {featuredTestimonial.title.split(',')[1] || 'Enterprise Client'}
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="relative">
                {/* Decorative circle */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white mb-2">98%</div>
                    <div className="text-white/80 font-bold text-sm uppercase">Success Rate</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials - Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondaryTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-semibold text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
