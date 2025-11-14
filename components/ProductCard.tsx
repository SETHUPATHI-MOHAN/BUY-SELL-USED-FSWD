
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
      onClick={() => onSelectProduct(product)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={product.imageUrl} 
          alt={product.name} 
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-teal-600">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full object-cover" src={product.seller.avatarUrl} alt={product.seller.name} />
            <p className="ml-2 text-sm text-gray-600 hidden sm:block">{product.seller.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
