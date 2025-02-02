import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="h-[150px] w-[150px] space-y-2">
      {/* Imagem */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      {/* Titulo, preço e restaurante */}
    </div>
  );
};

export default ProductItem;
