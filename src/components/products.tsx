import products from "@/data/mock.json";
import ProductCard from "@/components/product";
export default function Products({
  category,
  h3,
}: {
  category?: string;
  h3?: boolean;
}) {
  let filteredProducts = products;

  if (category) {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }
  return (
    <section className="w-full grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 my-6 md:my-10">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} h3={h3} />
      ))}
    </section>
  );
}
