import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Award,
  PlayCircle,
  Info,
  CakeSlice,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CATEGORIES, RECIPES, RECIPE_VIDEOS } from '../data/recipes';
import { CategorySlug } from '../types/recipe';
import { HeroSection } from '../components/HeroSection';
import { CategoryCard } from '../components/CategoryCard';
import { SpotlightRecipeRow } from '../components/SpotlightRecipeRow';
import { RecipeCard } from '../components/RecipeCard';
import { VideoCard } from '../components/VideoCard';
import { NewsletterSection } from '../components/NewsletterSection';

export const HomePage: React.FC = () => {
  const [showAllCategories, setShowAllCategories] = useState(true);
  const [activeFeaturedCat, setActiveFeaturedCat] = useState<CategorySlug | 'tumu'>('tumu');

  const displayedCategories = showAllCategories ? CATEGORIES : CATEGORIES.slice(0, 6);

  const featuredRecipes = RECIPES.filter((r) => r.isFeatured).filter((r) => {
    if (activeFeaturedCat === 'tumu') return true;
    return (
      r.categorySlug === activeFeaturedCat ||
      (r.secondaryCategories && r.secondaryCategories.includes(activeFeaturedCat))
    );
  });

  // Top 4 Most Liked / Highest Rated Recipes
  const mostLikedRecipes = [...RECIPES]
    .sort((a, b) => b.likesCount - a.likesCount || b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="space-y-4 sm:space-y-6 pb-8">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Popüler Kategoriler Section matching Reference Image */}
      <section aria-labelledby="populer-kategoriler-heading" className="pt-6 sm:pt-8 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-pastelPink-100 border border-pastelPink-200 flex items-center justify-center shadow-sm flex-shrink-0">
                <img
                  src="/images/mascot-cupcake.png"
                  alt=""
                  aria-hidden="true"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <h2
                  id="populer-kategoriler-heading"
                  className="font-display text-2xl sm:text-3xl font-bold text-choco-800"
                >
                  Popüler Kategoriler
                </h2>
                <p className="text-xs sm:text-sm text-choco-500 mt-0.5">
                  İlgi alanına göre tariflerini kolayca keşfet.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setShowAllCategories((prev) => !prev)}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-cream-200/80 hover:bg-cream-300 text-choco-700 text-xs font-bold transition-colors"
              >
                {showAllCategories ? (
                  <>
                    <span>İlk 6 Kategori</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>10 Kategoriyi Göster</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <Link
                to="/kategoriler"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pastelPink-600 hover:text-pastelPink-700 group"
              >
                <span>Tüm Kategoriler</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Responsive Category Grid (6 cols on desktop just like reference, 10 total cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {displayedCategories.slice(0, 6).map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <CategoryCard category={cat} />
              </motion.div>
            ))}
          </div>

          {/* Remaining 4 Categories Row */}
          {showAllCategories && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 pt-1">
              {displayedCategories.slice(6).map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                >
                  <CategoryCard category={cat} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Reference Spotlight Row: Sıcak Çikolatalı Lava Kek + Tarif Videosu */}
      <SpotlightRecipeRow />

      {/* 4. Öne Çıkan Tarifler (12 Featured Recipes Grid) */}
      <section aria-labelledby="one-cikan-tarifler-heading" className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pastelPink-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Şefin Seçkisi • 12 Özel Tarif</span>
              </div>
              <h2
                id="one-cikan-tarifler-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-choco-800"
              >
                Öne Çıkan Tarifler
              </h2>
              <p className="text-xs sm:text-sm text-choco-500">
                Tam ölçülü, adım adım aşama fotoğraflı ve videolu en sevilen tatlılarımız.
              </p>
            </div>

            {/* Quick Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {[
                { slug: 'tumu', label: 'Tümü (12)' },
                { slug: 'cikolatali-tatlilar', label: 'Çikolatalı' },
                { slug: 'cheesecake', label: 'Cheesecake' },
                { slug: 'sutlu-tatlilar', label: 'Sütlü' },
                { slug: 'kekler', label: 'Kekler' },
                { slug: 'meyveli-tatlilar', label: 'Meyveli' },
              ].map((tab) => (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActiveFeaturedCat(tab.slug as CategorySlug | 'tumu')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeFeaturedCat === tab.slug
                      ? 'bg-pastelPink-500 text-white shadow-btn-pink'
                      : 'bg-white hover:bg-pastelPink-50 text-choco-700 border border-pastelPink-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/tarifler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-pastelPink-50 text-choco-800 font-bold text-sm border border-pastelPink-200 shadow-soft hover:scale-[1.02] transition-all"
            >
              <CakeSlice className="w-4 h-4 text-pastelPink-500" />
              <span>Tüm Tarifleri ve Gelişmiş Filtreleri Aç ({RECIPES.length} Tarif)</span>
              <ArrowRight className="w-4 h-4 text-pastelPink-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. En Çok Beğenilen Tarifler (With Sample Data Disclosure) */}
      <section
        id="populer-tarifler"
        aria-labelledby="en-cok-begenilen-heading"
        className="py-8 sm:py-10 bg-gradient-to-b from-pastelPink-50/70 via-cream-100 to-cream-100 border-y border-pastelPink-100/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Popülerlik Sıralaması</span>
              </div>
              <h2
                id="en-cok-begenilen-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-choco-800"
              >
                En Çok Beğenilen Tarifler
              </h2>
              <p className="text-xs sm:text-sm text-choco-600">
                Okuyucularımızın en çok denediği ve tam puan verdiği favori tatlılar.
              </p>
            </div>

            {/* Explicit Sample Data Disclosure Notice */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-amber-200 text-xs text-choco-600 shadow-sm max-w-md">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>
                <strong>Bilgilendirme:</strong> Başlangıç puan ve beğeni sayıları tanıtım amaçlı{' '}
                <em className="font-semibold text-choco-800">örnek verilerdir</em>; sizin verdiğiniz
                puanlar cihazınızda canlı olarak eklenir.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostLikedRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} showRankBadge={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Video Tarifleri Section: "İzle, Öğren, Tatlı Yap!" */}
      <section aria-labelledby="video-tarifleri-heading" className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pastelPink-600 uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>YouTube Video Rehberi</span>
              </div>
              <h2
                id="video-tarifleri-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-choco-800"
              >
                İzle, Öğren, Tatlı Yap!
              </h2>
              <p className="text-xs sm:text-sm text-choco-500">
                Kıvam ve teknik detayları kaçırmamak için videoları sayfa içinde oynatın veya ilgili
                tarife geçin.
              </p>
            </div>

            <Link
              to="/videolar"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pastelPink-600 hover:text-pastelPink-700 group"
            >
              <span>Tüm Videoları Gör</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECIPE_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter Subscription Banner */}
      <NewsletterSection />
    </div>
  );
};
