import React, { useMemo } from 'react';
import { CakeSlice, RotateCcw, Sparkles } from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { useApp } from '../context/AppContext';
import { SearchFilterBar } from '../components/SearchFilterBar';
import { RecipeCard } from '../components/RecipeCard';

export const RecipesPage: React.FC = () => {
  const { filters, resetFilters } = useApp();

  const filteredRecipes = useMemo(() => {
    const q = filters.searchQuery.trim().toLocaleLowerCase('tr-TR');
    const ingQ = filters.ingredientQuery.trim().toLocaleLowerCase('tr-TR');

    const matches = RECIPES.filter((r) => {
      // Name / description search
      if (q) {
        const inTitle = r.title.toLocaleLowerCase('tr-TR').includes(q);
        const inDesc = r.shortDescription.toLocaleLowerCase('tr-TR').includes(q);
        const inCat = r.categoryName.toLocaleLowerCase('tr-TR').includes(q);
        if (!inTitle && !inDesc && !inCat) return false;
      }

      // Category filter
      if (filters.category !== 'tumu') {
        const isPrimary = r.categorySlug === filters.category;
        const isSecondary = r.secondaryCategories?.includes(filters.category);
        if (!isPrimary && !isSecondary) return false;
      }

      // Difficulty filter
      if (filters.difficulty !== 'tumu' && r.difficulty !== filters.difficulty) {
        return false;
      }

      // Prep / Total time filter
      if (filters.maxTotalTime !== null && r.totalTimeMinutes > filters.maxTotalTime) {
        return false;
      }

      // Ingredient search
      if (ingQ) {
        const hasIng = r.ingredients.some((i) =>
          i.name.toLocaleLowerCase('tr-TR').includes(ingQ)
        );
        if (!hasIng) return false;
      }

      return true;
    });

    // Sort
    return [...matches].sort((a, b) => {
      if (filters.sortBy === 'populer') return b.likesCount - a.likesCount;
      if (filters.sortBy === 'puan') return b.rating - a.rating || b.reviewCount - a.reviewCount;
      if (filters.sortBy === 'kisa-sure') return a.totalTimeMinutes - b.totalTimeMinutes;
      if (filters.sortBy === 'yeni') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return 0;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#361C12] via-[#532B1D] to-[#3B1E14] rounded-3xl p-6 sm:p-8 text-white shadow-soft relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-pastelPink-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Tüm Tatlı Tarifleri Arşivi
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Mutfağınızı Tatlandıracak Tarifler
          </h1>
          <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
            Tarif adına, evinizdeki malzemelere, hazırlama süresine veya zorluk derecesine göre
            filtreleyerek aradığınız tatlıyı saniyeler içinde bulun.
          </p>
        </div>
      </div>

      {/* Interactive Search & Filter Bar */}
      <SearchFilterBar totalMatching={filteredRecipes.length} />

      {/* Results Grid or Descriptive Empty State */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-soft border border-pastelPink-100 max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-pastelPink-50 text-pastelPink-500 flex items-center justify-center">
            <CakeSlice className="w-8 h-8" />
          </div>
          <h2 className="font-display text-2xl font-bold text-choco-800">
            Aramanızla Eşleşen Tarif Bulunamadı
          </h2>
          <p className="text-sm text-choco-600 leading-relaxed">
            Seçtiğiniz kriterlere (
            {filters.searchQuery && `"${filters.searchQuery}" `}
            {filters.ingredientQuery && `malzeme: "${filters.ingredientQuery}" `}
            {filters.maxTotalTime && `süre ≤ ${filters.maxTotalTime} dk`}
            ) uygun bir tatlı tarifi bulamadık. Filtreleri sıfırlayarak tüm lezzetlerimizi tekrar
            görüntüleyebilirsiniz.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-sm font-bold shadow-btn-pink transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tüm Filtreleri Temizle</span>
          </button>
        </div>
      )}
    </div>
  );
};
