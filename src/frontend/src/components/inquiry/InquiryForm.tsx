import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ServiceTypeSelect } from './ServiceTypeSelect';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import { validateInquiryForm } from '@/lib/validation/inquiryValidation';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateInquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit to backend
    submitInquiry(formData, {
      onSuccess: () => {
        // Reset form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          preferredDate: '',
          address: '',
          message: '',
        });
        setErrors({});
      },
    });
  };

  if (isSuccess) {
    return (
      <Alert className="border-primary/50 bg-primary/5">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        <AlertDescription className="text-foreground">
          <strong className="font-semibold">Thank you for your inquiry!</strong>
          <p className="mt-1">
            We've received your message and will get back to you within 24 hours with a personalized quote.
          </p>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error?.message || 'Failed to submit inquiry. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="John Doe"
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">
          Phone Number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+1 (555) 123-4567"
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email (Optional)</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john@example.com"
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="serviceType">
          Service Type <span className="text-destructive">*</span>
        </Label>
        <ServiceTypeSelect
          value={formData.serviceType}
          onValueChange={(value) => handleChange('serviceType', value)}
          error={errors.serviceType}
        />
        {errors.serviceType && (
          <p className="text-sm text-destructive mt-1">{errors.serviceType}</p>
        )}
      </div>

      <div>
        <Label htmlFor="preferredDate">Preferred Date (Optional)</Label>
        <Input
          id="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => handleChange('preferredDate', e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div>
        <Label htmlFor="address">
          Address/Area <span className="text-destructive">*</span>
        </Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="123 Main St, City"
          className={errors.address ? 'border-destructive' : ''}
        />
        {errors.address && (
          <p className="text-sm text-destructive mt-1">{errors.address}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us about your cleaning needs..."
          rows={4}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  );
}
