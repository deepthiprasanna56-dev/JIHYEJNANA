import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  LogIn,
  UserPlus
} from 'lucide-react';
import Button from './Button';
import { courses } from '../data/courses';

export default function Navbar({ onOpenPromptShowcase }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchQuery.trim() === ''
    ? []
    : courses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.overview.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4);

  const handleSearchResultClick = (courseId) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(`/courses/${courseId}`);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050811]/90 backdrop-blur-md border-b border-[#E6CA85]/15 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E0F38] via-[#0D1527] to-[#0A0F1D] border border-[#E6CA85]/40 flex items-center justify-center shadow-lg shadow-[#E6CA85]/10 group-hover:border-[#E6CA85] transition-all">
                {/* Custom stylized J-J emblem */}
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 28V14C12 11.7909 13.7909 10 16 10H17" stroke="#E6CA85" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M28 12V26C28 28.2091 26.2091 30 24 30H23" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="2.5" fill="#E6CA85" />
                  <path d="M14 20H26" stroke="#E6CA85" strokeWidth="1.5" strokeDasharray="2 2" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider font-heading text-white group-hover:text-gold-gradient transition-all">
                  JIHYE<span className="text-[#E6CA85]">JNANA</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C084FC] font-semibold uppercase -mt-0.5">
                  Wisdom • Knowledge
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#F5DE9C] bg-[#E6CA85]/10 border border-[#E6CA85]/20 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Tools */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-400 hover:text-[#E6CA85] rounded-lg hover:bg-white/5 transition-colors"
                title="Search courses"
                aria-label="Search courses"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Prompt & Imagery Suite Button */}
              {onOpenPromptShowcase && (
                <button
                  onClick={onOpenPromptShowcase}
                  className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#6320EE]/20 hover:bg-[#6320EE]/35 border border-[#8B5CF6]/30 text-[#D8B4FE] transition-all"
                  title="View Website Prompt & Images"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
                  <span>Prompt Guide</span>
                </button>
              )}

              {/* Auth Buttons */}
              <Link
                to="/login"
                className="text-xs font-semibold text-slate-300 hover:text-[#E6CA85] px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                Log In
              </Link>
              <Link to="/signup">
                <Button size="sm" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#E6CA85]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[65px] left-0 right-0 z-30 bg-[#070B14]/98 backdrop-blur-xl border-b border-[#E6CA85]/20 shadow-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-[#E6CA85]/15 text-[#F5DE9C] border border-[#E6CA85]/30'
                        : 'text-slate-200 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </NavLink>
              ))}

              {onOpenPromptShowcase && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPromptShowcase();
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 text-[#D8B4FE] bg-[#6320EE]/20 border border-[#8B5CF6]/30"
                >
                  <Sparkles className="w-4 h-4 text-[#E6CA85]" />
                  <span>Website Prompt & Image Selection Suite</span>
                </button>
              )}

              <div className="pt-4 mt-2 border-t border-slate-800 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-semibold text-[#0A0F1D] bg-gradient-to-r from-[#F5DE9C] to-[#E6CA85] rounded-xl shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-[#090E1A] border border-[#E6CA85]/30 rounded-2xl shadow-2xl p-5 z-10"
            >
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#E6CA85] absolute left-3.5" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search masterclasses, topics (e.g. AI, Philosophy, Quantum, Geopolitics)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#050811] text-white pl-11 pr-10 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-[#E6CA85] text-sm"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Results */}
              <div className="mt-4 max-h-80 overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="py-6 text-center text-xs text-slate-500">
                    Type a query to search across all courses and curricula.
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2">
                      Matching Curricula ({searchResults.length})
                    </p>
                    {searchResults.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => handleSearchResultClick(course.id)}
                        className="p-3 rounded-xl bg-[#0D1527]/60 hover:bg-[#15203B] border border-slate-800/80 hover:border-[#E6CA85]/40 cursor-pointer flex items-center justify-between transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="text-left">
                            <h4 className="text-sm font-semibold text-white">{course.title}</h4>
                            <p className="text-xs text-slate-400">{course.category} • ${course.price}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E6CA85]" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-sm text-slate-400">
                    No matching courses found for "<span className="text-white">{searchQuery}</span>".
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
