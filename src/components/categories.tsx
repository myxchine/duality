import categories from "@/data/mock_categories.json";
import Link from "next/link";
export default function Categories() {
  return (
    <section className="w-full grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 my-6 md:my-10">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </section>
  );
}

function CategoryCard({ category }: { category: any }) {
  return (
    <Link
      href={`/store/categories/${category.slug}`}
      className="flex flex-col gap-2 mb-4"
    >
      <div className="aspect-square w-full bg-black/40 mb-2" />
      <h2>{category.name}</h2>
      <p>{category.description}</p>
    </Link>
  );
}
