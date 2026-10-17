import React, { useState } from 'react';
import { Send, AlertCircle, Info, Youtube, Instagram, Facebook, Share2, Heart } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'invalid' | 'no-backend-saved' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus('invalid');
      setErrorMessage('Lütfen bir e-posta adresi girin.');
      return;
    }

    if (!validateEmail(trimmed)) {
      setStatus('invalid');
      setErrorMessage('Lütfen geçerli bir e-posta adresi girin (örn: adiniz@ornek.com).');
      return;
    }

    try {
      // Save locally for demo transparency, but explicitly state no real email server is connected
      const existing = JSON.parse(localStorage.getItem('tatli_tarifler_newsletter_demo') || '[]');
      if (!existing.includes(trimmed)) {
        localStorage.setItem(
          'tatli_tarifler_newsletter_demo',
          JSON.stringify([...existing, trimmed])
        );
      }
      setStatus('no-backend-saved');
      setErrorMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Tarayıcı depolama alanına erişilirken bir hata oluştu.');
    }
  };

  return (
    <section aria-label="Bülten Aboneliği" className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-pastelPink-100/90 via-pastelPink-50 to-pastelPink-100/90 border border-pastelPink-200/80 shadow-soft px-5 py-6 sm:px-8 sm:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Cute 3D Cupcake Mascot + Heading matching Reference Image */}
            <div className="lg:col-span-5 flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-white/80 p-1.5 shadow-md animate-float-slow">
                <img
                  src="/images/mascot-cupcake.png"
                  alt="Sevimli 3D Cupcake Maskotu"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-choco-800">
                  Yeni Tariflerden Haberdar Ol!
                </h2>
                <p className="text-xs sm:text-sm text-choco-600 mt-1">
                  En yeni tatlı tarifleri ve özel içerikler için bültenimize abone ol.
                </p>
              </div>
            </div>

            {/* Middle: Email Input Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmit} noValidate className="relative">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white p-1.5 rounded-2xl sm:rounded-full shadow-sm border border-pastelPink-200 focus-within:border-pastelPink-400 focus-within:ring-2 focus-within:ring-pastelPink-200">
                  <label htmlFor="newsletter-email" className="sr-only">
                    E-posta adresiniz
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== 'idle') setStatus('idle');
                    }}
                    placeholder="E-posta adresiniz"
                    className="flex-1 px-4 py-2.5 text-sm text-choco-800 placeholder-choco-500/60 bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl sm:rounded-full bg-gradient-to-r from-pastelPink-400 to-pastelPink-500 hover:from-pastelPink-500 hover:to-pastelPink-600 text-white text-sm font-bold shadow-btn-pink hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Abone Ol</span>
                  </button>
                </div>

                {/* Validation / Honest No-Backend Status Messages */}
                {status === 'invalid' && (
                  <div
                    role="alert"
                    className="mt-2.5 flex items-start gap-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="mt-2.5 flex items-start gap-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'no-backend-saved' && (
                  <div
                    role="status"
                    className="mt-2.5 flex items-start gap-2 text-xs text-amber-900 bg-amber-50/95 border border-amber-300 rounded-xl px-3.5 py-2.5 leading-relaxed"
                  >
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                    <div>
                      <strong className="block font-bold text-amber-950">
                        E-posta Servisi Bağlı Değil (Demo Bilgilendirmesi)
                      </strong>
                      Gerçek bir arka uç e-posta sunucusu (SMTP / API) bağlanmadığı için{' '}
                      <span className="underline font-semibold">{email}</span> adresine gerçek e-posta
                      gönderimi yapılmamaktadır. Adresiniz yalnızca bu tarayıcıda yerel test listesine
                      kaydedilmiştir.
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Social Icons & Handwritten "Bizi takip et! ♥" matching Reference */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-2">
              <div className="flex items-center gap-2">
                {[
                  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com' },
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
                  { icon: Share2, label: 'Pinterest', href: 'https://www.pinterest.com' },
                  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${soc.label} sayfamız`}
                    className="w-8 h-8 rounded-full bg-choco-800 hover:bg-pastelPink-500 text-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
                  >
                    <soc.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="font-handwriting text-lg text-choco-700 flex items-center gap-1 -rotate-3">
                <span>Bizi takip et!</span>
                <Heart className="w-4 h-4 text-pastelPink-500 fill-pastelPink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
