import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, User, Menu, X, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RECIPES } from '../data/recipes';
import { SafeImage } from './SafeImage';

export const Header: React.FC = () => {
  const { favorites, filters, setFilters } = useApp();
  const [searchInput, setSearchInput] = useState(filters.searchQuery);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [chefModalOpen, setChefModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchInput(filters.searchQuery);
  }, [filters.searchQuery]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const quickResults = searchInput.trim()
    ? RECIPES.filter((r) => {
        const q = searchInput.toLocaleLowerCase('tr-TR');
        return (
          r.title.toLocaleLowerCase('tr-TR').includes(q) ||
          r.categoryName.toLocaleLowerCase('tr-TR').includes(q) ||
          r.ingredients.some((i) => i.name.toLocaleLowerCase('tr-TR').includes(q))
        );
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, searchQuery: searchInput.trim() }));
    setShowDropdown(false);
    navigate('/tarifler');
  };

  const navItems = [
    { to: '/', label: 'Ana Sayfa', end: true },
    { to: '/tarifler', label: 'Tarifler' },
    { to: '/kategoriler', label: 'Kategoriler' },
    { to: '/videolar', label: 'Videolar' },
    { to: '/hakkimizda', label: 'Hakkımızda' },
    { to: '/iletisim', label: 'İletişim' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#2B1711]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-white/10'
            : 'bg-gradient-to-b from-[#26130D]/95 via-[#321A12]/90 to-[#381E15]/85 backdrop-blur-sm py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-400 rounded-xl"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-pastelPink-200 via-pastelPink-100 to-white p-1 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden">
              <img
                src="/images/mascot-cupcake.png"
                alt="Tatlı Tarifler Cupcake Logo"
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="sr-only">Tatlı Tarifler</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
                Tatlı Tarifler
              </span>
              <span className="text-[11px] sm:text-xs text-pastelPink-200 font-medium flex items-center gap-1 mt-0.5">
                Hayatı Tatlandıran Tarifler
                <Heart className="w-3 h-3 fill-pastelPink-400 text-pastelPink-400 inline" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Ana Menü" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-semibold transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-400 ${
                    isActive
                      ? 'text-white'
                      : 'text-cream-200/85 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0.5 left-3 right-3 h-[3px] rounded-full bg-pastelPink-400 shadow-[0_0_8px_rgba(236,132,166,0.9)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Search & Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Instant Recipe Search Box */}
            <div ref={searchContainerRef} className="relative hidden sm:block w-48 md:w-56 xl:w-64">
              <form onSubmit={handleSearchSubmit} role="search">
                <label htmlFor="header-recipe-search" className="sr-only">
                  Tarif ara
                </label>
                <input
                  id="header-recipe-search"
                  type="search"
                  value={searchInput}
                  onFocus={() => setShowDropdown(true)}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchInput(val);
                    setFilters((prev) => ({ ...prev, searchQuery: val }));
                    setShowDropdown(true);
                  }}
                  placeholder="Tarif ara..."
                  className="w-full pl-4 pr-9 py-1.5 rounded-full bg-white/15 hover:bg-white/20 focus:bg-white/25 text-white placeholder-cream-200/75 text-sm border border-white/30 focus:border-pastelPink-300 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  aria-label="Ara"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cream-100 hover:text-pastelPink-300 p-1"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Instant Search Results Dropdown */}
              {showDropdown && searchInput.trim().length > 0 && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white shadow-soft-lg border border-pastelPink-100 overflow-hidden z-50 text-choco-800">
                  <div className="px-4 py-2.5 bg-pastelPink-50/70 border-b border-pastelPink-100 flex items-center justify-between text-xs font-semibold text-choco-600">
                    <span>Anlık Eşleşen Tarifler ({quickResults.length})</span>
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-pastelPink-600 hover:underline flex items-center gap-1"
                    >
                      Tümünü Gör <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {quickResults.length > 0 ? (
                    <ul className="divide-y divide-cream-200 max-h-80 overflow-y-auto">
                      {quickResults.map((rec) => (
                        <li key={rec.id}>
                          <Link
                            to={`/tarif/${rec.slug}`}
                            onClick={() => setShowDropdown(false)}
                            className="flex items-center gap-3 p-3 hover:bg-pastelPink-50/50 transition-colors"
                          >
                            <SafeImage
                              src={rec.image}
                              alt={rec.title}
                              wrapperClassName="w-12 h-12 rounded-xl flex-shrink-0"
                              className="w-12 h-12 object-cover"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-choco-800 truncate">{rec.title}</p>
                              <div className="flex items-center gap-2 text-xs text-choco-500 mt-0.5">
                                <span className="text-pastelPink-600 font-medium">{rec.categoryName}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {rec.totalTimeMinutes} dk
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-5 text-center text-sm text-choco-500">
                      “{searchInput}” ile eşleşen bir tatlı bulunamadı.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Favorites Icon Link */}
            <Link
              to="/favoriler"
              aria-label={`Favorilerim (${favorites.length} tarif)`}
              className="relative p-2 rounded-full text-cream-100 hover:text-pastelPink-300 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-400"
              title="Favori Tariflerim"
            >
              <Heart
                className={`w-5 h-5 transition-transform ${
                  favorites.length > 0 ? 'fill-pastelPink-400 text-pastelPink-400 scale-105' : ''
                }`}
              />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-pastelPink-500 text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* User / Local Preferences Info Button */}
            <button
              type="button"
              onClick={() => setChefModalOpen(true)}
              aria-label="Kullanıcı Tercihleri ve Mutfak Defterim"
              title="Mutfak Defterim"
              className="p-2 rounded-full text-cream-100 hover:text-pastelPink-300 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-400"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Mobil Menüyü Aç/Kapat"
              className="lg:hidden p-2 rounded-xl text-cream-100 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pastelPink-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#28150F] border-t border-white/10 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
                }}
                placeholder="Tarif veya malzeme ara..."
                className="w-full pl-4 pr-10 py-2.5 rounded-full bg-white/15 text-white placeholder-cream-200/70 text-sm border border-white/25 focus:outline-none focus:border-pastelPink-400"
              />
              <button
                type="submit"
                aria-label="Ara"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-100"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <nav className="grid grid-cols-2 gap-1.5 pt-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-pastelPink-500 text-white shadow-btn-pink'
                        : 'text-cream-100 hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/favoriler"
                className={({ isActive }) =>
                  `col-span-2 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-pastelPink-400/40 ${
                    isActive ? 'bg-pastelPink-500 text-white' : 'text-pastelPink-200 bg-white/5'
                  }`
                }
              >
                <Heart className="w-4 h-4 fill-pastelPink-400 text-pastelPink-400" />
                Favori Tariflerim ({favorites.length})
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Local Chef / Profile Modal */}
      {chefModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chef-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-pastelPink-100 relative">
            <button
              type="button"
              onClick={() => setChefModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-choco-500 hover:bg-pastelPink-50"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-pastelPink-100 flex items-center justify-center text-pastelPink-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 id="chef-modal-title" className="font-display text-lg font-bold text-choco-800">
                  Mutfak Defterim & Tercihler
                </h3>
                <p className="text-xs text-choco-500">Yerel Tarayıcı Hafızası (localStorage)</p>
              </div>
            </div>
            <p className="text-sm text-choco-600 leading-relaxed mb-4">
              Favori tarifleriniz, işaretlediğiniz malzemeler, porsiyon tercihleriniz ve yorumlarınız bu cihazda{' '}
              <strong className="text-choco-800">localStorage</strong> üzerinde otomatik olarak korunur. Cihazlar arası
              ortak hesap senkronizasyonu için bir arka uç (backend) sunucu bağlantısı gereklidir.
            </p>
            <div className="bg-cream-100 rounded-2xl p-3.5 mb-5 flex items-center justify-between text-sm">
              <span className="font-medium text-choco-700">Kayıtlı Favori Tarifiniz:</span>
              <span className="font-bold text-pastelPink-600">{favorites.length} Tarif</span>
            </div>
            <div className="flex gap-2">
              <Link
                to="/favoriler"
                onClick={() => setChefModalOpen(false)}
                className="flex-1 text-center py-2.5 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-sm font-bold shadow-btn-pink transition-all"
              >
                Favorilerime Git
              </Link>
              <button
                type="button"
                onClick={() => setChefModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-choco-800 text-sm font-semibold"
              >
                Tamam
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
