import React from 'react';
import Header from './header';
import CategoryTabs from './CategoryTabs';
import IndicesSection from './IndicesSection';
import ProductsSection from './ProductSection';
import StocksSection from './StockSection';

const Dashboard = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start px-11 py-8 rounded-xl bg-zinc-300 max-md:px-5">
      <Header />
      <CategoryTabs />
      <IndicesSection />
      <ProductsSection />
      <StocksSection />
    </main>
  );
};

export default Dashboard;