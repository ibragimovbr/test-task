export interface FormData {
  country: string;
  city: string;
  universityType: string;
  accommodationType: string;
}

export interface SelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}
