import React from 'react';

export function ImageBlock({ src, alt, className = '', containerClassName = '', ...props }) {
  const containerStyle = {
    borderRadius: 'var(--dm-radius-xl)',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  };

  const imgStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div className={containerClassName} style={containerStyle} {...props}>
      <img src={src} alt={alt} className={className} style={imgStyle} />
    </div>
  );
}
