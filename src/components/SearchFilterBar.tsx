import React from 'react';
import {
  Search,
  SlidersHorizontal,
  Clock,
  ChefHat,
  Sparkles,
  RotateCcw,
  Utensils,
} from 'lucide-react';
import { CATEGORIES } from '../data/recipes';
import { CategorySlug, DifficultyLevel } from '../types/recipe';
import { useApp } from '../context/AppContext';

interface SearchFilterBarProps {
  totalMatching: number;
  compact?: boolean;
}

const POPULAR_INGREDIENTS = ['Çikolata', 'Çilek', 'Süt', 'Labne', 'Kakao', 'Elma', 'Fındık', 'Krema'];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  totalMatching,
  compact = false,
}) => {
  const { filters, setFilters, resetFilters } = useApp();

  const hasActiveFilters =
    filters.searchQuery.trim() !== '' ||
    filters.category !== 'tumu' ||
    filters.difficulty !== 'tumu' ||
    filters.maxTotalTime !== null ||
    filters.ingredientQuery.trim() !== '' ||
    filters.sortBy !== 'populer';

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-soft border border-pastelPink-100 space-y-5">
      {/* Top Row: Search by Name & Search by Ingredient & Sort */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Recipe Title Search */}
        <div className="md:col-span-5 relative">
          <label htmlFor="filter-recipe-search" className="block text-xs font-bold text-choco-600 mb-1">
            Tarif Adına Göre Anlık Arama
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-pastelPink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="filter-recipe-search"
              type="search"
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Örn: Lava kek, San Sebastian, Sütlaç..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-sm text-choco-800 placeholder-choco-500/60 focus:outline-none focus:border-pastelPink-400 focus:ring-2 focus:ring-pastelPink-100"
            />
          </div>
        </div>

        {/* Ingredient Search */}
        <div className="md:col-span-4 relative">
          <label htmlFor="filter-ingredient-search" className="block text-xs font-bold text-choco-600 mb-1">
            Evdeki Malzemeye Göre Ara
          </label>
          <div className="relative">
            <Utensils className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="filter-ingredient-search"
              type="search"
              value={filters.ingredientQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, ingredientQuery: e.target.value }))}
              placeholder="Örn: bitter çikolata, çilek, elma..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-sm text-choco-800 placeholder-choco-500/60 focus:outline-none focus:border-pastelPink-400 focus:ring-2 focus:ring-pastelPink-100"
            />
          </div>
        </div>

        {/* Sort Select */}
        <div className="md:col-span-3">
          <label htmlFor="filter-sort" className="block text-xs font-bold text-choco-600 mb-1">
            Sıralama Ölçütü
          </label>
          <div className="relative">
            <SlidersHorizontal className="w-4 h-4 text-pastelPink-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="filter-sort"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as typeof prev.sortBy,
                }))
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-sm font-semibold text-choco-800 focus:outline-none focus:border-pastelPink-400"
            >
              <option value="populer">🔥 En Popüler Tarifler</option>
              <option value="puan">⭐ En Yüksek Puanlılar</option>
              <option value="yeni">✨ En Yeni Eklenenler</option>
              <option value="kisa-sure">⏱️ En Kısa Sürede Hazırlananlar</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Ingredient Chips */}
      {!compact && (
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-bold text-choco-600 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-pastelPink-500" /> Hızlı Malzeme Seç:
          </span>
          {POPULAR_INGREDIENTS.map((ing) => {
            const active = filters.ingredientQuery.toLocaleLowerCase('tr-TR') === ing.toLocaleLowerCase('tr-TR');
            return (
              <button
                key={ing}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    ingredientQuery: active ? '' : ing,
                  }))
                }
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  active
                    ? 'bg-pastelPink-500 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-pastelPink-50 text-choco-700 border border-cream-300'
                }`}
              >
                {ing}
              </button>
            );
          })}
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="space-y-1.5">
        <span className="block text-xs font-bold text-choco-600">Kategoriye Göre Filtrele</span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
          <button
            type="button"
            onClick={() => setFilters((prev) => ({ ...prev, category: 'tumu' }))}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filters.category === 'tumu'
                ? 'bg-choco-800 text-white shadow'
                : 'bg-cream-100 hover:bg-cream-200 text-choco-700'
            }`}
          >
            Tüm Kategoriler
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: prev.category === cat.slug ? 'tumu' : (cat.slug as CategorySlug),
                }))
              }
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                filters.category === cat.slug
                  ? 'bg-pastelPink-500 text-white shadow-btn-pink'
                  : 'bg-cream-100 hover:bg-pastelPink-50 text-choco-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Row: Difficulty, Prep Time & Result Count */}
      <div className="pt-2 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Difficulty Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-choco-600 flex items-center gap-1 mr-1">
              <ChefHat className="w-3.5 h-3.5 text-pastelPink-500" /> Zorluk:
            </span>
            {(['tumu', 'Kolay', 'Orta', 'Zor'] as const).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    difficulty: level as DifficultyLevel | 'tumu',
                  }))
                }
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  filters.difficulty === level
                    ? 'bg-pastelPink-500 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-cream-200 text-choco-700'
                }`}
              >
                {level === 'tumu' ? 'Tümü' : level}
              </button>
            ))}
          </div>

          {/* Max Time Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-choco-600 flex items-center gap-1 mr-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Süre:
            </span>
            {[
              { label: 'Tümü', val: null },
              { label: '≤ 30 dk', val: 30 },
              { label: '≤ 45 dk', val: 45 },
              { label: '≤ 60 dk', val: 60 },
            ].map((item) => (
              <button
                key={String(item.val)}
                type="button"
                onClick={() => setFilters((prev) => ({ ...prev, maxTotalTime: item.val }))}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  filters.maxTotalTime === item.val
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-cream-200 text-choco-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matching Count & Reset */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-bold text-choco-600 bg-pastelPink-50 px-3 py-1.5 rounded-full border border-pastelPink-200">
            {totalMatching} tarif listeleniyor
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream-200 hover:bg-cream-300 text-choco-800 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Sıfırla
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
