import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Input({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  icon: Icon,
  required = false,
  className = '',
  disabled = false,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`w-full text-left ${className}`}>
      {label && (
        <label htmlFor={id || name} className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
          {label} {required && <span className="text-[#E6CA85]">*</span>}
        </label>
      )}

      <div className="relative rounded-lg shadow-sm">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Icon className="h-4 w-4" />
          </div>
        )}

        <input
          id={id || name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`block w-full rounded-lg bg-[#070B14]/80 border ${
            error
              ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
              : 'border-slate-800 focus:border-[#E6CA85] focus:ring-[#E6CA85]/30'
          } py-2.5 ${Icon ? 'pl-10' : 'pl-3.5'} ${
            isPassword ? 'pr-11' : 'pr-3.5'
          } text-sm text-slate-100 placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 disabled:bg-slate-900/50 disabled:text-slate-500`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            tabIndex="-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-[#E6CA85] transition-colors focus:outline-none"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-slate-400">{helperText}</p>
      ) : null}
    </div>
  );
}
