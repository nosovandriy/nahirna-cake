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

export function useCatalog(isFullCatalog: boolean = true): {
  catalog: Catalog[];
} {
  const fullCatalog = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
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

  const smallCatalog = fullCatalog.slice(0, 6);

  const catalog = isFullCatalog ? fullCatalog : smallCatalog;

  return { catalog };
}
