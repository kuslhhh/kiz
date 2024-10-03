import { IProduct } from "../../models/interfaces";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  const { productName, description, price, stockQuantity, imageURL } = product;

  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
      <img
        src={imageURL}
        alt={productName}
        className="h-64 w-full object-cover mb-4 rounded-lg"
      />
      <div className="description text-center">
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg text-black font-bold mb-2">${price}</p>

        

        {stockQuantity <= 0 && (
          <p className="text-red-600 font-semibold">Out of Stock</p>
        )}
      </div>
    </div>
  );
};

export default Product;
