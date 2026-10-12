type SubVisualProps = {
  type: "company" | "products" | "news" | "support";
};

const visualData = {
  company: {
    title: "COMPANY",
    description: "TOGETHER FOR A BETTER FUTURE",
    image: "/images/company_bg.jpg",
  },
  products: {
    title: "PRODUCTS",
    description: "DRIVE A SAFER TOMORROW",
    image: "/images/product_bg.jpg",
  },
  news: {
    title: "NEWS",
    description: "LATEST NEWS AND UPDATES",
    image: "/images/news_bg.jpg",
  },
  support: {
    title: "SUPPORT",
    description: "WE ARE ALWAYS HERE FOR YOU",
    image: "/images/support_bg.jpg",
  },
};

export default function SubVisual({ type }: SubVisualProps) {
  const { title, description, image } = visualData[type];

  return (
    <section
      className="relative flex h-[340px] w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/25" />

      {/* 제목과 설명 */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-[34px] font-bold">{title}</h2>

        <p className="mt-3 text-[13px]">{description}</p>
      </div>
    </section>
  );
}
