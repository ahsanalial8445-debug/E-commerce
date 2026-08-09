import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', detail: '123 Commerce Street, Karachi, Pakistan' },
    { icon: '📧', title: 'Email Us', detail: 'support@shopmax.com' },
    { icon: '📞', title: 'Call Us', detail: '+92 300 1234567' },
    { icon: '🕒', title: 'Working Hours', detail: 'Mon - Sat: 9am - 8pm' },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-black" />
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Floating dots */}
      <div className="absolute top-24 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60 animate-ping animation-delay-2000" />
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-ping animation-delay-4000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-pink-500 text-xs sm:text-sm font-bold tracking-widest mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight mb-4">
            Let's <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex items-start gap-4 transition-all hover:-translate-y-1"
              >
                <span className="text-2xl flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-sm mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {['📘', '📸', '🐦', '💼'].map((icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-pink-600 flex items-center justify-center text-lg transition-all"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-10">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">Send us a message</h2>
              <p className="text-slate-400 text-sm mb-6">We typically respond within 24 hours.</p>

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/40 text-green-400 text-sm rounded-xl px-4 py-3 mb-5">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-slate-300 text-sm block mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm block mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;