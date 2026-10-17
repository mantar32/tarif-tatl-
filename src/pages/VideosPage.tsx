import React from 'react';
import { PlayCircle, Info } from 'lucide-react';
import { RECIPES, RECIPE_VIDEOS } from '../data/recipes';
import { RecipeVideo } from '../types/recipe';
import { VideoCard } from '../components/VideoCard';

export const VideosPage: React.FC = () => {
  // Combine primary curated videos with all other recipe videos so every recipe video is accessible
  const primarySlugs = new Set(RECIPE_VIDEOS.map((v) => v.recipeSlug));
  const extraVideos: RecipeVideo[] = RECIPES.filter((r) => !primarySlugs.has(r.slug)).map(
    (r, idx) => ({
      id: `vid-extra-${idx}`,
      title: r.youtubeVideo.title,
      youtubeId: r.youtubeVideo.youtubeId,
      embedUrl: r.youtubeVideo.embedUrl,
      watchUrl: r.youtubeVideo.watchUrl,
      duration: r.youtubeVideo.duration,
      thumbnail: r.youtubeVideo.thumbnail,
      recipeSlug: r.slug,
      recipeName: r.title,
      channelNote: `${r.categoryName} • Uygulamalı Video`,
    })
  );

  const allVideos = [...RECIPE_VIDEOS, ...extraVideos];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      <div className="bg-gradient-to-r from-[#2E170F] via-[#4D2719] to-[#341A11] rounded-3xl p-6 sm:p-8 text-white shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastelPink-500/30 border border-pastelPink-300/40 text-pastelPink-200 text-xs font-bold">
            <PlayCircle className="w-4 h-4" /> YouTube Tarif Videoları
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            İzle, Öğren, Tatlı Yap!
          </h1>
          <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
            Resmi YouTube embed oynatıcısı ile tarifleri sayfa içinde izleyin, dilerseniz her video
            kartındaki <strong>“URL Düzenle”</strong> butonuyla kendi YouTube video bağlantılarınızı
            test edin.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-xs text-cream-100 max-w-sm flex items-start gap-2.5">
          <Info className="w-4 h-4 text-pastelPink-300 flex-shrink-0 mt-0.5" />
          <span>
            Tüm videolar doğrulanan resmi YouTube embed bağlantılarıyla çalışır ve altında ilgili
            tarifin detay sayfasına doğrudan geçiş bağlantısı yer alır.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allVideos.map((vid) => (
          <VideoCard key={vid.id} video={vid} />
        ))}
      </div>
    </div>
  );
};
