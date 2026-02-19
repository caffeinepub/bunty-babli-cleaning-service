import { Shield, Users, Award, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Your trust is our priority. We are fully insured and background-checked.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our professional cleaners are trained and passionate about what they do.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: 'We respect your schedule and arrive promptly for every appointment.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Bunty Babli</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for professional cleaning services
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 text-center">
            <p className="text-muted-foreground">
              At Bunty Babli Cleaning Service, we believe that a clean space is the foundation of a happy, healthy life. 
              With years of experience and a commitment to excellence, we've built our reputation on delivering 
              exceptional cleaning services that exceed expectations. Our dedicated team treats every home and office 
              with the same care and attention we'd give our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
