
import React from 'react';
import { Product } from '../types';
import { BackArrowIcon } from './icons/Icons';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="relative">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/70 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Back to products"
        >
          <BackArrowIcon className="h-6 w-6 text-gray-700" />
        </button>
        <img className="w-full h-64 sm:h-96 object-cover" src={product.imageUrl} alt={product.name} />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-teal-600 uppercase">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">{product.name}</h1>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="text-4xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">Description</h2>
          <p className="mt-2 text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">Seller Information</h2>
          <div className="flex items-center mt-4">
            <img className="h-14 w-14 rounded-full object-cover" src={product.seller.avatarUrl} alt={product.seller.name} />
            <div className="ml-4">
              <p className="font-semibold text-gray-800">{product.seller.name}</p>
              <p className="text-sm text-gray-500">Member since 2023</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 text-lg shadow-lg">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
