import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  wrapperClassName?: string;
}

const DEFAULT_FALLBACK = '/images/recipes/lava-kek.jpg';

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt,
  className = '',
  wrapperClassName = '',
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [errored, setErrored] = useState<boolean>(false);

  React.useEffect(() => {
    setImgSrc(src);
    setErrored(false);
  }, [src]);

  const handleError = () => {
    if (!errored && imgSrc !== fallbackSrc) {
      setErrored(true);
      setImgSrc(fallbackSrc);
    } else if (imgSrc !== DEFAULT_FALLBACK) {
      setImgSrc(DEFAULT_FALLBACK);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-pastelPink-50/70 ${wrapperClassName}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-pastelPink-100/60 via-cream-100 to-warmBeige-100"
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...rest}
      />
    </div>
  );
};
