
import React from 'react';
import { ShoppingBagIcon, SearchIcon } from './icons/Icons';

interface HeaderProps {
  onSellClick: () => void;
  onHomeClick: () => void;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSellClick, onHomeClick, searchTerm, onSearchTermChange }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={onHomeClick}
          >
            <ShoppingBagIcon className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">UpMarket</span>
          </div>

          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Search products..."
                  type="search"
                  value={searchTerm}
                  onChange={(e) => onSearchTermChange(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={onSellClick}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Sell Product
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
