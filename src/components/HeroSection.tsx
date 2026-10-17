import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Sparkles, Flame, Box, Image as ImageIcon, Star, ChefHat } from 'lucide-react';

const ThreeHeroCanvas = React.lazy(() =>
  import('./ThreeHeroCanvas').then((m) => ({ default: m.ThreeHeroCanvas }))
);

export const HeroSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'scene' | 'webgl'>('scene');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative overflow-hidden bg-gradient-to-br from-[#2B160E] via-[#4A271B] to-[#6E3B28] text-white"
    >
      {/* Warm Golden Bakery Bokeh & Ambient Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute top-12 right-1/3 w-80 h-80 rounded-full bg-pastelPink-400/20 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
        {/* Warm wooden counter surface at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-r from-[#5A3222] via-[#8C533B] to-[#5E3423] opacity-75 border-t border-amber-200/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Typography & CTAs matching Reference Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 z-10 text-left space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pastelPink-200 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-pastelPink-300" />
              <span>3D Premium Pastane & Tatlı Rehberi</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl xl:text-[54px] font-bold leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              <span className="block text-white">En Tatlı</span>
              <span className="text-pastelPink-300 inline-block mr-3">Tarifler</span>
              <span className="relative inline-block text-white">
                <ChefHat
                  aria-hidden="true"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-cream-100 absolute -top-4 -left-2 -rotate-12 drop-shadow"
                />
                Burada!
              </span>
            </h1>

            <p className="text-cream-100/90 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Evde kolayca yapabileceğiniz, birbirinden lezzetli ve görsel olarak iştah açan tatlı
              tarifleri seni bekliyor. Haydi mutfağa, tatlı bir yolculuğa çıkalım!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/tarifler"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-pastelPink-400 to-pastelPink-500 hover:from-pastelPink-500 hover:to-pastelPink-600 text-white font-bold text-sm sm:text-base shadow-btn-pink hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </span>
                Tarifleri Keşfet
              </Link>

              <a
                href="#populer-tarifler"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Flame className="w-4 h-4 text-pastelPink-300" />
                Popüler Tarifler
              </a>
            </div>

            {/* Quick Trust Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-cream-200/85">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>
                  <strong className="text-white">Tam Ölçülü</strong> (Gram & ml)
                </span>
              </div>
              <span className="opacity-40">•</span>
              <div>
                <strong className="text-white">Adım Adım</strong> Görselli & Videolu
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Dessert Characters & Interactive Three.js Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 relative z-10"
          >
            {/* Mode Switcher Bar */}
            <div className="flex items-center justify-end gap-2 mb-2.5">
              <button
                type="button"
                onClick={() => setViewMode('scene')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'scene'
                    ? 'bg-pastelPink-500 text-white shadow-btn-pink'
                    : 'bg-black/35 text-cream-100 hover:bg-black/50 border border-white/15'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                3D Pastane Sahnesi
              </button>
              <button
                type="button"
                onClick={() => setViewMode('webgl')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'webgl'
                    ? 'bg-pastelPink-500 text-white shadow-btn-pink'
                    : 'bg-black/35 text-cream-100 hover:bg-black/50 border border-white/15'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                İnteraktif 3D Modeller (Three.js)
              </button>
            </div>

            {viewMode === 'scene' ? (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#3B1F14] group">
                {/* Main 3D Bakery Scene Artwork with Controlled Parallax */}
                <div
                  style={{
                    transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0) scale(1.03)`,
                    transition: 'transform 0.2s ease-out',
                  }}
                >
                  <img
                    src="/images/hero-3d-desserts.png"
                    alt="3D sevimli çikolatalı pankek, pembe cupcake, çilekli donut ve akışkan lava kek"
                    className="w-full h-[270px] sm:h-[340px] lg:h-[360px] object-cover object-center"
                  />
                </div>

                {/* Interactive Hotspots / Floating 3D Badges over the Desserts */}
                <Link
                  to="/tarif/sicak-cikolatali-lava-kek"
                  style={{
                    transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 25px)`,
                  }}
                  className="hidden sm:flex absolute bottom-3 right-3 bg-choco-900/85 hover:bg-pastelPink-600/95 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl border border-white/25 shadow-xl items-center gap-2.5 text-xs font-semibold transition-colors"
                >
                  <img
                    src="/images/recipes/lava-kek.jpg"
                    alt="Lava Kek"
                    className="w-8 h-8 rounded-lg object-cover border border-pastelPink-300"
                  />
                  <div>
                    <span className="block font-bold text-pastelPink-200 leading-tight">
                      Sıcak Çikolatalı Lava Kek
                    </span>
                    <span className="text-[11px] text-cream-200">Tarife Git → 27 dk</span>
                  </div>
                </Link>

                <Link
                  to="/kategoriler?kat=kekler"
                  style={{
                    transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 20px)`,
                  }}
                  className="hidden sm:flex absolute top-3 left-3 bg-white/90 hover:bg-white text-choco-800 px-3 py-1.5 rounded-full shadow-lg items-center gap-1.5 text-xs font-bold transition-transform hover:scale-105"
                >
                  <span role="img" aria-label="Cupcake">
                    🧁
                  </span>
                  <span>Tatlı yapmak mutluluk demektir</span>
                  <span className="text-pastelPink-500">♥</span>
                </Link>
              </div>
            ) : (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-[#3A1E14]/90 to-[#24110B]/95 backdrop-blur-md p-2">
                <Suspense
                  fallback={
                    <div className="w-full h-[320px] flex flex-col items-center justify-center gap-3 text-cream-100">
                      <div className="w-10 h-10 rounded-full border-3 border-pastelPink-400 border-t-transparent animate-spin" />
                      <span className="text-xs font-semibold text-pastelPink-200">
                        3D Tatlı Modelleri Hazırlanıyor...
                      </span>
                    </div>
                  }
                >
                  <ThreeHeroCanvas />
                </Suspense>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
