import { InputTextAreaPropsType } from './types';

const BaseInputTextArea = ({ register, name, rules, rows, max, error }: InputTextAreaPropsType) => {
  return (
    <div className="flex flex-col">
      <textarea
        rows={rows}
        maxLength={max}
        {...register(name, rules)}
        className={`flex px-3 py-2 md:px-4 md:py-3 border-2 ${error ? 'border-error' : 'border-slate-400'} rounded-lg bg-white text-darken font-medium placeholder:font-normal focus:outline-none focus:ring-0`}
      ></textarea>
      {error && (
        <span className="absolute -bottom-1.5 right-3 px-2 bg-white text-xs text-red-500">
          Preencha este campo
        </span>
      )}
    </div>
  );
};

export default BaseInputTextArea;
