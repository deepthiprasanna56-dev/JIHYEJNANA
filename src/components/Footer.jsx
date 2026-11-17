import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2, MapPin, Globe, Sparkles, Send } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid institutional or personal email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="relative bg-[#04060C] text-slate-400 border-t border-[#E6CA85]/15 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6CA85]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E0F38] via-[#0D1527] to-[#0A0F1D] border border-[#E6CA85]/40 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 28V14C12 11.7909 13.7909 10 16 10H17" stroke="#E6CA85" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M28 12V26C28 28.2091 26.2091 30 24 30H23" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="2.5" fill="#E6CA85" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading text-white">
                  JIHYE<span className="text-[#E6CA85]">JNANA</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C084FC] uppercase font-semibold">
                  Where Wisdom Meets Knowledge
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An elite transnational academy synthesizing Korean <em>Jihye</em> (지혜, intuitive discernment) and ancient Telugu-Indic <em>Jñāna</em> (జ్ఞాన, illuminated structured intellect) to prepare humanity's foremost leaders.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D1527] border border-slate-800">
                <Globe className="w-3.5 h-3.5 text-[#E6CA85]" />
                <span>Seoul • Hyderabad • Geneva</span>
              </div>
            </div>
          </div>

          {/* Academics Links */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses" className="hover:text-[#E6CA85] transition-colors">
                  Frontier AI Systems
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#E6CA85] transition-colors">
                  Comparative Epistemology
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#E6CA85] transition-colors">
                  Geo-Economic Strategy
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#E6CA85] transition-colors">
                  Quantum Information Science
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#E6CA85] transition-colors">
                  Haute Creative Directorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Institute Links */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Institute
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#E6CA85] transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E6CA85] transition-colors">
                  Chancellor & Faculty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E6CA85] transition-colors">
                  Admissions Concierge
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E6CA85] transition-colors">
                  Honor Code & IP Charter
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E6CA85] transition-colors">
                  Research Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              The Chancellor's Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Receive bi-weekly peer dispatches on frontier intelligence, philosophy, and global strategy.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="scholar@domain.org"
                    className="w-full bg-[#0A0F1D] border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 pr-9 focus:outline-none focus:border-[#E6CA85]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-[#E6CA85] hover:text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-400">{error}</p>}
              </form>
            ) : (
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscription registered. Welcome to the Dispatch.</span>
              </div>
            )}
          </div>
        </div>

        {/* Global Campus Addresses */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-b border-slate-800/80 text-xs">
          <div>
            <span className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#E6CA85]" />
              Seoul Campus & Epistemic Lab
            </span>
            <p className="text-slate-400">Teheran-ro 152, Gangnam-gu, Seoul 06236, South Korea</p>
          </div>
          <div>
            <span className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#C084FC]" />
              Hyderabad Center for Indic Intellect
            </span>
            <p className="text-slate-400">Mindspace Madhapur, HITEC City, Hyderabad 500081, India</p>
          </div>
          <div>
            <span className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#E6CA85]" />
              Geneva Sovereign Executive Liaison
            </span>
            <p className="text-slate-400">Rue du Rhône 42, 1204 Geneva, Switzerland</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} JIHYEJNANA Global Academy Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#E6CA85] transition-colors">Privacy Charter</Link>
            <Link to="/about" className="hover:text-[#E6CA85] transition-colors">Academic Terms</Link>
            <Link to="/contact" className="hover:text-[#E6CA85] transition-colors">Admissions Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
