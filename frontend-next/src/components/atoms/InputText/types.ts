import { HTMLInputTypeAttribute } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface InputTextPropsType {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}
