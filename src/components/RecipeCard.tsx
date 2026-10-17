import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Clock,
  Flame,
  Users,
  Star,
  ArrowRight,
  ChefHat,
  Sparkles,
} from 'lucide-react';
import { Recipe } from '../types/recipe';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';
import { Tilt3DCard } from './Tilt3DCard';

interface RecipeCardProps {
  recipe: Recipe;
  showRankBadge?: number;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, showRankBadge }) => {
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(recipe.slug);

  const difficultyStyles = {
    Kolay: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Orta: 'bg-amber-50 text-amber-700 border-amber-200',
    Zor: 'bg-rose-50 text-rose-700 border-rose-200',
  }[recipe.difficulty];

  return (
    <Tilt3DCard intensity={5} className="h-full rounded-3xl">
      <article className="group h-full bg-white rounded-3xl border border-pastelPink-100/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden">
        {/* Image Header */}
        <div className="relative h-52 sm:h-56 overflow-hidden">
          <Link to={`/tarif/${recipe.slug}`} className="block w-full h-full">
            <SafeImage
              src={recipe.image}
              alt={recipe.title}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Subtle gradient overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-choco-900/50 via-transparent to-black/15"
          />

          {/* Top Left Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
            {showRankBadge ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-choco-900 text-xs font-extrabold shadow">
                #{showRankBadge} En Sevilen
              </span>
            ) : recipe.isSpotlight ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pastelPink-500 text-white text-xs font-bold shadow-btn-pink">
                <Sparkles className="w-3 h-3" /> Öne Çıkan
              </span>
            ) : null}
            <Link
              to={`/kategoriler?kat=${recipe.categorySlug}`}
              className="px-2.5 py-1 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-choco-800 text-xs font-bold shadow-sm transition-colors"
            >
              {recipe.categoryName}
            </Link>
          </div>

          {/* Top Right Favorite Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(recipe.slug);
            }}
            aria-label={fav ? `${recipe.title} tarifini favorilerden çıkar` : `${recipe.title} tarifini favorilere ekle`}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all hover:scale-110 active:scale-95 ${
              fav
                ? 'bg-pastelPink-500 text-white'
                : 'bg-white/90 text-choco-700 hover:text-pastelPink-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${fav ? 'fill-white' : ''}`} />
          </button>

          {/* Bottom Image Overlay: Rating & Servings */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs font-semibold">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{recipe.rating.toFixed(1)}</span>
              <span className="text-cream-200/80">({recipe.reviewCount})</span>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 text-pastelPink-300" />
              <span>{recipe.servings} Kişilik</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${difficultyStyles}`}
              >
                <ChefHat className="w-3 h-3" />
                {recipe.difficulty}
              </span>
              <span className="text-xs text-choco-500 font-medium">
                Toplam {recipe.totalTimeMinutes} dk
              </span>
            </div>

            <Link
              to={`/tarif/${recipe.slug}`}
              className="block focus:outline-none group-hover:text-pastelPink-600 transition-colors"
            >
              <h3 className="font-display text-lg font-bold text-choco-800 line-clamp-1">
                {recipe.title}
              </h3>
            </Link>

            <p className="text-xs sm:text-sm text-choco-600 line-clamp-2 leading-relaxed">
              {recipe.shortDescription}
            </p>
          </div>

          {/* Prep & Cook Times + Action Button */}
          <div className="pt-3 border-t border-cream-200 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs text-choco-600 bg-cream-100/80 rounded-2xl p-2.5">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-pastelPink-500 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-choco-500">Hazırlama</span>
                  <strong className="text-choco-800">{recipe.prepTimeMinutes} dk</strong>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border-l border-cream-300 pl-2">
                <Flame className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-choco-500">Pişirme</span>
                  <strong className="text-choco-800">
                    {recipe.cookTimeMinutes > 0 ? `${recipe.cookTimeMinutes} dk` : 'Pişirmesiz'}
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/tarif/${recipe.slug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-pastelPink-400 to-pastelPink-500 hover:from-pastelPink-500 hover:to-pastelPink-600 text-white text-xs sm:text-sm font-bold shadow-btn-pink hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Tarifi Gör</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Tilt3DCard>
  );
};
