import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Deals = () => {
  const { addToCart } = useCart();

  const dealProducts = products.filter((p) => p.oldPrice);

  const calcDiscount = (price, oldPrice) => Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 p-8 sm:p-12 mb-12 text-center">
          <div className="absolute top-6 right-10 w-2 h-2 bg-white rounded-full opacity-70" />
          <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/20 rounded-full" />

          <p className="text-white/80 text-xs font-bold tracking-widest mb-3 relative z-10">
            LIMITED TIME
          </p>
          <h1 className="text-white text-3xl sm:text-5xl font-black mb-3 relative z-10">
            🔥 Hot Deals
          </h1>
          <p className="text-white/80 text-sm sm:text-base relative z-10">
            Save big on your favorite products — while stocks last.
          </p>
        </div>

        {/* Deals Grid */}
        {dealProducts.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl block mb-4">😔</span>
            <p className="text-slate-400">No active deals right now. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {dealProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-slate-900 border border-slate-800 hover:border-pink-600/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full bg-pink-600 text-white">
                  -{calcDiscount(product.price, product.oldPrice)}%
                </span>

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
                    <span className="text-slate-500 text-xs line-through">${product.oldPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
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
  );
};

export default Deals;