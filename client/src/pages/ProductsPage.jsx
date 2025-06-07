import React, { useState, useEffect } from 'react';
import ProductCardVertical from '../components/cards/ProductCardVertical';

export default function ProductsPage() {
  const product_items = [
    {
      name: 'TIED RIBBONS Cycle Shape Flower Vase...',
      price: 2000,
      mrp: 2500,
      discount: '20%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 3.5,
      wishlist: false,
      category: 'Decor',
      room: 'Living Room',
      material: 'Metal',
      style: 'Vintage'
    },
    {
      name: 'Sunshine Lighting Table Lamp...',
      price: 1800,
      mrp: 2200,
      discount: '18%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 4,
      wishlist: false,
      category: 'Lighting',
      room: 'Bedroom',
      material: 'Metal',
      style: 'Modern'
    },
    {
      name: 'Elegant Wooden Wall Clock...',
      price: 1500,
      mrp: 1900,
      discount: '21%',
      image: '/imgs/lamp.jpg',
      rating: 4.2,
      wishlist: false,
      category: 'Wall Decor',
      room: 'Living Room',
      material: 'Wood',
      style: 'Classic'
    },
    // Add more products with consistent keys
  ];

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    room: '',
    material: '',
    style: ''
  });

  useEffect(() => {
    setProducts(product_items);
    setFilteredProducts(product_items);
  }, []);

  useEffect(() => {
    let updated = [...products];
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        updated = updated.filter((p) => p[key] === filters[key]);
      }
    });
    setFilteredProducts(updated);
  }, [filters, products]);

  const getUniqueValues = (field) => {
    return [...new Set(products.map((p) => p[field]))];
  };

  const FilterDropdown = ({ label, field }) => (
    <div className="category flex flex-col items-center">
      <p className="flex items-center gap-2 text-sm">{label}</p>
      <select
        className="border w-30 p-1 rounded mt-1 text-sm"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, [field]: e.target.value }))
        }
        value={filters[field]}
      >
        <option value="">All</option>
        {getUniqueValues(field).map((value, idx) => (
          <option value={value} key={idx}>{value}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="products-page flex flex-col">
      <div className="flex flex-col">
        <div className="searchbar mt-5 input-wrapper flex gap-4 items-center px-5 py-3 bg-gray-50">
          <input
            type="search"
            placeholder="Search for products"
            className="text-md outline-none w-full"
          />
          <img src="/icons/search-normal.png" alt="search-icon" className="text-xs" />
        </div>

        <div className="filters flex mt-5 flex-col px-5">
          <div className="filters-item flex w-full gap-5 justify-center items-center flex-wrap">
            <FilterDropdown label="Category" field="category" />
            <FilterDropdown label="Room/Space" field="room" />
            <FilterDropdown label="Material" field="material" />
            <FilterDropdown label="Style" field="style" />
          </div>

          <button
            onClick={() =>
              setFilters({ category: '', room: '', material: '', style: '' })
            }
            className="mt-5 bg-red-100 text-xs px-3 py-1 rounded self-center"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      <div className="container flex flex-wrap gap-4 mt-5 px-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCardVertical product={product} key={index} />
          ))
        ) : (
          <p className="text-center w-full py-10 text-gray-500">No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
}
