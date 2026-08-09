import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Yahan aap apni search logic ya navigation add kar sakte hain
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/categories', label: 'Categories' },
    { to: '/deals', label: 'Deals' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              🛍️
            </span>
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              ShopMax
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">

            {/* Click-to-Expand Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden sm:flex items-center bg-slate-800 border border-slate-700/60 rounded-full px-3 py-1.5 transition-all duration-300 shadow-inner ${
                isSearchOpen ? 'w-48 lg:w-64 border-indigo-500 ring-2 ring-indigo-500/30' : 'w-10 bg-slate-800'
              }`}
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                className={`bg-transparent text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                  isSearchOpen ? 'w-full opacity-100 pl-1' : 'w-0 opacity-0'
                }`}
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-slate-400 hover:text-indigo-400 transition-colors p-1 rounded-full focus:outline-none"
                aria-label="Search"
              >
                🔍
              </button>
            </form>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-800/60 transition-colors"
            >
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login / User - Desktop */}
            {currentUser ? (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-slate-300 text-sm">
                  👋 {currentUser.displayName || currentUser.email.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-slate-400 hover:text-red-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-slate-700 hover:border-red-500/50 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>🔐</span>
                <span>Login</span>
              </Link>
            )}

            {/* Mobile Cart Icon */}
            <Link
              to="/cart"
              className="relative sm:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-800/60 transition-colors"
            >
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white rounded my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] border-t border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-slate-900/95">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-slate-800 border border-slate-700/60 rounded-full px-3 py-2 mt-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-slate-200 placeholder-slate-400 focus:outline-none w-full"
            />
            <button type="submit" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Search">
              🔍
            </button>
          </form>

          {/* Mobile Login/Logout */}
          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full mt-3 w-full"
            >
              <span>🚪</span>
              <span>Logout ({currentUser.displayName || currentUser.email.split('@')[0]})</span>
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg mt-3"
            >
              <span>🔐</span>
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;