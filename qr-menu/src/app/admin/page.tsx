"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QRCodeComponent from "@/components/QRCode";

type Restaurant = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
};

type Category = {
  id: number;
  name: string;
  restaurantId: number;
};

export default function AdminPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [showRestaurantForm, setShowRestaurantForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [categoryName, setCategoryName] = useState("");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async () => {
    const res = await fetch("/api/restaurants");
    const data = await res.json();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleAddRestaurant = async () => {
    if (!name || !slug) return;

    setLoading(true);

    const res = await fetch("/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, slug, description }),
    });

    setLoading(false);

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || "Kayıt başarısız");
      return;
    }

    setName("");
    setSlug("");
    setDescription("");
    setShowRestaurantForm(false);
    fetchRestaurants();
  };

  const handleAddCategory = async () => {
    if (!categoryName || !selectedRestaurantId) return;

    const res = await fetch("/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: categoryName,
        restaurantId: selectedRestaurantId,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || "Kategori eklenemedi");
      return;
    }

    const newCategory = await res.json();
    setCategories((prev) => [...prev, newCategory]);

    setCategoryName("");
    setSelectedRestaurantId("");
    setShowCategoryForm(false);
    alert("Kategori eklendi");
  };

  const handleAddProduct = async () => {
    if (!productName || !productPrice || !selectedCategoryId) return;

    const res = await fetch("/api/productss", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        categoryId: selectedCategoryId,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || "Ürün eklenemedi");
      return;
    }

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage("");
    setSelectedCategoryId("");
    setShowProductForm(false);

    alert("Ürün eklendi");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Paneli</h1>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowRestaurantForm(!showRestaurantForm)}
              className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold"
            >
              + Restoran
            </button>

            <button
              onClick={() => setShowCategoryForm(!showCategoryForm)}
              className="bg-blue-500 px-4 py-2 rounded-lg text-black font-semibold"
            >
              + Kategori
            </button>

            <button
              onClick={() => setShowProductForm(!showProductForm)}
              className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-semibold"
            >
              + Ürün
            </button>
          </div>
        </div>

        {showRestaurantForm && (
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-4">Restoran Ekle</h2>
            <div className="flex flex-col gap-4">
              <input
                placeholder="Restoran adı"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />
              <input
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />
              <input
                placeholder="Açıklama"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />
              <button
                onClick={handleAddRestaurant}
                disabled={loading}
                className="bg-green-500 py-3 rounded text-black font-semibold"
              >
                {loading ? "Kaydediliyor..." : "Kaydet"}
              </button>
            </div>
          </div>
        )}

        {showCategoryForm && (
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-4">Kategori Ekle</h2>
            <div className="flex flex-col gap-4">
              <input
                placeholder="Kategori adı"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <select
                value={selectedRestaurantId}
                onChange={(e) => setSelectedRestaurantId(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              >
                <option value="">Restoran seç</option>
                {restaurants.map((restaurant) => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddCategory}
                className="bg-blue-500 py-3 rounded text-black font-semibold"
              >
                Kategoriyi Kaydet
              </button>
            </div>
          </div>
        )}

        {showProductForm && (
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-4">Ürün Ekle</h2>
            <div className="flex flex-col gap-4">
              <input
                placeholder="Ürün adı"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <input
                placeholder="Açıklama"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <input
                placeholder="Fiyat"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <input
                placeholder="Görsel URL"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <input
                placeholder="Category ID"
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="bg-black border border-white/20 p-3 rounded"
              />

              <button
                onClick={handleAddProduct}
                className="bg-yellow-400 py-3 rounded text-black font-semibold"
              >
                Ürünü Kaydet
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>

                <p className="text-gray-400 text-sm">
                  {restaurant.description}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  slug: {restaurant.slug} | id: {restaurant.id}
                </p>

                <p className="text-xs text-green-400 mt-2 break-all">
                 http://192.168.1.41:3000/menu/{restaurant.slug}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <QRCodeComponent
                 url={`http://192.168.1.41:3000/menu/${restaurant.slug}`}
                />

                <Link
                  href={`/menu/${restaurant.slug}`}
                  className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold"
                >
                  Menüye Git
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}