import { useGetProducts } from "../../hooks/useGetProducts"
import Product from "./Product"

export const ShopPage = () => {
  const { products } = useGetProducts();

  return (
    <div className="container mx-auto py-8 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
