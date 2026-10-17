import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RecipesPage } from './pages/RecipesPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { VideosPage } from './pages/VideosPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { AboutPage, ContactPage } from './pages/AboutContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-100 via-cream-50 to-pastelPink-50/35 text-choco-800">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tarifler" element={<RecipesPage />} />
              <Route path="/kategoriler" element={<CategoriesPage />} />
              <Route path="/videolar" element={<VideosPage />} />
              <Route path="/favoriler" element={<FavoritesPage />} />
              <Route path="/tarif/:slug" element={<RecipeDetailPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
