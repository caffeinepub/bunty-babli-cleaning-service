import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  'Experienced & trained cleaning professionals',
  'Eco-friendly cleaning products available',
  'Flexible scheduling to fit your needs',
  'Satisfaction guaranteed',
  'Fully insured and bonded',
  'Customizable cleaning plans',
];

export function PricingOrQuoteSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get a <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every space is unique. Contact us for a personalized quote based on your specific needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-soft">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-heading">Custom Pricing</CardTitle>
              <CardDescription className="text-base mt-2">
                Tailored to your space and requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={scrollToContact}
              >
                Request Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
