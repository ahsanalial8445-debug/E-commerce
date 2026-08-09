import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const categories = [
    { name: 'Fashion', emoji: '👗', color: 'from-pink-500 to-rose-500' },
    { name: 'Electronics', emoji: '📱', color: 'from-indigo-500 to-blue-500' },
    { name: 'Home & Living', emoji: '🛋️', color: 'from-purple-500 to-indigo-500' },
    { name: 'Beauty', emoji: '💄', color: 'from-fuchsia-500 to-pink-500' },
    { name: 'Sports', emoji: '⚽', color: 'from-orange-500 to-red-500' },
    { name: 'Toys', emoji: '🧸', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div className="bg-black min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-black" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-pink-500 text-xs sm:text-sm font-bold tracking-widest mb-4">
              WELCOME TO SHOPMAX
            </p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Shop the <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Future</span> of Style
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Discover handpicked products across fashion, tech, and lifestyle — curated just for you, delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/shop"
                className="bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
              <Link
                to="/deals"
                className="border-2 border-slate-700 hover:border-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
              >
                View Deals
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              <span className="relative text-[8rem] sm:text-[10rem]">🛍️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🚚', label: 'Free Shipping' },
            { icon: '↩️', label: 'Easy Returns' },
            { icon: '🔒', label: 'Secure Payment' },
            { icon: '🎧', label: '24/7 Support' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">BROWSE</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">Shop by Category</h2>
          </div>
          <Link to="/categories" className="hidden sm:block text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/categories"
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 flex flex-col items-center gap-3 transition-all hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <span className="text-3xl sm:text-4xl relative z-10">{cat.emoji}</span>
              <span className="text-slate-300 group-hover:text-white text-xs sm:text-sm font-medium relative z-10 text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">TRENDING</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">Featured Products</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
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
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 sm:p-12 text-center">
          <div className="absolute top-6 right-10 w-2 h-2 bg-white rounded-full opacity-70" />
          <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/20 rounded-full" />

          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3 relative z-10">
            Get 15% off your first order
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 relative z-10">
            Subscribe to our newsletter and never miss a deal.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative z-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/30 text-white placeholder-white/60 text-sm rounded-full px-5 py-3 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-purple-700 font-semibold text-sm px-6 py-3 rounded-full hover:bg-slate-100 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;