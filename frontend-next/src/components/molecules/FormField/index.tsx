import React, { JSX } from 'react';
import { FormFieldPropsType } from './types';

const FormField = ({
  label,
  children,
  required,
  loading = false,
  valid = null,
}: FormFieldPropsType): JSX.Element => {
  return (
    <div className="relative flex flex-col text-left">
      <label className="absolute -top-1.5 left-4 px-3 bg-white font-bold text-xs text-slate-500 uppercase mb-2">
        {label}
        {required && <span className="leading-4 text-base text-red-500 my-auto ml-2">*</span>}
      </label>
      {children}
      {loading && (
        <span data-testid="spinner" className="absolute top-4 right-1 text-slate-500">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      {valid !== null && !loading && (
        <span className="absolute top-3.5 right-3 text-2xl font-bold">errado</span>
      )}
    </div>
  );
};

export default FormField;
