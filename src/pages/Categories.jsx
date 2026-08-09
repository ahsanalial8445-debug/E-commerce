import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const categoryData = [
  { name: 'Fashion', emoji: '👗', color: 'from-pink-500 to-rose-500', description: 'Clothing, bags & accessories' },
  { name: 'Electronics', emoji: '📱', color: 'from-indigo-500 to-blue-500', description: 'Gadgets & tech essentials' },
  { name: 'Home & Living', emoji: '🛋️', color: 'from-purple-500 to-indigo-500', description: 'Decor & everyday living' },
  { name: 'Sports', emoji: '⚽', color: 'from-orange-500 to-red-500', description: 'Gear for an active lifestyle' },
];

const Categories = () => {
  const countFor = (name) => products.filter((p) => p.category === name).length;

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">EXPLORE</p>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3">Shop by Category</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Find exactly what you're looking for, organized just the way you like it.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categoryData.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-8 flex items-center gap-6 transition-all hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-4xl sm:text-5xl shadow-lg`}>
                {cat.emoji}
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 group-hover:text-pink-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-400 text-sm mb-2">{cat.description}</p>
                <span className="text-indigo-400 text-xs font-semibold">
                  {countFor(cat.name)} product{countFor(cat.name) !== 1 ? 's' : ''} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Browse All Products
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Categories;