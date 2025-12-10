import React, { useState } from "react";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";

function LeftControlar({categories, setCategories, range, setRange, brands, setBrands}) {
    const [expandedSections, setExpandedSections] = useState({
      categories: true,
      price: true,
      brands: true
    });

    const toggleSection = (section) => {
      setExpandedSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };

    const prodectCategories = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setCategories([...categories, value]);
      } else {
        setCategories(categories.filter((v) => v !== value));
      }
    };

    const brandsSelection = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setBrands([...brands, value]);
      } else {
        setBrands(brands.filter((v) => v !== value));
      }
    };

    const clearAllFilters = () => {
      setCategories([]);
      setBrands([]);
      setRange(50000);
    };

    const activeFiltersCount = categories.length + brands.length + (range < 50000 ? 1 : 0);

    return (
      <div className="w-80 bg-white rounded-xl shadow-lg p-6 sticky top-24 h-fit">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            {activeFiltersCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          {activeFiltersCount > 0 && (
            <button 
              onClick={clearAllFilters}
              className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors">
              <X className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Categories Section */}
        <div className="mb-6 border-b pb-4">
          <button 
            onClick={() => toggleSection('categories')}
            className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition-colors">
            <h3 className="font-semibold text-gray-800">Categories</h3>
            {expandedSections.categories ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          
          {expandedSections.categories && (
            <div className="space-y-3 animate-fadeIn">
              {[
                { value: 'sofa', label: 'Sofa', icon: '🛋️' },
                { value: 'table', label: 'Dining Table', icon: '🪑' },
                { value: 'mattress', label: 'Mattress', icon: '🛏️' },
                { value: 'wardrobe', label: 'Wardrobe', icon: '🚪' }
              ].map((category) => (
                <label key={category.value} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="Categories" 
                    value={category.value} 
                    onChange={prodectCategories}
                    checked={categories.includes(category.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="mb-6 border-b pb-4">
          <button 
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition-colors">
            <h3 className="font-semibold text-gray-800">Price Range</h3>
            {expandedSections.price ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          
          {expandedSections.price && (
            <div className="space-y-4 animate-fadeIn">
              <input 
                type="range" 
                min="0" 
                max="50000" 
                step="1000" 
                value={range} 
                onInput={(e) => setRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">₹0</span>
                <span className="text-lg font-bold text-blue-600">₹{range.toLocaleString()}</span>
                <span className="text-sm font-medium text-gray-700">₹50,000</span>
              </div>
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div>
          <button 
            onClick={() => toggleSection('brands')}
            className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition-colors">
            <h3 className="font-semibold text-gray-800">Brands</h3>
            {expandedSections.brands ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          
          {expandedSections.brands && (
            <div className="space-y-3 animate-fadeIn">
              {[
                { value: 'Furniture Hub', label: 'Furniture Hub' },
                { value: 'Braddy', label: 'Braddy Hub' },
                { value: 'Hub Mate', label: 'Mate Familia' },
                { value: 'Familia', label: 'Familia' }
              ].map((brand) => (
                <label key={brand.value} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="Brands" 
                    value={brand.value} 
                    onChange={brandsSelection}
                    checked={brands.includes(brand.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {brand.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}

export default LeftControlar;
