import React from 'react';

export default function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = ''
}) {
  const variants = {
    gold: 'bg-[#E6CA85]/10 text-[#F5DE9C] border border-[#E6CA85]/30',
    purple: 'bg-[#8B5CF6]/15 text-[#D8B4FE] border border-[#8B5CF6]/35',
    navy: 'bg-[#1E293B]/80 text-slate-300 border border-slate-700/60',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    rose: 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider uppercase font-semibold',
    md: 'text-xs px-2.5 py-1 tracking-wide font-medium',
    lg: 'text-sm px-3.5 py-1.5 font-medium'
  };

  return (
    <span className={`inline-flex items-center rounded-full backdrop-blur-sm ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
