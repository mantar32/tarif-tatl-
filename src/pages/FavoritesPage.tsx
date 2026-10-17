import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';

export const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite } = useApp();

  const favoriteRecipes = RECIPES.filter((r) => favorites.includes(r.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      <div className="bg-gradient-to-r from-pastelPink-100 via-pastelPink-50 to-cream-100 rounded-3xl p-6 sm:p-8 border border-pastelPink-200 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-pastelPink-600 text-xs font-bold shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-pastelPink-500 text-pastelPink-500" /> Kişisel Tarif
            Defteriniz
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-choco-900">
            Favori Tariflerim ({favoriteRecipes.length})
          </h1>
          <p className="text-xs sm:text-sm text-choco-600">
            Beğendiğiniz ve tekrar denemek istediğiniz tatlılar bu cihazda otomatik olarak saklanır.
          </p>
        </div>

        <Link
          to="/tarifler"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-xs sm:text-sm font-bold shadow-btn-pink transition-all self-start sm:self-auto"
        >
          <span>Yeni Tarifler Keşfet</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteRecipes.map((rec) => (
            <RecipeCard key={rec.id} recipe={rec} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-soft border border-pastelPink-100 max-w-xl mx-auto space-y-5">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-pastelPink-50 text-pastelPink-500 flex items-center justify-center">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-display text-2xl font-bold text-choco-800">
            Henüz Favori Tarif Eklememişsiniz
          </h2>
          <p className="text-sm text-choco-600 leading-relaxed">
            Tarif kartlarının sağ üst köşesindeki kalp ikonuna tıklayarak sevdiğiniz tatlıları
            buraya kaydedebilirsiniz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                toggleFavorite('sicak-cikolatali-lava-kek');
                toggleFavorite('san-sebastian-cheesecake');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-choco-800 text-xs sm:text-sm font-bold transition-colors"
            >
              <Sparkles className="w-4 h-4 text-pastelPink-500" />
              Örnek Popüler 2 Tarifi Ekle
            </button>
            <Link
              to="/tarifler"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-xs sm:text-sm font-bold shadow-btn-pink"
            >
              Tüm Tariflere Göz At
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
