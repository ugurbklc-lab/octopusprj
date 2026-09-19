type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type Category = {
  title: string;
  items: MenuItem[];
};

type RestaurantData = {
  name: string;
  description: string;
  categories: Category[];
};

export const restaurants: Record<string, RestaurantData> = {
  "ornek-restoran": {
    name: "Örnek Restoran",
    description: "Burger, pizza ve içeceklerle modern dijital menü deneyimi.",
    categories: [
      {
        title: "Burgerler",
        items: [
          {
            name: "Klasik Burger",
            description: "Izgara köfte, cheddar, marul, domates",
            price: "₺320",
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Çift Burger",
            description: "Çift köfte, cheddar, turşu, özel sos",
            price: "₺420",
            image:
              "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
      {
        title: "İçecekler",
        items: [
          {
            name: "Kola",
            description: "Soğuk servis",
            price: "₺70",
            image:
              "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Limonata",
            description: "Ev yapımı",
            price: "₺90",
            image:
              "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    ],
  },

  "pizza-saray": {
    name: "Pizza Saray",
    description: "Taş fırın pizzaları ve özel tarifler.",
    categories: [
      {
        title: "Pizzalar",
        items: [
          {
            name: "Margherita",
            description: "Mozzarella, domates sosu, fesleğen",
            price: "₺310",
            image:
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Pepperoni Pizza",
            description: "Pepperoni, mozzarella, domates sosu",
            price: "₺380",
            image:
              "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
      {
        title: "İçecekler",
        items: [
          {
            name: "Ayran",
            description: "Soğuk servis",
            price: "₺50",
            image:
              "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Gazoz",
            description: "Limon aromalı",
            price: "₺60",
            image:
              "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    ],
  },

  "kebapci-ali": {
    name: "Kebapçı Ali",
    description: "Geleneksel kebaplar ve ızgara çeşitleri.",
    categories: [
      {
        title: "Kebaplar",
        items: [
          {
            name: "Adana Kebap",
            description: "Acılı adana kebap, lavaş ve köz sebze ile",
            price: "₺440",
            image:
              "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Urfa Kebap",
            description: "Acısız urfa kebap, pilav ve salata ile",
            price: "₺430",
            image:
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
      {
        title: "İçecekler",
        items: [
          {
            name: "Şalgam",
            description: "Acılı veya acısız",
            price: "₺65",
            image:
              "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Ayran",
            description: "Soğuk servis",
            price: "₺50",
            image:
              "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    ],
  },
};