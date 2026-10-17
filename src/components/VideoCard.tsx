import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, ExternalLink, ArrowRight, Settings2, Check, RotateCcw } from 'lucide-react';
import { RecipeVideo } from '../types/recipe';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { Tilt3DCard } from './Tilt3DCard';

export function resolveYouTubeEmbed(inputUrlOrId: string, fallbackEmbed: string): {
  embedUrl: string;
  watchUrl: string;
} {
  const trimmed = inputUrlOrId.trim();
  if (!trimmed) {
    return {
      embedUrl: fallbackEmbed,
      watchUrl: fallbackEmbed.replace('/embed/', '/watch?v='),
    };
  }

  // Match 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return {
      embedUrl: `https://www.youtube.com/embed/${trimmed}`,
      watchUrl: `https://www.youtube.com/watch?v=${trimmed}`,
    };
  }

  try {
    const u = new URL(trimmed);
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      if (id) {
        return {
          embedUrl: `https://www.youtube.com/embed/${id}`,
          watchUrl: `https://www.youtube.com/watch?v=${id}`,
        };
      }
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) {
        return {
          embedUrl: `https://www.youtube.com/embed/${v}`,
          watchUrl: `https://www.youtube.com/watch?v=${v}`,
        };
      }
      if (u.pathname.startsWith('/embed/')) {
        const id = u.pathname.split('/embed/')[1]?.split('?')[0];
        return {
          embedUrl: trimmed,
          watchUrl: id ? `https://www.youtube.com/watch?v=${id}` : trimmed,
        };
      }
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/shorts/')[1]?.split('?')[0];
        if (id) {
          return {
            embedUrl: `https://www.youtube.com/embed/${id}`,
            watchUrl: `https://www.youtube.com/watch?v=${id}`,
          };
        }
      }
    }
  } catch {
    // Fall through
  }

  return {
    embedUrl: fallbackEmbed,
    watchUrl: trimmed.startsWith('http') ? trimmed : fallbackEmbed.replace('/embed/', '/watch?v='),
  };
}

interface VideoCardProps {
  video: RecipeVideo;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { customVideoUrls, setCustomVideoUrl } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [editingUrl, setEditingUrl] = useState(false);

  const savedCustomUrl = customVideoUrls[video.id] || '';
  const [urlInput, setUrlInput] = useState(savedCustomUrl || video.watchUrl);

  const { embedUrl, watchUrl } = resolveYouTubeEmbed(
    savedCustomUrl || video.youtubeId,
    video.embedUrl
  );

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomVideoUrl(video.id, urlInput);
    setEditingUrl(false);
    setIsPlaying(true);
  };

  const handleResetUrl = () => {
    setCustomVideoUrl(video.id, '');
    setUrlInput(video.watchUrl);
    setEditingUrl(false);
  };

  return (
    <Tilt3DCard intensity={4} glare={!isPlaying} className="h-full rounded-3xl">
      <div className="h-full bg-white rounded-3xl border border-pastelPink-100 shadow-soft hover:shadow-soft-lg transition-all flex flex-col overflow-hidden">
        {/* Video Player or Thumbnail */}
        <div className="relative aspect-video bg-choco-900 overflow-hidden">
          {isPlaying ? (
            <iframe
              src={`${embedUrl}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <SafeImage
                src={video.thumbnail}
                alt={video.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              {/* Center Play Button */}
              <button
                type="button"
                aria-label={`${video.title} videosunu oynat`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(true);
                }}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-pastelPink-500/95 hover:bg-pastelPink-600 text-white flex items-center justify-center shadow-btn-pink group-hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
              </button>

              {/* Duration Badge */}
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-xs font-bold">
                <Clock className="w-3 h-3 text-pastelPink-300" />
                {video.duration}
              </span>

              {/* Recipe Tag */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-choco-800 text-[11px] font-bold shadow">
                🎬 {video.recipeName}
              </span>
            </div>
          )}
        </div>

        {/* Video Info & Links */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2 text-xs text-choco-500">
              <span className="truncate font-medium">{video.channelNote}</span>
              <button
                type="button"
                onClick={() => setEditingUrl((prev) => !prev)}
                className="inline-flex items-center gap-1 text-[11px] text-pastelPink-600 hover:underline flex-shrink-0"
                title="Video URL bağlantısını özelleştir"
              >
                <Settings2 className="w-3 h-3" />
                URL Düzenle
              </button>
            </div>

            <h3 className="font-display text-base sm:text-lg font-bold text-choco-800 line-clamp-2">
              {video.title}
            </h3>
          </div>

          {/* Editable Video URL Panel for Developer/Custom Testing */}
          {editingUrl && (
            <form
              onSubmit={handleSaveCustomUrl}
              className="bg-cream-100 rounded-2xl p-3 border border-pastelPink-200 space-y-2 text-xs"
            >
              <label className="block font-bold text-choco-700">
                Özel YouTube Video URL veya ID:
              </label>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-3 py-1.5 rounded-xl bg-white border border-cream-300 text-choco-800 focus:outline-none focus:border-pastelPink-400"
              />
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-pastelPink-500 text-white font-bold hover:bg-pastelPink-600"
                >
                  <Check className="w-3.5 h-3.5" /> Kaydet & Oynat
                </button>
                {savedCustomUrl && (
                  <button
                    type="button"
                    onClick={handleResetUrl}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white text-choco-600 border border-cream-300 hover:bg-cream-200"
                  >
                    <RotateCcw className="w-3 h-3" /> Varsayılan
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Action Footer: Play/Watch + Go to Recipe */}
          <div className="pt-2 border-t border-cream-200 flex items-center justify-between gap-2">
            <Link
              to={`/tarif/${video.recipeSlug}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pastelPink-600 hover:text-pastelPink-700 group"
            >
              <span>İlgili Tarife Git</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <div className="flex items-center gap-2">
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-pastelPink-100 hover:bg-pastelPink-200 text-pastelPink-600 text-xs font-bold transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" /> Oynat
                </button>
              )}
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-choco-600 text-xs font-semibold transition-colors"
                title="YouTube üzerinde aç"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Tilt3DCard>
  );
};
