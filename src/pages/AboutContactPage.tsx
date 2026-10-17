import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ChefHat,
  Scale,
  Video,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Send,
  Info,
  AlertCircle,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#351B11] via-[#542D1E] to-[#3B1F14] rounded-3xl p-6 sm:p-10 text-white shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-pastelPink-200 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-pastelPink-400 text-pastelPink-400" /> Hikayemiz &
            Mutfak Felsefemiz
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Tatlı Tarifler: Hayatı Tatlandıran Tarifler
          </h1>
          <p className="text-sm sm:text-base text-cream-100/90 leading-relaxed">
            “Tatlı yapmak mutluluk demektir” mottosuyla yola çıkan platformumuz; sıcak pastane
            atmosferini, 3D görsel deneyimi ve gramaj hassasiyetindeki profesyonel pastacılık
            tekniklerini ev mutfağınıza taşır.
          </p>
          <div className="pt-2">
            <Link
              to="/tarifler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pastelPink-500 hover:bg-pastelPink-600 text-white text-sm font-bold shadow-btn-pink"
            >
              Tariflerimizi Keşfedin
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <img
              src="/images/hero-3d-desserts.png"
              alt="Tatlı Tarifler 3D Pastane Karakterleri"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Scale,
            title: 'Tam Gram & Mililitre Ölçüleri',
            desc: '“Göz kararı un” yerine her tarifte gram, mililitre ve bardak karşılıklarını birlikte veriyoruz; porsiyon sayısını değiştirdiğinizde tüm ölçüler otomatik hesaplanır.',
          },
          {
            icon: ChefHat,
            title: 'Adım Adım Görsel & Püf Noktası',
            desc: 'Çikolatanın benmari sıcaklığından fırından çıkarma dakikasına kadar her aşamayı fotoğraflı anlatımlar ve sık yapılan hatalar rehberiyle destekliyoruz.',
          },
          {
            icon: Video,
            title: 'Uygulamalı YouTube Videoları',
            desc: 'Kıvamı gözünüzle görebilmeniz için her tarifin yanında sayfa içinden oynatılabilen resmi YouTube hazırlanış videoları yer alır.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-soft border border-pastelPink-100 space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-pastelPink-100 text-pastelPink-600 flex items-center justify-center">
              <item.icon className="w-6 h-6" />
            </div>
            <h2 className="font-display text-xl font-bold text-choco-800">{item.title}</h2>
            <p className="text-xs sm:text-sm text-choco-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Tarif Önerisi / Soru');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'error' | 'saved-demo'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormState('error');
      setErrMsg('Lütfen adınızı, e-posta adresinizi ve mesajınızı eksiksiz doldurun.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setFormState('error');
      setErrMsg('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('tatli_tarifler_contact_demo') || '[]');
      localStorage.setItem(
        'tatli_tarifler_contact_demo',
        JSON.stringify([
          { name, email, subject, message, date: new Date().toISOString() },
          ...existing,
        ])
      );
      setFormState('saved-demo');
      setErrMsg('');
      setMessage('');
    } catch {
      setFormState('error');
      setErrMsg('Mesaj kaydedilirken yerel depolama hatası oluştu.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#351B11] to-[#4E281B] text-white rounded-3xl p-6 sm:p-8 shadow-soft space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-pastelPink-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Bize Ulaşın
            </span>
            <h1 className="font-display text-3xl font-bold">İletişim & Tarif İstekleri</h1>
            <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              Denemek istediğiniz yeni bir tatlı tarifi, iş birliği talebiniz veya tariflerle ilgili
              sorularınız için bize her zaman yazabilirsiniz.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pastelPink-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-white">Test Mutfağı & Stüdyo</strong>
                  <span className="text-cream-200/80">
                    Moda Caddesi, Tatlı Atölyesi No: 42, Kadıköy / İstanbul
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pastelPink-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-white">E-posta</strong>
                  <span className="text-cream-200/80">merhaba@tatlitarifler.com.tr</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pastelPink-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-white">Telefon</strong>
                  <span className="text-cream-200/80">+90 (216) 555 42 42</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="/images/mascot-cupcake.png"
              alt="Cupcake Maskot"
              className="w-12 h-12 object-contain"
            />
            <p className="text-xs text-cream-100">
              <strong>Tatlı Tarifler Mutfak Ekibi</strong> haftanın 7 günü yeni tarifler deniyor!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-pastelPink-100">
          <h2 className="font-display text-2xl font-bold text-choco-800 mb-2">Mesaj Gönderin</h2>
          <p className="text-xs sm:text-sm text-choco-500 mb-6">
            Aşağıdaki formu doldurarak görüş ve önerilerinizi iletebilirsiniz.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-choco-700 mb-1">
                  Adınız Soyadınız *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-choco-700 mb-1">
                  E-posta Adresiniz *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@eposta.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold text-choco-700 mb-1">
                Konu
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
              >
                <option value="Tarif Önerisi / Soru">Tarif Önerisi / Püf Noktası Sorusu</option>
                <option value="Video / Görsel Geri Bildirimi">Video / Görsel Geri Bildirimi</option>
                <option value="İş Birliği">Marka & Stüdyo İş Birliği</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-choco-700 mb-1">
                Mesajınız *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı buraya yazın..."
                className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-sm text-choco-800 focus:outline-none focus:border-pastelPink-400"
              />
            </div>

            {formState === 'error' && (
              <div className="flex items-start gap-2 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errMsg}</span>
              </div>
            )}

            {formState === 'saved-demo' && (
              <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 border border-amber-300 rounded-xl p-3.5 leading-relaxed">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                <div>
                  <strong className="block font-bold">
                    Sunucu Bağlantısı Yok (Yerel Kayıt Bilgilendirmesi)
                  </strong>
                  Gerçek bir arka uç e-posta/mesaj sunucusu bağlı olmadığı için mesajınız harici bir
                  sunucuya iletilmedi; ancak form doğrulamasından geçerek bu tarayıcının{' '}
                  <code>localStorage</code> alanına kaydedildi.
                </div>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pastelPink-400 to-pastelPink-500 hover:from-pastelPink-500 hover:to-pastelPink-600 text-white text-sm font-bold shadow-btn-pink transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Mesajı Gönder</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
