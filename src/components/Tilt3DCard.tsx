import React, { useRef, useState } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  intensity = 7,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Keep mobile light & fast

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.12s ease-out, box-shadow 0.25s ease-out',
    });

    if (glare) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.22,
        background: `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.85), transparent 60%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
      transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease',
    });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={glareStyle}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        />
      )}
    </div>
  );
};
