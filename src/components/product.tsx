import Link from "next/link";
export default function ProductCard({
  product,
  h3,
}: {
  product: any;
  h3?: boolean;
}) {
  return (
    <Link href={`/store/${product.slug}`} className="flex flex-col gap-2 mb-4">
      <div className="aspect-square w-full bg-black/5 mb-2" />
      {h3 ? <h3>{product.name}</h3> : <h2>{product.name}</h2>}

      <p>{product.description}</p>
      <p className="text-price">
        {product.price} {product.currency}
      </p>
    </Link>
  );
}
