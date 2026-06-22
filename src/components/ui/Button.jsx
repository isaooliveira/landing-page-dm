import React from 'react';

export function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseClass = 'dm-button';
  const variantClass = variant === 'light' ? 'dm-button--light' : '';
  const finalClass = `${baseClass} ${variantClass} ${className}`.trim();
  
  if (href) {
    return (
      <a href={href} className={finalClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}
