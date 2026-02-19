import { MapPin } from 'lucide-react';

const serviceAreas = [
  'Downtown District',
  'North Side',
  'South Side',
  'East End',
  'West End',
  'Suburban Areas',
  'Business Districts',
  'Residential Communities',
];

export function LocationsSection() {
  return (
    <section id="locations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Service <span className="text-primary">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We proudly serve the entire metropolitan area and surrounding communities
            </p>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Serving Your Community
                </h3>
                <p className="text-muted-foreground">
                  Bunty Babli Cleaning Service is available throughout the city and surrounding areas. 
                  We're committed to bringing our professional cleaning services to your neighborhood.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Don't see your area listed? <span className="text-primary font-medium">Contact us</span> – we may still be able to serve you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
