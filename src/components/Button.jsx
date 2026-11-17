import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050811] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
    xl: "px-8 py-4 text-lg gap-3 font-semibold",
  };

  const variants = {
    primary: "bg-gradient-to-r from-[#F5DE9C] via-[#E6CA85] to-[#C9A24D] text-[#0A0F1D] font-semibold hover:from-[#FFF1C6] hover:to-[#DEB75D] shadow-lg shadow-[#E6CA85]/20 hover:shadow-[#E6CA85]/35 focus:ring-[#E6CA85]",
    secondary: "bg-[#0D1527]/80 hover:bg-[#15203B] text-[#F3E5AB] border border-[#E6CA85]/30 hover:border-[#E6CA85]/60 hover:shadow-lg hover:shadow-[#E6CA85]/10 focus:ring-[#E6CA85]",
    purple: "bg-gradient-to-r from-[#6320EE] via-[#7B3FE4] to-[#935BEA] text-white hover:from-[#7335F5] hover:to-[#A16FF0] shadow-lg shadow-[#6320EE]/25 hover:shadow-[#6320EE]/45 focus:ring-[#935BEA]",
    outline: "bg-transparent text-slate-200 border border-slate-700 hover:border-[#E6CA85]/50 hover:text-[#E6CA85] focus:ring-[#E6CA85]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 focus:ring-slate-500",
    danger: "bg-red-900/80 hover:bg-red-800 text-red-100 border border-red-700/50 focus:ring-red-500"
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </motion.button>
  );
}
