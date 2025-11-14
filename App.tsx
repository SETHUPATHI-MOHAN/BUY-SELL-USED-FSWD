
import React, { useState, useEffect, useMemo } from 'react';
import { Product } from './types';
import { initialProducts } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import SellForm from './components/SellForm';

type View = 'home' | 'detail' | 'sell';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const allCategories = products.map(p => p.category);
    return ['all', ...Array.from(new Set(allCategories))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        filterCategory === 'all' ? true : product.category === filterCategory
      );
  }, [products, searchTerm, filterCategory]);
  
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setCurrentView('home');
  };
  
  const handleGoToSell = () => {
    setCurrentView('sell');
  };

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId: Product = {
      ...newProduct,
      id: Date.now()
    };
    setProducts(prevProducts => [productWithId, ...prevProducts]);
    setCurrentView('home');
  };

  const renderContent = () => {
    switch(currentView) {
      case 'sell':
        return <SellForm onAddProduct={handleAddProduct} onCancel={() => setCurrentView('home')} />;
      case 'detail':
        return selectedProduct && <ProductDetail product={selectedProduct} onBack={handleBack} />;
      case 'home':
      default:
        return (
          <ProductGrid 
            products={filteredProducts} 
            onSelectProduct={handleSelectProduct}
            categories={categories}
            filterCategory={filterCategory}
            onFilterCategoryChange={setFilterCategory}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header 
        onSellClick={handleGoToSell} 
        onHomeClick={() => setCurrentView('home')}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
