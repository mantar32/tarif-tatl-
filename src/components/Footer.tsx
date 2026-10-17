import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, Youtube, Instagram, Facebook, Share2, X } from 'lucide-react';
import { CATEGORIES } from '../data/recipes';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#28150E] text-cream-100 border-t border-white/10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pastelPink-200 via-pastelPink-100 to-white p-1 shadow-md">
                  <img
                    src="/images/mascot-cupcake.png"
                    alt="Tatlı Tarifler Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold text-white block leading-none">
                    Tatlı Tarifler
                  </span>
                  <span className="text-xs text-pastelPink-300 flex items-center gap-1 mt-1">
                    Hayatı Tatlandıran Tarifler
                    <Heart className="w-3 h-3 fill-pastelPink-400 text-pastelPink-400" />
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-sm">
                Evde pastane kalitesinde tatlılar hazırlamanız için gram ve mililitre hassasiyetinde
                ölçüler, adım adım fotoğraflı aşamalar, püf noktaları ve videolu anlatımlar sunan
                3D tatlı platformu.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-1">
                {[
                  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com' },
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
                  { icon: Share2, label: 'Pinterest', href: 'https://www.pinterest.com' },
                  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-pastelPink-500 text-white flex items-center justify-center transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Page Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-pastelPink-300">
                Keşfet
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-cream-200/85">
                <li>
                  <Link to="/" className="hover:text-pastelPink-300 transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link to="/tarifler" className="hover:text-pastelPink-300 transition-colors">
                    Tüm Tarifler
                  </Link>
                </li>
                <li>
                  <Link to="/kategoriler" className="hover:text-pastelPink-300 transition-colors">
                    Kategoriler
                  </Link>
                </li>
                <li>
                  <Link to="/videolar" className="hover:text-pastelPink-300 transition-colors">
                    Videolu Tarifler
                  </Link>
                </li>
                <li>
                  <Link to="/favoriler" className="hover:text-pastelPink-300 transition-colors">
                    Favori Tariflerim
                  </Link>
                </li>
                <li>
                  <Link to="/hakkimizda" className="hover:text-pastelPink-300 transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim" className="hover:text-pastelPink-300 transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Category Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-pastelPink-300">
                Popüler Kategoriler
              </h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm text-cream-200/85">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/kategoriler?kat=${cat.slug}`}
                      className="hover:text-pastelPink-300 transition-colors truncate block"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-pastelPink-300">
                İletişim Bilgileri
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cream-200/85">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-pastelPink-400 flex-shrink-0 mt-0.5" />
                  <span>Moda Caddesi, Tatlı Atölyesi No: 42, Kadıköy / İstanbul</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-pastelPink-400 flex-shrink-0" />
                  <a href="mailto:merhaba@tatlitarifler.com.tr" className="hover:text-pastelPink-300">
                    merhaba@tatlitarifler.com.tr
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-pastelPink-400 flex-shrink-0" />
                  <a href="tel:+902165554242" className="hover:text-pastelPink-300">
                    +90 (216) 555 42 42
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar matching Reference Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/75">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/" className="hover:text-white">
                Ana Sayfa
              </Link>
              <Link to="/tarifler" className="hover:text-white">
                Tarifler
              </Link>
              <Link to="/kategoriler" className="hover:text-white">
                Kategoriler
              </Link>
              <Link to="/videolar" className="hover:text-white">
                Videolar
              </Link>
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-pastelPink-300 underline-offset-2 hover:underline"
              >
                Gizlilik Politikası
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-pastelPink-300 underline-offset-2 hover:underline"
              >
                Kullanım Koşulları
              </button>
            </div>

            <p className="flex items-center gap-1.5">
              <span>© 2026 Tatlı Tarifler. Tüm hakları saklıdır.</span>
              <Heart className="w-3.5 h-3.5 text-pastelPink-400 fill-pastelPink-400" />
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-choco-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-pastelPink-100 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-choco-500 hover:bg-pastelPink-50"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-xl font-bold text-choco-800 mb-3">
              {legalModal === 'privacy' ? 'Gizlilik Politikası' : 'Kullanım Koşulları'}
            </h3>
            {legalModal === 'privacy' ? (
              <div className="space-y-3 text-sm text-choco-600 leading-relaxed">
                <p>
                  <strong>Tatlı Tarifler</strong> platformu olarak gizliliğinize önem veriyoruz. Bu
                  uygulama tarayıcı tabanlı (istemci taraflı) çalışmaktadır.
                </p>
                <p>
                  Favori tarifleriniz, işaretlediğiniz malzeme listeleri, porsiyon tercihleriniz ve
                  yazdığınız tarif notları yalnızca kendi cihazınızın{' '}
                  <code>localStorage</code> alanında saklanır; herhangi bir harici sunucuya
                  aktarılmaz.
                </p>
                <p>
                  Sayfa içinde yer alan YouTube videoları resmi YouTube Embed oynatıcısı üzerinden
                  sunulmaktadır.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-choco-600 leading-relaxed">
                <p>
                  <strong>Tatlı Tarifler</strong> web sitesinde yer alan tüm tarifler, gram/mililitre
                  ölçüleri ve pişirme süreleri ev tipi standart fırınlar baz alınarak hazırlanmıştır.
                </p>
                <p>
                  Tarif detay sayfalarındaki alerjen uyarıları (gluten, süt ürünleri, yumurta, sert
                  kabuklu yemişler vb.) bilgilendirme amaçlıdır; özel gıda hassasiyetleriniz için
                  kullandığınız paketli ürün etiketlerini kontrol etmeniz önerilir.
                </p>
              </div>
            )}
            <div className="mt-6 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full bg-pastelPink-500 text-white text-sm font-bold shadow-btn-pink"
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
