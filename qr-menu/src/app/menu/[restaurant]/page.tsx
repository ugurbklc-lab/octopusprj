import prisma from "@/lib/prisma";

type MenuPageProps = {
  params: Promise<{
    restaurant: string;
  }>;
};

export default async function MenuPage({ params }: MenuPageProps) {
  const { restaurant } = await params;

  const restaurantData = await prisma.restaurant.findUnique({
    where: {
      slug: restaurant,
    },
  });

  if (!restaurantData) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Restoran bulunamadı</h1>
          <p className="text-gray-400">
            Bu URL için kayıtlı bir restoran bulunamadı.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm mb-4">
            QR Menü
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {restaurantData.name}
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            {restaurantData.description || "Bu restoran için açıklama eklenmemiş."}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-green-400">
            Menü çok yakında
          </h2>
          <p className="text-gray-300">
            Restoran bilgisi artık veritabanından geliyor. Bir sonraki adımda
            ürünleri ve kategorileri de veritabanına taşıyacağız.
          </p>
        </div>
      </section>
    </main>
  );
}