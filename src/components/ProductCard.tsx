'use client';

import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    alert(`${product.name} har lagts till i varukorgen!`);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
        <div className="h-64 bg-gray-200 flex items-center justify-center relative">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-gray-400">Produktbild</span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gold-600">
              {product.price} kr
            </span>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {product.stock === 0 ? 'Slut i lager' : 'Lägg i varukorg'}
            </button>
          </div>
          {product.stock > 0 && product.stock < 5 && (
            <p className="text-sm text-orange-600 mt-2">
              Endast {product.stock} kvar i lager!
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
