interface Catalog {
  id: string;
  title: string;
  description: string;
  price: number;
  weight: number[];
  imageTitle: string;
  imageHover: string;
  images: string[];
}

export function useCatalog(): {
  catalog: Catalog[];
} {
  const catalog = [
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Баунті",
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weight: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/1.jpg",
      imageHover: "/assets/catalog/1/2.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
  ];

  return { catalog };
}
