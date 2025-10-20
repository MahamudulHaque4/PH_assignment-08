import { useState } from 'react';

const LazyImage = ({ src, alt, className = '', width, height, style }) => {
  const [loaded, setLoaded] = useState(false);

  const placeholderStyle = {
    background: 'linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.2s linear infinite',
    ...(!width || !height ? { paddingTop: '56.25%' } : {}),
    ...style,
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!loaded && (
        <div aria-hidden className="absolute inset-0" style={placeholderStyle}></div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 320ms ease, transform 320ms ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: loaded ? 'scale(1)' : 'scale(1.02)'
        }}
      />

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>
    </div>
  );
};

export default LazyImage;
