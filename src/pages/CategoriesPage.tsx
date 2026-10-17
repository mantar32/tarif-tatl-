import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES, RECIPES } from '../data/recipes';
import { CategorySlug } from '../types/recipe';
import { CategoryCard } from '../components/CategoryCard';
import { RecipeCard } from '../components/RecipeCard';

export const CategoriesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = (searchParams.get('kat') as CategorySlug | null) || null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSlug]);

  const activeCategory = CATEGORIES.find((c) => c.slug === selectedSlug) || null;

  const matchingRecipes = selectedSlug
    ? RECIPES.filter(
        (r) =>
          r.categorySlug === selectedSlug ||
          (r.secondaryCategories && r.secondaryCategories.includes(selectedSlug))
      )
    : RECIPES;

  const handleSelectCategory = (slug: CategorySlug) => {
    if (selectedSlug === slug) {
      setSearchParams({});
    } else {
      setSearchParams({ kat: slug });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-pastelPink-100 via-pastelPink-50 to-cream-200 rounded-3xl p-6 sm:p-8 border border-pastelPink-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-pastelPink-600 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> 10 Özel Tatlı Kategorisi
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-choco-900">
            Tatlı Kategorileri
          </h1>
          <p className="text-xs sm:text-sm text-choco-600 max-w-xl">
            Keklerden şerbetli tatlılara, akışkan çikolatalardan ferah meyveli tartlara kadar ilgi
            alanınıza göre bir kategori seçin.
          </p>
        </div>

        {selectedSlug && (
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="px-5 py-2.5 rounded-full bg-choco-800 hover:bg-choco-900 text-white text-xs sm:text-sm font-bold shadow transition-all"
          >
            Tüm Kategorileri Göster
          </button>
        )}
      </div>

      {/* All 10 Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            isSelected={selectedSlug === cat.slug}
            onSelect={handleSelectCategory}
          />
        ))}
      </div>

      {/* Filtered Recipes for Selected Category */}
      <section className="space-y-6 pt-4 border-t border-cream-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-choco-800">
              {activeCategory ? `${activeCategory.name} Tarifleri` : 'Tüm Kategorilerdeki Tarifler'}
            </h2>
            <p className="text-xs sm:text-sm text-choco-500 mt-1">
              {activeCategory
                ? activeCategory.description
                : 'Bir kategori kartına tıklayarak sadece o gruba ait tatlıları filtreleyebilirsiniz.'}
            </p>
          </div>
          <Link
            to="/tarifler"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pastelPink-600 hover:underline"
          >
            <span>Gelişmiş Arama Sayfasına Git</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {matchingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};
