import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building2, Sparkles, Package } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    description: 'Regular or one-time deep cleaning for your home. We handle everything from dusting to floor care, leaving your space spotless.',
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    description: 'Professional cleaning services for offices and commercial spaces. Maintain a clean, productive work environment for your team.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough, intensive cleaning that reaches every corner. Perfect for spring cleaning or preparing for special occasions.',
  },
  {
    icon: Package,
    title: 'Move In/Out Cleaning',
    description: 'Complete cleaning for moving transitions. We ensure your old or new space is pristine and ready for the next chapter.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all hover:shadow-soft"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
