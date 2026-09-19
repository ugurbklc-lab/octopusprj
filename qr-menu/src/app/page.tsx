import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm mb-6">
            Çoklu restoran için QR Menü Altyapısı
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Restoranlar için
            <span className="text-green-400"> modern QR Menü </span>
            sistemi
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Menülerini dijitale taşı, restoranlarını tek panelden yönet, her
            işletmeye özel QR kod ve yönetim ekranı sun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admin"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition"
            >
              Admin Paneline Git
            </Link>

            <Link
              href="/menu/ornek-restoran"
              className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl text-white transition"
            >
              Örnek Menü Gör
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Süper Admin</h2>
            <p className="text-gray-300">
              Tüm restoranları tek yerden yönet, yeni restoran ekle, paket ve
              abonelikleri takip et.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Restoran Paneli</h2>
            <p className="text-gray-300">
              Menü düzenleme, kategori oluşturma, ürün ekleme, fiyat güncelleme
              ve görsel yönetimi yap.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Müşteri Menüsü</h2>
            <p className="text-gray-300">
              Müşteriler QR kodu okutup anında mobil uyumlu menüye ulaşsın,
              ürünleri hızlıca incelesin.
            </p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Tek sistem, çok restoran, kolay yönetim
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Bu proje; farklı restoranlara hizmet verebilen, senin ana yönetici
            olduğun, restoran bazlı panel yapısına sahip bir QR menü platformu
            olacak.
          </p>
        </div>
      </section>
    </main>
  );
}