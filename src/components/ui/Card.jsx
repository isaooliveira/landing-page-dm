import React from 'react';

export function Card({ children, variant = 'default', className = '', ...props }) {
  const baseClass = 'dm-card';
  const variantClass = variant === 'dark' ? 'dm-card--dark' : variant === 'soft' ? 'dm-card--soft' : '';
  
  return (
    <div className={`${baseClass} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
