import React from 'react';
import { cn } from '@/lib/utils'; // Optional: You can replace with simple `className` join if not using cn()

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
    secondary: 'bg-white text-yellow-700 border border-yellow-500 hover:bg-yellow-100',
    ghost: 'bg-transparent text-yellow-700 hover:bg-yellow-100',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2',
    lg: 'text-lg px-6 py-2.5',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? 'Processing...' : children}
    </button>
  );
};

