import React from 'react';
import { 
  FaApple, FaWindows, FaLaptop, 
  FaShoppingCart, FaHeart
} from 'react-icons/fa';
import { 
  SiAsus, SiAcer, SiLenovo, SiHp, 
  SiMsi, SiRazer, SiSamsung, SiToshiba, 
  SiAlienware, SiIntel, SiRaspberrypi, SiRedhat
} from 'react-icons/si';

// Map of brand names to their respective icons
const brandIcons = {
  apple: FaApple,
  dell: FaApple,
  microsoft: FaWindows,
  asus: SiAsus,
  acer: SiAcer,
  lenovo: SiLenovo,
  hp: SiHp,
  msi: SiMsi,
  razer: SiRazer,
  samsung: SiSamsung,
  toshiba: SiToshiba,
  alienware: SiAlienware,
  intel: SiIntel,
  raspberry: SiRaspberrypi,
  redhat: SiRedhat,
  default: FaLaptop
};

// Individual Laptop Card Component
const LaptopCard = ({ brand, model, price, discount, rating, iconSize = 64 }) => {
  // Determine which icon to display based on the brand
  const IconComponent = brandIcons[brand.toLowerCase()] || brandIcons.default;
  
  // Calculate discounted price if applicable
  const discountedPrice = discount ? price - (price * discount / 100) : null;
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Discount badge */}
      {discount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
          {discount}% OFF
        </div>
      )}
      
      {/* Brand Icon */}
      <div className="flex justify-center items-center py-8 bg-gray-50">
        <IconComponent size={iconSize} className="text-gray-700" />
      </div>
      
      {/* Laptop Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{brand}</h3>
            <p className="text-sm text-gray-600 mb-2">{model}</p>
          </div>
          
          {/* Favorite Button */}
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <FaHeart />
          </button>
        </div>
        
        {/* Rating Stars */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div>
        
        {/* Price */}
        <div className="mt-2">
          {discount ? (
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">${discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-800">${price.toFixed(2)}</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors flex items-center justify-center">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Main Laptop Grid Component
const LaptopGrid = ({ laptops }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Laptops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {laptops.map((laptop) => (
          <LaptopCard 
            key={laptop.id} 
            brand={laptop.brand}
            model={laptop.model}
            price={laptop.price}
            discount={laptop.discount}
            rating={laptop.rating}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage with sample data
const Product = () => {
  const sampleLaptops = [
    { id: 1, brand: 'apple', model: 'MacBook Pro 16"', price: 2399.99, discount: 10, rating: 5 },
    { id: 2, brand: 'dell', model: 'XPS 15', price: 1499.99, discount: 0, rating: 4 },
    { id: 3, brand: 'asus', model: 'ROG Zephyrus G14', price: 1299.99, discount: 15, rating: 4 },
    { id: 4, brand: 'lenovo', model: 'ThinkPad X1 Carbon', price: 1599.99, discount: 5, rating: 4 },
    { id: 5, brand: 'hp', model: 'Spectre x360', price: 1299.99, discount: 0, rating: 3 },
    { id: 6, brand: 'microsoft', model: 'Surface Laptop 4', price: 1399.99, discount: 0, rating: 4 },
    { id: 7, brand: 'razer', model: 'Blade 15', price: 1799.99, discount: 8, rating: 4 },
    { id: 8, brand: 'acer', model: 'Predator Helios 300', price: 1199.99, discount: 12, rating: 3 },
    { id: 9, brand: 'msi', model: 'GS66 Stealth', price: 1699.99, discount: 0, rating: 4 },
    { id: 10, brand: 'samsung', model: 'Galaxy Book Pro', price: 1099.99, discount: 5, rating: 3 },
    { id: 11, brand: 'alienware', model: 'm15 R6', price: 1999.99, discount: 0, rating: 5 },
    { id: 12, brand: 'toshiba', model: 'Portege X30', price: 999.99, discount: 20, rating: 3 },
    { id: 13, brand: 'raspberry', model: 'Pi 400', price: 99.99, discount: 0, rating: 4 },
    { id: 14, brand: 'intel', model: 'NUC 11', price: 699.99, discount: 10, rating: 4 },
    { id: 15, brand: 'redhat', model: 'Enterprise Workstation', price: 1299.99, discount: 0, rating: 4 }
  ];

  return <LaptopGrid laptops={sampleLaptops} />;
};

export default Product;