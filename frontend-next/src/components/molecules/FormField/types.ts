import { ReactNode } from 'react';

export interface FormFieldPropsType {
  label: string;
  children: ReactNode;
  required?: boolean;
  loading?: boolean;
  valid?: boolean | null;
}
