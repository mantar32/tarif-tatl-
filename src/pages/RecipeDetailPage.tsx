import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Flame,
  Users,
  ChefHat,
  Star,
  Heart,
  Printer,
  CheckCircle2,
  Circle,
  Plus,
  Minus,
  Lightbulb,
  AlertTriangle,
  RefreshCw,
  PackageCheck,
  Sparkles,
  ShieldAlert,
  Play,
  ExternalLink,
  MessageSquare,
  Send,
  ArrowLeft,
  Settings2,
  Check,
  Info,
} from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';
import { RecipeCard } from '../components/RecipeCard';
import { resolveYouTubeEmbed } from '../components/VideoCard';

export const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = RECIPES.find((r) => r.slug === slug);

  const {
    isFavorite,
    toggleFavorite,
    checkedIngredients,
    toggleIngredient,
    clearCheckedIngredients,
    customServings,
    setRecipeServings,
    userReviews,
    addUserReview,
    customVideoUrls,
    setCustomVideoUrl,
  } = useApp();

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [editingVideoUrl, setEditingVideoUrl] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');

  // Review Form State
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewError, setReviewError] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (recipe) {
      setSelectedImage(recipe.image);
      setVideoPlaying(false);
      const savedUrl = customVideoUrls[recipe.slug] || '';
      setCustomUrlInput(savedUrl || recipe.youtubeVideo.watchUrl);
    }
  }, [slug, recipe]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-pastelPink-100 flex items-center justify-center text-3xl">
          🧁
        </div>
        <h1 className="font-display text-3xl font-bold text-choco-800">Tarif Bulunamadı</h1>
        <p className="text-sm text-choco-600">
          Aradığınız tatlı tarifi taşınmış veya mevcut olmayabilir. Tüm tatlı tariflerimize göz
          atabilirsiniz.
        </p>
        <Link
          to="/tarifler"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pastelPink-500 text-white font-bold text-sm shadow-btn-pink"
        >
          <ArrowLeft className="w-4 h-4" /> Tüm Tariflere Dön
        </Link>
      </div>
    );
  }

  const fav = isFavorite(recipe.slug);
  const currentServings = customServings[recipe.slug] ?? recipe.servings;
  const scaleFactor = currentServings / recipe.servings;
  const checkedList = checkedIngredients[recipe.slug] || [];

  const formatAmount = (amount: number) => {
    const scaled = amount * scaleFactor;
    if (Number.isInteger(scaled)) return String(scaled);
    const rounded1 = Math.round(scaled * 10) / 10;
    return String(rounded1).replace('.', ',');
  };

  // Group ingredients by their group label
  const ingredientGroups = recipe.ingredients.reduce<Record<string, typeof recipe.ingredients>>(
    (acc, item) => {
      const grp = item.group || 'Malzemeler';
      if (!acc[grp]) acc[grp] = [];
      acc[grp].push(item);
      return acc;
    },
    {}
  );

  // Combine user reviews + sample reviews
  const localReviews = userReviews[recipe.slug] || [];
  const allReviews = [...localReviews, ...recipe.sampleReviews];

  // Calculate dynamic average rating when user adds reviews
  const dynamicRating =
    localReviews.length > 0
      ? (
          (recipe.rating * recipe.reviewCount +
            localReviews.reduce((s, r) => s + r.rating, 0)) /
          (recipe.reviewCount + localReviews.length)
        ).toFixed(1)
      : recipe.rating.toFixed(1);

  // Video URL resolution
  const savedCustomVideo = customVideoUrls[recipe.slug] || '';
  const { embedUrl, watchUrl } = resolveYouTubeEmbed(
    savedCustomVideo || recipe.youtubeVideo.youtubeId,
    recipe.youtubeVideo.embedUrl
  );

  // Similar recipes
  const similarRecipes = RECIPES.filter(
    (r) =>
      r.slug !== recipe.slug &&
      (r.categorySlug === recipe.categorySlug ||
        r.secondaryCategories?.includes(recipe.categorySlug))
  ).slice(0, 4);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim() || reviewComment.trim().length < 5) {
      setReviewError('Lütfen en az birkaç kelimelik deneyiminizi veya yorumunuzu yazın.');
      return;
    }
    addUserReview(recipe.slug, reviewAuthor, reviewRating, reviewComment);
    setReviewAuthor('');
    setReviewComment('');
    setReviewError('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 5000);
  };

  const gallery =
    recipe.galleryImages && recipe.galleryImages.length > 0
      ? recipe.galleryImages
      : [recipe.image, ...recipe.steps.map((s) => s.image)];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 print-container space-y-10">
      {/* Breadcrumb & Top Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 no-print">
        <nav aria-label="Sayfa Konumu" className="flex items-center gap-2 text-xs sm:text-sm text-choco-500">
          <Link to="/" className="hover:text-pastelPink-600 font-medium">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link
            to={`/kategoriler?kat=${recipe.categorySlug}`}
            className="hover:text-pastelPink-600 font-medium"
          >
            {recipe.categoryName}
          </Link>
          <span>/</span>
          <span className="text-choco-800 font-bold truncate max-w-[200px] sm:max-w-xs">
            {recipe.title}
          </span>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => toggleFavorite(recipe.slug)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
              fav
                ? 'bg-pastelPink-500 text-white border-pastelPink-500 shadow-btn-pink'
                : 'bg-white text-choco-800 border-pastelPink-200 hover:bg-pastelPink-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${fav ? 'fill-white' : 'text-pastelPink-500'}`} />
            <span>{fav ? 'Favorilerimde' : 'Favorilere Ekle'}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-cream-200 text-choco-800 text-xs sm:text-sm font-bold border border-cream-300 shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4 text-choco-600" />
            <span>Tarifi Yazdır</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card: Large High-Res Dessert Photo + Core Metadata */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-soft border border-pastelPink-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 6 Cols: Large Photo & Thumbnail Switcher */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-pastelPink-100">
            <SafeImage
              src={selectedImage || recipe.image}
              alt={recipe.title}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pastelPink-500 text-white text-xs font-bold shadow-btn-pink">
              {recipe.categoryName}
            </span>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{dynamicRating}</span>
              <span className="text-cream-200">
                ({recipe.reviewCount + localReviews.length} değerlendirme)
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-print">
            {Array.from(new Set(gallery)).map((imgUrl, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedImage(imgUrl)}
                className={`relative w-16 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  (selectedImage || recipe.image) === imgUrl
                    ? 'border-pastelPink-500 scale-105 shadow'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <SafeImage
                  src={imgUrl}
                  alt={`${recipe.title} görsel ${i + 1}`}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right 6 Cols: Title, Description, Times, Difficulty & Baking Temp */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-pastelPink-50 text-pastelPink-600 text-xs font-bold border border-pastelPink-200">
                ✨ Tam Ölçülü Pastane Tarifi
              </span>
              {recipe.bakingTemp && (
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                  🔥 Fırın: {recipe.bakingTemp}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-choco-900 leading-tight">
              {recipe.title}
            </h1>

            <p className="text-sm sm:text-base text-choco-600 leading-relaxed">
              {recipe.fullDescription}
            </p>
          </div>

          {/* 5 Key Metric Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <div className="bg-cream-100 rounded-2xl p-3 text-center border border-cream-200">
              <Clock className="w-4 h-4 text-pastelPink-500 mx-auto mb-1" />
              <span className="block text-[11px] text-choco-500">Hazırlama</span>
              <strong className="text-sm font-bold text-choco-800">
                {recipe.prepTimeMinutes} dk
              </strong>
            </div>

            <div className="bg-cream-100 rounded-2xl p-3 text-center border border-cream-200">
              <Flame className="w-4 h-4 text-amber-600 mx-auto mb-1" />
              <span className="block text-[11px] text-choco-500">Pişirme</span>
              <strong className="text-sm font-bold text-choco-800">
                {recipe.cookTimeMinutes > 0 ? `${recipe.cookTimeMinutes} dk` : 'Yok'}
              </strong>
            </div>

            <div className="bg-pastelPink-50 rounded-2xl p-3 text-center border border-pastelPink-200">
              <Sparkles className="w-4 h-4 text-pastelPink-600 mx-auto mb-1" />
              <span className="block text-[11px] text-pastelPink-600 font-medium">Toplam Süre</span>
              <strong className="text-sm font-bold text-choco-900">
                {recipe.totalTimeMinutes} dk
              </strong>
            </div>

            <div className="bg-cream-100 rounded-2xl p-3 text-center border border-cream-200">
              <ChefHat className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <span className="block text-[11px] text-choco-500">Zorluk</span>
              <strong className="text-sm font-bold text-choco-800">{recipe.difficulty}</strong>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-cream-100 rounded-2xl p-3 text-center border border-cream-200">
              <Users className="w-4 h-4 text-pastelPink-500 mx-auto mb-1" />
              <span className="block text-[11px] text-choco-500">Kalori / Pors.</span>
              <strong className="text-sm font-bold text-choco-800">
                {recipe.caloriesPerServing} kcal
              </strong>
            </div>
          </div>

          {/* Allergen Notice Bar */}
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-choco-700">
              <strong className="font-bold text-choco-900">Alerjen Bilgileri: </strong>
              {recipe.allergens.join(' • ')}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Left 5 Cols (Ingredients + Portion Calculator + Video) | Right 7 Cols (Steps with Photos) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portion Scaler, Interactive Ingredients Checklist & Recipe Video */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
          {/* Ingredients & Portion Scaler Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-soft border border-pastelPink-100 space-y-5">
            <div className="flex items-center justify-between gap-2 border-b border-cream-200 pb-4">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-choco-800">
                  Malzeme Listesi
                </h2>
                <p className="text-xs text-choco-500 mt-0.5">
                  Gram ve mililitre hassasiyetinde tam ölçüler
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-pastelPink-50 text-pastelPink-600 text-xs font-bold">
                {checkedList.length} / {recipe.ingredients.length} Hazır
              </span>
            </div>

            {/* Interactive Portion Calculator */}
            <div className="bg-gradient-to-r from-pastelPink-50 to-cream-100 rounded-2xl p-4 border border-pastelPink-200/80 space-y-3 no-print">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-choco-800 block">
                    Porsiyon Hesaplayıcı
                  </span>
                  <span className="text-[11px] text-choco-500">
                    Miktarlar otomatik olarak yeniden hesaplanır
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 shadow-sm border border-pastelPink-200">
                  <button
                    type="button"
                    onClick={() => setRecipeServings(recipe.slug, currentServings - 1)}
                    disabled={currentServings <= 1}
                    aria-label="Porsiyonu azalt"
                    className="w-7 h-7 rounded-full bg-pastelPink-100 hover:bg-pastelPink-200 disabled:opacity-40 text-choco-800 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="min-w-[68px] text-center text-sm font-extrabold text-choco-900">
                    {currentServings} Kişilik
                  </span>
                  <button
                    type="button"
                    onClick={() => setRecipeServings(recipe.slug, currentServings + 1)}
                    aria-label="Porsiyonu artır"
                    className="w-7 h-7 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quick Portion Presets */}
              <div className="flex items-center justify-between gap-1.5 pt-1">
                {[2, 4, 6, 8, 12].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setRecipeServings(recipe.slug, preset)}
                    className={`flex-1 py-1 rounded-xl text-xs font-bold transition-all ${
                      currentServings === preset
                        ? 'bg-choco-800 text-white shadow-sm'
                        : 'bg-white/80 hover:bg-white text-choco-700 border border-cream-300'
                    }`}
                  >
                    {preset} Kişi
                  </button>
                ))}
              </div>
            </div>

            {/* Grouped Ingredients Checklist */}
            <div className="space-y-4">
              {Object.entries(ingredientGroups).map(([groupName, items]) => (
                <div key={groupName} className="space-y-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-pastelPink-600">
                    {groupName}
                  </h3>
                  <ul className="space-y-1.5">
                    {items.map((ing) => {
                      const isDone = checkedList.includes(ing.id);
                      return (
                        <li key={ing.id}>
                          <button
                            type="button"
                            onClick={() => toggleIngredient(recipe.slug, ing.id)}
                            className={`w-full text-left flex items-start justify-between gap-3 p-2.5 rounded-xl border transition-all ${
                              isDone
                                ? 'bg-emerald-50/60 border-emerald-200 text-choco-500 line-through'
                                : 'bg-cream-50/70 hover:bg-pastelPink-50/40 border-cream-200 text-choco-800'
                            }`}
                          >
                            <div className="flex items-start gap-2.5 min-w-0">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="w-4 h-4 text-pastelPink-400 flex-shrink-0 mt-0.5" />
                              )}
                              <span className="text-xs sm:text-sm font-medium leading-snug">
                                {ing.name}
                              </span>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <span className="text-xs sm:text-sm font-extrabold text-choco-900">
                                {formatAmount(ing.amount)} {ing.unit}
                              </span>
                              {ing.secondaryMeasure && scaleFactor === 1 && (
                                <span className="block text-[10px] text-choco-500">
                                  {ing.secondaryMeasure}
                                </span>
                              )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {checkedList.length > 0 && (
              <button
                type="button"
                onClick={() => clearCheckedIngredients(recipe.slug)}
                className="w-full py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-xs font-bold text-choco-600 transition-colors no-print"
              >
                İşaretlenen Malzemeleri Sıfırla
              </button>
            )}
          </div>

          {/* Recipe Preparation Video Card (Official YouTube Embed + Customizable URL) */}
          <div className="bg-pastelPink-50/85 rounded-3xl p-5 shadow-soft border border-pastelPink-200 space-y-3.5 no-print">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pastelPink-600 block">
                  Adım Adım Video Rehberi
                </span>
                <h3 className="font-display text-lg font-bold text-choco-800">
                  Tarifin Yapılış Videosu
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingVideoUrl((p) => !p)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-pastelPink-600 text-xs font-bold shadow-sm hover:bg-pastelPink-100"
              >
                <Settings2 className="w-3.5 h-3.5" />
                URL Değiştir
              </button>
            </div>

            {editingVideoUrl && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCustomVideoUrl(recipe.slug, customUrlInput);
                  setEditingVideoUrl(false);
                  setVideoPlaying(true);
                }}
                className="bg-white rounded-2xl p-3 border border-pastelPink-200 space-y-2 text-xs"
              >
                <label className="block font-bold text-choco-700">
                  YouTube Video Bağlantısı (Embed veya Watch URL):
                </label>
                <input
                  type="text"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3 py-1.5 rounded-xl bg-cream-50 border border-cream-300 text-choco-800"
                />
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-pastelPink-500 text-white font-bold"
                  >
                    <Check className="w-3.5 h-3.5" /> Uygula & Oynat
                  </button>
                  {savedCustomVideo && (
                    <button
                      type="button"
                      onClick={() => {
                        setCustomVideoUrl(recipe.slug, '');
                        setCustomUrlInput(recipe.youtubeVideo.watchUrl);
                        setEditingVideoUrl(false);
                      }}
                      className="px-3 py-1.5 rounded-full bg-cream-200 text-choco-700 font-semibold"
                    >
                      Varsayılana Dön
                    </button>
                  )}
                </div>
              </form>
            )}

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-choco-900 shadow-md">
              {videoPlaying ? (
                <iframe
                  src={`${embedUrl}?autoplay=1&rel=0`}
                  title={recipe.youtubeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setVideoPlaying(true)}
                  className="relative w-full h-full group cursor-pointer"
                >
                  <SafeImage
                    src={recipe.youtubeVideo.thumbnail}
                    fallbackSrc={recipe.image}
                    alt={recipe.youtubeVideo.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                  <button
                    type="button"
                    aria-label="Videoyu oynat"
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white flex items-center justify-center shadow-btn-pink group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/75 text-white text-xs font-bold">
                    {recipe.youtubeVideo.duration}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-choco-600 font-medium truncate max-w-[200px]">
                {recipe.youtubeVideo.title}
              </span>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-pastelPink-600 hover:underline flex-shrink-0"
              >
                <span>YouTube&apos;da Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Step-by-Step Instructions with Photos, Pro Tips, Mistakes, Substitutions, Storage & Serving */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step-by-Step Instructions */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-soft border border-pastelPink-100 space-y-6">
            <div className="border-b border-cream-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-choco-800">
                  Adım Adım Hazırlanışı
                </h2>
                <p className="text-xs sm:text-sm text-choco-500 mt-0.5">
                  Her aşamayı görselleri ve sıcaklık/süre notlarıyla takip edin
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cream-100 text-choco-800 text-xs font-bold">
                {recipe.steps.length} Aşama
              </span>
            </div>

            <div className="space-y-6">
              {recipe.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="rounded-2xl bg-cream-50/70 border border-cream-200 p-4 sm:p-5 space-y-4 hover:border-pastelPink-200 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-pastelPink-400 to-pastelPink-500 text-white font-display font-bold text-base flex items-center justify-center shadow-sm">
                        {step.stepNumber}
                      </span>
                      <h3 className="font-display text-lg font-bold text-choco-900">
                        {step.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold">
                      {step.temperature && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                          🌡️ {step.temperature}
                        </span>
                      )}
                      {step.durationMinutes && (
                        <span className="px-2.5 py-1 rounded-full bg-pastelPink-100 text-pastelPink-700">
                          ⏱️ {step.durationMinutes} dk
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <p className="text-sm text-choco-700 leading-relaxed">{step.description}</p>
                      {step.tip && (
                        <div className="bg-pastelPink-50/90 border-l-4 border-pastelPink-400 rounded-r-xl p-3 text-xs text-choco-700">
                          <strong className="text-pastelPink-700 block mb-0.5">
                            💡 Şefin Aşama Notu:
                          </strong>
                          {step.tip}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-5">
                      <SafeImage
                        src={step.image}
                        alt={`${recipe.title} - Adım ${step.stepNumber}: ${step.title}`}
                        wrapperClassName="w-full h-40 sm:h-36 rounded-xl shadow-sm border border-white"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips & Common Mistakes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Püf Noktaları */}
            <div className="bg-emerald-50/60 rounded-3xl p-5 sm:p-6 border border-emerald-200/80 space-y-3.5">
              <div className="flex items-center gap-2.5 text-emerald-900">
                <span className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Lightbulb className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-bold">Püf Noktaları</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-choco-700 leading-relaxed">
                {recipe.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sık Yapılan Hatalar */}
            <div className="bg-rose-50/60 rounded-3xl p-5 sm:p-6 border border-rose-200/80 space-y-3.5">
              <div className="flex items-center gap-2.5 text-rose-900">
                <span className="w-9 h-9 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-bold">Sık Yapılan Hatalar</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-choco-700 leading-relaxed">
                {recipe.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-0.5">✕</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Substitutions, Storage & Serving Suggestions */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-soft border border-pastelPink-100 space-y-6">
            {/* Alternatif Malzemeler */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-choco-800 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-pastelPink-500" />
                <span>Alternatif Malzeme Önerileri</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.substitutions.map((sub, i) => (
                  <div
                    key={i}
                    className="bg-cream-50 rounded-2xl p-3.5 border border-cream-200 text-xs space-y-1"
                  >
                    <div className="font-bold text-choco-800">
                      {sub.original} → <span className="text-pastelPink-600">{sub.alternative}</span>
                    </div>
                    <p className="text-choco-600">{sub.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-cream-200">
              {/* Saklama Önerileri */}
              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-choco-800 flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-amber-600" />
                  <span>Saklama Önerileri</span>
                </h3>
                <p className="text-xs sm:text-sm text-choco-600 leading-relaxed bg-cream-50 p-3.5 rounded-2xl border border-cream-200">
                  {recipe.storageTips}
                </p>
              </div>

              {/* Sunum Önerileri */}
              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-choco-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pastelPink-500" />
                  <span>Şefin Sunum Önerileri</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-choco-600 bg-pastelPink-50/50 p-3.5 rounded-2xl border border-pastelPink-100">
                  {recipe.servingSuggestions.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-pastelPink-500 font-bold">•</span>
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User Rating & Comments Section */}
          <div
            id="yorumlar"
            className="bg-white rounded-3xl p-5 sm:p-7 shadow-soft border border-pastelPink-100 space-y-6 no-print"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cream-200 pb-4">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-choco-800 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-pastelPink-500" />
                  <span>Kullanıcı Puanları ve Yorumlar ({allReviews.length})</span>
                </h2>
                <p className="text-xs text-choco-500 mt-0.5">
                  Tarifi denediniz mi? Puanınızı ve deneyiminizi paylaşın!
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Ortalama: {dynamicRating} / 5.0</span>
              </div>
            </div>

            {/* Add Review Form */}
            <form
              onSubmit={handleReviewSubmit}
              className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-cream-200 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-bold text-choco-800">
                  Bu Tarife Puanınız:
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      aria-label={`${star} Yıldız Ver`}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= reviewRating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-cream-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="review-author" className="block text-xs font-bold text-choco-700 mb-1">
                    Adınız (İsteğe Bağlı)
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    value={reviewAuthor}
                    onChange={(e) => setReviewAuthor(e.target.value)}
                    placeholder="Örn: Ayşe Y."
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="review-comment" className="block text-xs font-bold text-choco-700 mb-1">
                  Yorumunuz
                </label>
                <textarea
                  id="review-comment"
                  rows={3}
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="Tarifi nasıl buldunuz? Pişirme süresi veya kıvam hakkındaki notlarınızı yazın..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
                />
              </div>

              {reviewError && (
                <p className="text-xs font-bold text-rose-600">{reviewError}</p>
              )}

              {reviewSubmitted && (
                <p className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  ✓ Yorumunuz ve puanınız bu tarayıcıya (localStorage) kaydedildi! Ortak sunucu
                  veritabanı için backend bağlantısı gereklidir.
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[11px] text-choco-500 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  Yorumlarınız yerel depolamada saklanır; örnek yorumlar etiketlenmiştir.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-xs sm:text-sm font-bold shadow-btn-pink transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Yorumu Gönder</span>
                </button>
              </div>
            </form>

            {/* Reviews List */}
            <div className="space-y-3">
              {allReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-2xl bg-cream-50/60 border border-cream-200 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        style={{ backgroundColor: rev.avatarBg }}
                        className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm text-choco-800"
                      >
                        {rev.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-choco-800">{rev.author}</span>
                          {rev.isSample ? (
                            <span className="px-2 py-0.5 rounded-full bg-cream-200 text-choco-600 text-[10px] font-semibold">
                              Örnek Veri
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-pastelPink-100 text-pastelPink-700 text-[10px] font-bold">
                              Sizin Yorumunuz
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-choco-500">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3.5 h-3.5 ${
                            idx < rev.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-cream-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-choco-700 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Recipes Section */}
      {similarRecipes.length > 0 && (
        <section aria-labelledby="benzer-tarifler-heading" className="pt-6 border-t border-cream-200 space-y-6 no-print">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="benzer-tarifler-heading"
                className="font-display text-2xl font-bold text-choco-800"
              >
                Benzer Tatlı Tarifleri
              </h2>
              <p className="text-xs sm:text-sm text-choco-500">
                {recipe.categoryName} kategorisinden sevebileceğiniz diğer lezzetler
              </p>
            </div>
            <Link
              to={`/kategoriler?kat=${recipe.categorySlug}`}
              className="text-xs sm:text-sm font-bold text-pastelPink-600 hover:underline"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarRecipes.map((sim) => (
              <RecipeCard key={sim.id} recipe={sim} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
