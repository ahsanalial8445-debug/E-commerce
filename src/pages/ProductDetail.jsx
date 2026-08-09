import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-4">
        <p className="text-xl">Product not found.</p>
        <Link to="/shop" className="text-indigo-400 hover:text-indigo-300">← Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <button
          onClick={() => navigate(-1)}
          className="text-slate-400 hover:text-white text-sm mb-8 flex items-center gap-1"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Image */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
            {product.badge && (
              <span
                className={`absolute top-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full ${
                  product.badge === 'Sale' ? 'bg-pink-600 text-white' : 'bg-indigo-600 text-white'
                }`}
              >
                {product.badge}
              </span>
            )}
            <span className="text-[10rem] sm:text-[14rem]">{product.emoji}</span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">
              {product.category?.toUpperCase()}
            </p>
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-pink-400 font-bold text-2xl">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-slate-500 text-lg line-through">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-slate-300 text-sm font-medium">Quantity</span>
              <div className="flex items-center bg-slate-900 border border-slate-700 rounded-full">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-pink-400 transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-white font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-pink-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full sm:w-auto px-10 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all transform hover:-translate-y-0.5 ${
                added
                  ? 'bg-green-600 shadow-green-500/25'
                  : 'bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 shadow-pink-500/25'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;