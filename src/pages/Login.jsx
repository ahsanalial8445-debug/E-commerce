import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setError('Email ya password galat hai.');
      } else if (err.code === 'auth/user-not-found') {
        setError('Is email se koi account nahi mila.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email format sahi nahi hai.');
      } else {
        setError('Kuch masla ho gaya. Dobara try karein.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <p className="text-pink-500 text-xs font-bold tracking-widest mb-2">
            WELCOME BACK
          </p>
          <h1 className="text-white text-4xl font-bold mb-2">Sign in</h1>
          <p className="text-slate-400 text-sm mb-8">
            Enter your details to continue.
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-slate-300 text-sm block mb-2">Email</label>
              <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500/30 transition-all">
                <span className="text-slate-500 mr-3">✉️</span>
                <input
                  type="email"
                  placeholder="test@test.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent text-white text-sm w-full focus:outline-none placeholder-slate-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-slate-300 text-sm block mb-2">Password</label>
              <div className="flex items-center bg-slate-900 border border-indigo-500 ring-2 ring-indigo-500/20 rounded-xl px-4 py-3 transition-all">
                <span className="text-slate-500 mr-3">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent text-white text-sm w-full focus:outline-none placeholder-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 hover:text-slate-300 ml-2"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember me / Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 accent-pink-500"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </Link>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Or continue with */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="px-4 text-slate-500 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl py-3 hover:bg-slate-800 transition-colors">
              <span className="text-white text-lg">G</span>
            </button>
            <button className="flex-1 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl py-3 hover:bg-slate-800 transition-colors">
              <span className="text-white text-lg">🐙</span>
            </button>
          </div>
        </div>

        {/* Right Side - Gradient Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 p-8 sm:p-12 flex flex-col justify-center items-start relative overflow-hidden min-h-[300px] md:min-h-0">
          <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full opacity-70" />
          <div className="absolute top-20 right-24 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          <div className="absolute top-16 right-16 w-32 h-32 border border-white/20 rounded-full" />

          <h2 className="text-white text-3xl font-bold mb-4 relative z-10">
            New around here?
          </h2>
          <p className="text-white/80 text-sm mb-8 relative z-10 max-w-xs">
            Create an account and unlock the full experience.
          </p>
          <Link
            to="/signup"
            className="relative z-10 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 transition-all"
          >
            Create account
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;