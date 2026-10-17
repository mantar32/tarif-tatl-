import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChefHat,
  Clock,
  ArrowRight,
  Heart,
  MessageSquare,
  Play,
  Star,
  ExternalLink,
  Tv,
} from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { resolveYouTubeEmbed } from './VideoCard';

export const SpotlightRecipeRow: React.FC = () => {
  const lavaRecipe = RECIPES[0]; // Sıcak Çikolatalı Lava Kek
  const { isFavorite, toggleFavorite, customVideoUrls } = useApp();
  const [playingSpotlightVideo, setPlayingSpotlightVideo] = useState(false);
  const [likedLocal, setLikedLocal] = useState(false);

  const fav = isFavorite(lavaRecipe.slug);
  const customUrl = customVideoUrls[lavaRecipe.slug] || customVideoUrls['vid-1'] || '';
  const { embedUrl, watchUrl } = resolveYouTubeEmbed(
    customUrl || lavaRecipe.youtubeVideo.youtubeId,
    lavaRecipe.youtubeVideo.embedUrl
  );

  return (
    <section aria-label="Günün Öne Çıkan Tarifi ve Videosu" className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left 7 Cols: Featured Lava Cake Card matching Reference Image */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-sm rounded-3xl p-4 sm:p-5 shadow-soft border border-pastelPink-100 flex flex-col sm:flex-row gap-5 items-center">
            {/* Large Lava Cake Image */}
            <div className="relative w-full sm:w-[54%] h-60 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0 group shadow-md">
              <Link to={`/tarif/${lavaRecipe.slug}`} className="block w-full h-full">
                <SafeImage
                  src={lavaRecipe.image}
                  alt={lavaRecipe.title}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Top-left Öne Çıkan Tarif pill */}
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastelPink-500/95 text-white text-xs font-bold shadow-btn-pink">
                <Star className="w-3.5 h-3.5 fill-white" />
                Öne Çıkan Tarif
              </span>

              {/* Bottom-right Play Video Trigger */}
              <button
                type="button"
                onClick={() => setPlayingSpotlightVideo(true)}
                aria-label="Lava Kek tarif videosunu oynat"
                title="Videoyu Oynat"
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-choco-900/80 hover:bg-pastelPink-500 text-white flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg transition-all hover:scale-110"
              >
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </button>
            </div>

            {/* Right Text Details */}
            <div className="flex-1 flex flex-col justify-between space-y-3.5 py-1">
              <div className="space-y-2.5">
                <Link
                  to={`/tarif/${lavaRecipe.slug}`}
                  className="block hover:text-pastelPink-600 transition-colors"
                >
                  <h2 className="font-display text-2xl sm:text-[26px] font-bold text-choco-800 leading-tight">
                    Sıcak Çikolatalı
                    <br />
                    Lava Kek
                  </h2>
                </Link>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-choco-600 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <ChefHat className="w-4 h-4 text-choco-500" />
                    {lavaRecipe.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-choco-500" />
                    30 dk
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-choco-600 leading-relaxed">
                  Dışı yumuşacık, içi akışkan çikolata dolu bu lava kek tarifi, misafirlerinizi
                  etkileyecek. Hem pratik hem de çok lezzetli!
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2.5">
                  <Link
                    to={`/tarif/${lavaRecipe.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pastelPink-400 to-pastelPink-500 hover:from-pastelPink-500 hover:to-pastelPink-600 text-white text-sm font-bold shadow-btn-pink hover:scale-105 transition-all"
                  >
                    <span>Tarifi Gör</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(lavaRecipe.slug)}
                    aria-label={fav ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                    className={`p-2.5 rounded-full border transition-all ${
                      fav
                        ? 'bg-pastelPink-50 border-pastelPink-300 text-pastelPink-600'
                        : 'bg-cream-100 border-cream-300 text-choco-600 hover:text-pastelPink-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${fav ? 'fill-pastelPink-500 text-pastelPink-500' : ''}`} />
                  </button>
                </div>

                {/* Like & Comment stats with Sample Data disclosure */}
                <div className="flex items-center gap-4 text-xs text-choco-500 pt-1">
                  <button
                    type="button"
                    onClick={() => setLikedLocal((p) => !p)}
                    className="inline-flex items-center gap-1.5 hover:text-pastelPink-600 transition-colors"
                    title="Örnek popülerlik verisi (Beğenmek için tıklayın)"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        likedLocal ? 'fill-pastelPink-500 text-pastelPink-500' : 'text-pastelPink-400'
                      }`}
                    />
                    <span className="font-semibold">
                      {likedLocal ? '1.241 beğeni' : '1.2K beğeni'}
                    </span>
                  </button>

                  <Link
                    to={`/tarif/${lavaRecipe.slug}#yorumlar`}
                    className="inline-flex items-center gap-1.5 hover:text-pastelPink-600 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-choco-400" />
                    <span className="font-semibold">{lavaRecipe.reviewCount} yorum</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Tarif Videosu Card matching Reference Image */}
          <div className="lg:col-span-5 bg-pastelPink-50/80 rounded-3xl p-4 sm:p-5 shadow-soft border border-pastelPink-100 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-choco-800">
                  <Tv className="w-4 h-4 text-pastelPink-500" />
                </span>
                <h3 className="font-display text-lg font-bold text-choco-800">Tarif Videosu</h3>
              </div>

              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-pastelPink-100 text-pastelPink-600 text-xs font-bold shadow-sm transition-colors"
              >
                <span className="w-4 h-3 rounded bg-red-600 text-white flex items-center justify-center text-[8px]">
                  ▶
                </span>
                <span>YouTube&apos;da İzle</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-choco-900 shadow-md">
              {playingSpotlightVideo ? (
                <iframe
                  src={`${embedUrl}?autoplay=1&rel=0`}
                  title={lavaRecipe.youtubeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setPlayingSpotlightVideo(true)}
                  className="relative w-full h-full group cursor-pointer"
                >
                  <SafeImage
                    src="/images/video-lava-ref.png"
                    fallbackSrc="/images/recipes/lava-kek.jpg"
                    alt="Sıcak Çikolatalı Lava Kek Hazırlanış Videosu"
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                  <button
                    type="button"
                    aria-label="Lava Kek videosunu sayfa içinde oynat"
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-choco-900/80 hover:bg-pastelPink-500 text-white flex items-center justify-center shadow-xl border-2 border-white/60 group-hover:scale-110 transition-all"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Direct Link below Video to Recipe Detail */}
            <div className="mt-3 pt-2.5 border-t border-pastelPink-200/60 flex items-center justify-between text-xs">
              <span className="text-choco-600 font-medium">
                Süre: <strong>{lavaRecipe.youtubeVideo.duration}</strong> • Adım adım anlatım
              </span>
              <Link
                to={`/tarif/${lavaRecipe.slug}`}
                className="font-bold text-pastelPink-600 hover:text-pastelPink-700 inline-flex items-center gap-1"
              >
                Tarif Detayına Git <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
