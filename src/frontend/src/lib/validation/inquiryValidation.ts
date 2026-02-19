interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  address: string;
  message: string;
}

export function validateInquiryForm(data: InquiryFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  // Required field: name
  if (!data.name.trim()) {
    errors.name = 'Full name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Required field: phone
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  } else if (data.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Phone number must be at least 10 digits';
  }

  // Optional field: email (validate format if provided)
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Required field: serviceType
  if (!data.serviceType) {
    errors.serviceType = 'Please select a service type';
  }

  // Required field: address
  if (!data.address.trim()) {
    errors.address = 'Address or area is required';
  } else if (data.address.trim().length < 5) {
    errors.address = 'Please provide a more detailed address';
  }

  // Required field: message
  if (!data.message.trim()) {
    errors.message = 'Please tell us about your cleaning needs';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}
