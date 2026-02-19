import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const serviceTypes = [
  { value: 'home', label: 'Home Cleaning' },
  { value: 'office', label: 'Office Cleaning' },
  { value: 'deep', label: 'Deep Cleaning' },
  { value: 'move', label: 'Move In/Out Cleaning' },
];

interface ServiceTypeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
}

export function ServiceTypeSelect({ value, onValueChange, error }: ServiceTypeSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={error ? 'border-destructive' : ''}>
        <SelectValue placeholder="Select a service type" />
      </SelectTrigger>
      <SelectContent>
        {serviceTypes.map((type) => (
          <SelectItem key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
