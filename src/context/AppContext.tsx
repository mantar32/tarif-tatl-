import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterState, RecipeReview } from '../types/recipe';

interface AppContextType {
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  checkedIngredients: Record<string, string[]>;
  toggleIngredient: (recipeSlug: string, ingredientId: string) => void;
  clearCheckedIngredients: (recipeSlug: string) => void;
  customServings: Record<string, number>;
  setRecipeServings: (recipeSlug: string, count: number) => void;
  userReviews: Record<string, RecipeReview[]>;
  addUserReview: (recipeSlug: string, author: string, rating: number, comment: string) => void;
  customVideoUrls: Record<string, string>;
  setCustomVideoUrl: (idOrSlug: string, url: string) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  category: 'tumu',
  difficulty: 'tumu',
  maxTotalTime: null,
  ingredientQuery: '',
  sortBy: 'populer',
};

const STORAGE_KEYS = {
  FAVORITES: 'tatli_tarifler_favorites_v1',
  CHECKED_ING: 'tatli_tarifler_checked_ing_v1',
  SERVINGS: 'tatli_tarifler_servings_v1',
  REVIEWS: 'tatli_tarifler_reviews_v1',
  VIDEOS: 'tatli_tarifler_custom_videos_v1',
  FILTERS: 'tatli_tarifler_filters_v1',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

function loadStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() =>
    loadStorage<string[]>(STORAGE_KEYS.FAVORITES, ['sicak-cikolatali-lava-kek', 'san-sebastian-cheesecake'])
  );

  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, string[]>>(() =>
    loadStorage<Record<string, string[]>>(STORAGE_KEYS.CHECKED_ING, {})
  );

  const [customServings, setCustomServings] = useState<Record<string, number>>(() =>
    loadStorage<Record<string, number>>(STORAGE_KEYS.SERVINGS, {})
  );

  const [userReviews, setUserReviews] = useState<Record<string, RecipeReview[]>>(() =>
    loadStorage<Record<string, RecipeReview[]>>(STORAGE_KEYS.REVIEWS, {})
  );

  const [customVideoUrls, setCustomVideoUrls] = useState<Record<string, string>>(() =>
    loadStorage<Record<string, string>>(STORAGE_KEYS.VIDEOS, {})
  );

  const [filters, setFilters] = useState<FilterState>(() =>
    loadStorage<FilterState>(STORAGE_KEYS.FILTERS, DEFAULT_FILTERS)
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CHECKED_ING, JSON.stringify(checkedIngredients));
    } catch {}
  }, [checkedIngredients]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVINGS, JSON.stringify(customServings));
    } catch {}
  }, [customServings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(userReviews));
    } catch {}
  }, [userReviews]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(customVideoUrls));
    } catch {}
  }, [customVideoUrls]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FILTERS, JSON.stringify(filters));
    } catch {}
  }, [filters]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  const toggleIngredient = (recipeSlug: string, ingredientId: string) => {
    setCheckedIngredients((prev) => {
      const current = prev[recipeSlug] || [];
      const updated = current.includes(ingredientId)
        ? current.filter((id) => id !== ingredientId)
        : [...current, ingredientId];
      return { ...prev, [recipeSlug]: updated };
    });
  };

  const clearCheckedIngredients = (recipeSlug: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [recipeSlug]: [] }));
  };

  const setRecipeServings = (recipeSlug: string, count: number) => {
    const clamped = Math.max(1, Math.min(32, count));
    setCustomServings((prev) => ({ ...prev, [recipeSlug]: clamped }));
  };

  const addUserReview = (recipeSlug: string, author: string, rating: number, comment: string) => {
    const colors = ['#FCE8EE', '#EBF3F9', '#F3E8F6', '#F9EFE6', '#E6F2EA'];
    const newReview: RecipeReview = {
      id: `user-rev-${Date.now()}`,
      author: author.trim() || 'Tatlı Sever',
      avatarBg: colors[Math.floor(Math.random() * colors.length)],
      rating,
      date: 'Şimdi (Bu Cihazda Kaydedildi)',
      comment: comment.trim(),
      isSample: false,
    };
    setUserReviews((prev) => ({
      ...prev,
      [recipeSlug]: [newReview, ...(prev[recipeSlug] || [])],
    }));
  };

  const setCustomVideoUrl = (idOrSlug: string, url: string) => {
    setCustomVideoUrls((prev) => ({ ...prev, [idOrSlug]: url.trim() }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        checkedIngredients,
        toggleIngredient,
        clearCheckedIngredients,
        customServings,
        setRecipeServings,
        userReviews,
        addUserReview,
        customVideoUrls,
        setCustomVideoUrl,
        filters,
        setFilters,
        resetFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
};
