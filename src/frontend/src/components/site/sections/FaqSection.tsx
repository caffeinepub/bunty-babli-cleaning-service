import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire metropolitan area and surrounding communities. If you\'re unsure whether we cover your location, please contact us and we\'ll be happy to confirm.',
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, we bring all necessary cleaning supplies and equipment. However, if you have specific products you\'d like us to use, we\'re happy to accommodate your preferences.',
  },
  {
    question: 'How do I schedule a cleaning?',
    answer: 'Simply fill out our contact form with your details and preferred date, or give us a call. We\'ll get back to you promptly to confirm your appointment and provide a quote.',
  },
  {
    question: 'Are your cleaners insured and background-checked?',
    answer: 'Yes, absolutely. All our cleaning professionals are fully insured, bonded, and have undergone thorough background checks for your peace of mind.',
  },
  {
    question: 'What if I\'m not satisfied with the cleaning?',
    answer: 'Your satisfaction is our priority. If you\'re not completely happy with our service, let us know within 24 hours and we\'ll return to address any concerns at no additional charge.',
  },
  {
    question: 'Can I customize my cleaning plan?',
    answer: 'Definitely! We understand every space has unique needs. We\'ll work with you to create a customized cleaning plan that fits your specific requirements and budget.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
