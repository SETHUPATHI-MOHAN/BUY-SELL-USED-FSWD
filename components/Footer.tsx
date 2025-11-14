
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} UpMarket. All rights reserved. A React & Gemini Showcase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
