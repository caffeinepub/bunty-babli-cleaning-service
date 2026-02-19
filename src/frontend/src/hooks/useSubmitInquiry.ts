import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  address: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: InquiryFormData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      // Format the complete message with all form details
      const fullMessage = `
Service Type: ${getServiceTypeLabel(formData.serviceType)}
Phone: ${formData.phone}
${formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : ''}
Address/Area: ${formData.address}

Message:
${formData.message}
      `.trim();

      // Submit to backend with name, email (or empty string), and formatted message
      await actor.submitInquiry(
        formData.name,
        formData.email || '',
        fullMessage
      );
    },
    onSuccess: () => {
      // Invalidate inquiries query if admin is viewing them
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

function getServiceTypeLabel(value: string): string {
  const labels: Record<string, string> = {
    home: 'Home Cleaning',
    office: 'Office Cleaning',
    deep: 'Deep Cleaning',
    move: 'Move In/Out Cleaning',
  };
  return labels[value] || value;
}
