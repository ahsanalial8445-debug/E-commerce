import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl mb-6">🛒</span>
        <h1 className="text-white text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-slate-400 text-sm mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/shop"
          className="bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/25 transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="w-20 h-20 flex-shrink-0 bg-slate-800 rounded-xl flex items-center justify-center text-3xl"
                >
                  {item.emoji}
                </Link>

                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`} className="text-white font-semibold text-sm sm:text-base hover:text-pink-400 transition-colors block truncate">
                    {item.name}
                  </Link>
                  <p className="text-pink-400 font-bold text-sm mt-1">${item.price.toFixed(2)}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-full">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-white hover:text-pink-400 transition-colors text-sm"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-white text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-white hover:text-pink-400 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-500 hover:text-red-400 text-xs font-medium transition-colors"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>

                <p className="text-white font-bold text-sm sm:text-base whitespace-nowrap">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-white text-lg font-bold mb-5">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-slate-800 pt-3 flex justify-between text-white font-bold text-base">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-pink-500/25 transition-all mt-6"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center text-indigo-400 hover:text-indigo-300 text-sm mt-4"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;