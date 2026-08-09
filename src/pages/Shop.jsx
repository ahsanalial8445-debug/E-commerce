import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    setSelectedCategory(cat || 'All');
  }, [searchParams]);

  const handleCategoryClick = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === 'All'
        ? [...products]
        : products.filter((p) => p.category === selectedCategory);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">ALL PRODUCTS</p>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">Shop</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 lg:sticky lg:top-24">
              <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">

            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-500 text-sm hidden sm:block">
                Showing {selectedCategory === 'All' ? 'all categories' : selectedCategory}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 ml-auto"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-5xl block mb-4">🔍</span>
                <p className="text-slate-400">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
                  >
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          product.badge === 'Sale'
                            ? 'bg-pink-600 text-white'
                            : 'bg-indigo-600 text-white'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <Link
                      to={`/product/${product.id}`}
                      className="block aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"
                    >
                      <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                        {product.emoji}
                      </span>
                    </Link>

                    <div className="p-4">
                      <p className="text-slate-500 text-[11px] mb-1">{product.category}</p>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-white text-sm font-semibold mb-1 truncate hover:text-pink-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-pink-400 font-bold text-sm">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                          <span className="text-slate-500 text-xs line-through">${product.oldPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;