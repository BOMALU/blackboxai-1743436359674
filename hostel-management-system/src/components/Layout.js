import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Premium Header */}
      <Header />
      
      {/* Main Content with subtle background pattern */}
      <main className="flex-grow">
        <div className="relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/34950/fabric-texture-texture-background-material-34950.jpeg')] opacity-5"></div>
          
          {/* Content Container */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            {children}
          </div>
        </div>
      </main>
      
      {/* Premium Footer */}
      <Footer />
    </div>
  );
};

export default Layout;