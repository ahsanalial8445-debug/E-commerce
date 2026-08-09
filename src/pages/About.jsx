import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '10K+', label: 'Products Sold' },
    { value: '4.8★', label: 'Average Rating' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const values = [
    { icon: '🚀', title: 'Fast Delivery', desc: 'Get your orders delivered quickly and reliably, right to your doorstep.' },
    { icon: '💎', title: 'Quality First', desc: 'Every product is carefully selected to meet our high quality standards.' },
    { icon: '🔒', title: 'Secure Shopping', desc: 'Your data and payments are protected with industry-leading security.' },
    { icon: '❤️', title: 'Customer Focused', desc: 'We put our customers at the heart of everything we do.' },
  ];

  return (
    <div className="min-h-screen bg-black">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-black" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-pink-500 text-xs sm:text-sm font-bold tracking-widest mb-4">
            OUR STORY
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight mb-6">
            Redefining how you <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">shop online</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            ShopMax started with a simple idea — make online shopping fast, easy, and enjoyable.
            Today, we bring you curated products across fashion, tech, and lifestyle, all in one place.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-white text-2xl sm:text-3xl font-black mb-1 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">WHY CHOOSE US</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold">What We Stand For</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <span className="text-4xl block mb-4">{val.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{val.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
          Ready to start shopping?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Join thousands of happy customers and discover products you'll love.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
        >
          Browse Products
        </Link>
      </section>

    </div>
  );
};

export default About;