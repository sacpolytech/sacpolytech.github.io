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


const TestimonialCard = ({ name, title, image, quote }: (typeof testimonials)[0]) => (
  <Card className="h-full border-0 shadow-none bg-transparent">
    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
      </div>
      <blockquote className="text-lg md:text-xl text-foreground font-medium mt-4 mb-6 flex-grow">
        “{quote}”
      </blockquote>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Hear what our clients have to say about our partnership and the impact we've delivered.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1 h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
