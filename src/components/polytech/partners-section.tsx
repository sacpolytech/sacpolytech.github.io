import Image from 'next/image';

const partners = [
  { name: 'Microsoft', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=Microsoft&font=raleway' },
  { name: 'AWS', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=AWS&font=raleway' },
  { name: 'Google Cloud', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=Google+Cloud&font=raleway' },
  { name: 'IBM', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=IBM&font=raleway' },
  { name: 'Oracle', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=Oracle&font=raleway' },
  { name: 'SAP', logo: 'https://placehold.co/200x80/e5e7eb/1e293b?text=SAP&font=raleway' },
];

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Technology Partners
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
