import ProductCard from "./Prodectcard";

export default function CardDetails() {
  const items = [
    {
      id: 1,
      seller: true,
      title: "Nike Airforce1 Premium",
      subtitle: "Own the Airforce",
      description: "Step back into classic hoops style with a durable leather.",
      price: "$111",
      imgsrc:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 2,
      seller: false,
      title: "Adidas Ultraboost 22",
      subtitle: "Run in comfort",
      description:
        "Responsive Boost cushioning keeps you going mile after mile.",
      price: "$180",
      imgsrc:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      seller: true,
      title: "Puma RS-X Reinvent",
      subtitle: "Bold and fresh",
      description: "Retro design meets modern comfort for everyday streetwear.",
      price: "$130",
      imgsrc:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      seller: false,
      title: "New Balance 574 Classic",
      subtitle: "Vintage Vibes",
      description: "A timeless silhouette built for everyday wear.",
      price: "$90",
      imgsrc:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 5,
      seller: true,
      title: "Converse Chuck 70 High",
      subtitle: "Timeless Canvas",
      description: "Heritage-inspired style upgraded with premium materials.",
      price: "$85",
      imgsrc:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 6,
      seller: false,
      title: "Reebok Classic Leather",
      subtitle: "All-day comfort",
      description: "Clean lines and soft leather for an effortless look.",
      price: "$75",
      imgsrc:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 7,
      seller: true,
      title: "Vans Old Skool",
      subtitle: "Skate Legacy",
      description: "Iconic side stripe design built to handle daily wear.",
      price: "$65",
      imgsrc:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 8,
      seller: false,
      title: "Jordan 1 Mid",
      subtitle: "Air Royalty",
      description: "Elevate your game with legendary Jordan heritage.",
      price: "$125",
      imgsrc:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 9,
      seller: true,
      title: "ASICS Gel-Kayano 30",
      subtitle: "Run smarter",
      description: "Engineered for stability and comfort on long runs.",
      price: "$160",
      imgsrc:
        "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 10,
      seller: false,
      title: "Under Armour HOVR Phantom 3",
      subtitle: "Energy Return",
      description: "Feel the responsive cushioning and flexible fit.",
      price: "$140",
      imgsrc:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 11,
      seller: true,
      title: "Skechers Go Walk 6",
      subtitle: "Casual Comfort",
      description: "Lightweight, cushioned, and built for everyday motion.",
      price: "$70",
      imgsrc:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 12,
      seller: false,
      title: "Fila Disruptor II",
      subtitle: "Chunky Style",
      description: "Iconic 90s silhouette with a bold attitude.",
      price: "$65",
      imgsrc:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 13,
      seller: true,
      title: "Crocs Classic Clog",
      subtitle: "Iconic comfort",
      description: "Water-friendly and easy to clean with signature comfort.",
      price: "$50",
      imgsrc:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 14,
      seller: false,
      title: "On Cloudnova",
      subtitle: "Urban Performance",
      description: "Swiss-engineered cushioning meets modern street design.",
      price: "$150",
      imgsrc:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 15,
      seller: true,
      title: "Hoka Clifton 9",
      subtitle: "Soft and smooth",
      description: "Balanced cushioning for daily miles and recovery runs.",
      price: "$145",
      imgsrc:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      {items.map((item) => (
        <ProductCard
          key={item.id}
          imgsrc={item.imgsrc}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          price={item.price}
          seller={item.seller}
        />
      ))}
    </div>
  );
}
