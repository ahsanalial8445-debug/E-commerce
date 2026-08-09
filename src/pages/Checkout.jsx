import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacing(true);

    // Yahan aap apna backend/Firestore order-saving logic call kar sakte hain
    setTimeout(() => {
      setPlacing(false);
      setPlaced(true);
      clearCart();
    }, 1500);
  };

  if (cartItems.length === 0 && !placed) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl mb-6">🛒</span>
        <h1 className="text-white text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-slate-400 text-sm mb-8">Add some products before checking out.</p>
        <Link
          to="/shop"
          className="bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/25 transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl mb-6">✅</span>
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Order Placed!</h1>
        <p className="text-slate-400 text-sm mb-8 max-w-sm">
          {paymentMethod === 'cod'
            ? 'Your order has been placed. Pay in cash when it arrives at your doorstep.'
            : 'Your payment was successful and your order is being processed.'}
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/25 transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left - Delivery + Payment */}
          <div className="lg:col-span-2 space-y-6">

            {/* Delivery Info */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white text-lg font-bold mb-5">Delivery Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-slate-300 text-sm block mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="03XX-XXXXXXX"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Karachi"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-slate-300 text-sm block mb-2">Full Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="House #, Street, Area"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="75500"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-white text-lg font-bold mb-5">Payment Method</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {/* Cash on Delivery */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex items-center gap-3 border rounded-xl px-4 py-4 text-left transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <span className="text-2xl">💵</span>
                  <div>
                    <p className="text-white text-sm font-semibold">Cash on Delivery</p>
                    <p className="text-slate-400 text-xs">Pay when it arrives</p>
                  </div>
                </button>

                {/* Card Payment */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center gap-3 border rounded-xl px-4 py-4 text-left transition-all ${
                    paymentMethod === 'card'
                      ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <span className="text-2xl">💳</span>
                  <div>
                    <p className="text-white text-sm font-semibold">Card Payment</p>
                    <p className="text-slate-400 text-xs">Debit / Credit card</p>
                  </div>
                </button>
              </div>

              {/* Card fields - only show if card selected */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="pt-4">
                    <label className="text-slate-300 text-sm block mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      required={paymentMethod === 'card'}
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 text-sm block mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={form.cardExpiry}
                        onChange={handleChange}
                        required={paymentMethod === 'card'}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 text-sm block mb-2">CVV</label>
                      <input
                        type="text"
                        name="cardCvv"
                        value={form.cardCvv}
                        onChange={handleChange}
                        required={paymentMethod === 'card'}
                        placeholder="123"
                        maxLength={3}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-white text-lg font-bold mb-5">Order Summary</h2>

            <div className="space-y-3 mb-5 max-h-64 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-800 rounded-lg flex items-center justify-center text-xl">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">{item.name}</p>
                    <p className="text-slate-500 text-xs">Qty: {item.qty}</p>
                  </div>
                  <p className="text-slate-300 text-xs font-semibold whitespace-nowrap">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm border-t border-slate-800 pt-4">
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
              type="submit"
              disabled={placing}
              className="w-full bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-pink-500/25 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placing
                ? 'Placing Order...'
                : paymentMethod === 'cod'
                ? 'Place Order (COD)'
                : 'Pay & Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;