export type DifficultyLevel = 'Kolay' | 'Orta' | 'Zor';

export type CategorySlug =
  | 'kekler'
  | 'kurabiyeler'
  | 'sutlu-tatlilar'
  | 'meyveli-tatlilar'
  | 'cikolatali-tatlilar'
  | 'dondurmalar'
  | 'serbetli-tatlilar'
  | 'cheesecake'
  | 'tartlar-ve-turtalar'
  | 'pratik-tatlilar';

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  recipeCount: number;
  description: string;
  image: string;
  fallbackImage: string;
  bgColor: string;
  accentColor: string;
  badgeText?: string;
}

export interface IngredientItem {
  id: string;
  name: string;
  amount: number;
  unit: string; // 'g', 'ml', 'adet', 'tatlı kaşığı', 'yemek kaşığı', 'tutam'
  secondaryMeasure?: string; // e.g. "(yaklaşık 1 su bardağı)"
  group?: string; // e.g., "Ana Karışım", "Sos İçin", "Üzeri İçin"
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  durationMinutes?: number;
  temperature?: string;
  image: string;
}

export interface RecipeReview {
  id: string;
  author: string;
  avatarBg: string;
  rating: number;
  date: string;
  comment: string;
  isSample?: boolean;
}

export interface RecipeVideo {
  id: string;
  title: string;
  youtubeId: string;
  embedUrl: string;
  watchUrl: string;
  duration: string;
  thumbnail: string;
  recipeSlug: string;
  recipeName: string;
  channelNote: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  categorySlug: CategorySlug;
  categoryName: string;
  secondaryCategories?: CategorySlug[];
  image: string;
  galleryImages?: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  difficulty: DifficultyLevel;
  servings: number;
  rating: number;
  reviewCount: number;
  likesCount: number;
  isFeatured?: boolean;
  isSpotlight?: boolean;
  createdAt: string;
  caloriesPerServing: number;
  bakingTemp?: string;
  ingredients: IngredientItem[];
  steps: RecipeStep[];
  proTips: string[];
  commonMistakes: string[];
  substitutions: {
    original: string;
    alternative: string;
    note: string;
  }[];
  storageTips: string;
  servingSuggestions: string[];
  allergens: string[];
  youtubeVideo: {
    title: string;
    youtubeId: string;
    embedUrl: string;
    watchUrl: string;
    duration: string;
    thumbnail: string;
  };
  sampleReviews: RecipeReview[];
}

export interface FilterState {
  searchQuery: string;
  category: CategorySlug | 'tumu';
  difficulty: DifficultyLevel | 'tumu';
  maxTotalTime: number | null; // e.g. 20, 30, 45, 60, null
  ingredientQuery: string;
  sortBy: 'populer' | 'yeni' | 'kisa-sure' | 'puan';
}
