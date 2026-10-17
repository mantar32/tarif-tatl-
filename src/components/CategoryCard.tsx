import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types/recipe';
import { SafeImage } from './SafeImage';
import { Tilt3DCard } from './Tilt3DCard';

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onSelect?: (slug: Category['slug']) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected = false,
  onSelect,
}) => {
  const content = (
    <Tilt3DCard intensity={6} className="h-full rounded-2xl">
      <div
        style={{ backgroundColor: category.bgColor }}
        className={`group h-full rounded-2xl p-3 sm:p-3.5 transition-all duration-300 shadow-soft hover:shadow-soft-lg border ${
          isSelected
            ? 'border-pastelPink-500 ring-2 ring-pastelPink-400/50'
            : 'border-white/80 hover:border-pastelPink-200'
        } flex flex-col justify-between`}
      >
        {/* Category Image Container */}
        <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden bg-white/60 mb-3 shadow-inner">
          <SafeImage
            src={category.image}
            fallbackSrc={category.fallbackImage}
            alt={`${category.name} kategorisi`}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
          {category.badgeText && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-pastelPink-600 shadow-sm">
              {category.badgeText}
            </span>
          )}
        </div>

        {/* Bottom Info Row matching Reference Card Layout */}
        <div className="flex items-center justify-between gap-2 pt-0.5 px-0.5">
          <div className="min-w-0">
            <h3 className="font-display text-sm sm:text-base font-bold text-choco-800 truncate group-hover:text-pastelPink-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-xs font-medium text-choco-500 mt-0.5">
              {category.recipeCount} Tarif
            </p>
          </div>

          <span
            style={{ backgroundColor: category.accentColor }}
            className="w-8 h-8 rounded-full text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:translate-x-0.5 group-hover:scale-110 transition-all"
            aria-hidden="true"
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Tilt3DCard>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(category.slug)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-500 rounded-2xl"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      to={`/kategoriler?kat=${category.slug}`}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-500 rounded-2xl"
    >
      {content}
    </Link>
  );
};
