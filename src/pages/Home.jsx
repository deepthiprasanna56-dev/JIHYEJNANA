import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  BookOpen,
  Users,
  Compass,
  Star,
  Cpu,
  Brain,
  Globe2,
  TrendingUp,
  Landmark,
  Palette,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import Badge from '../components/Badge';
import { courses, categories } from '../data/courses';
import { testimonials, statistics } from '../data/testimonials';

export default function Home({ onEnrollCourse, onOpenPromptShowcase }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredCourses = courses.filter(c => c.featured);

  const categoryIcons = {
    "all": Compass,
    "AI & Technology": Cpu,
    "Philosophy & Ethics": Brain,
    "Strategic Leadership": Globe2,
    "Finance & Architecture": Landmark,
    "Arts & Culture": Palette
  };

  return (
    <div className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial-midnight pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#E6CA85]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 left-10 w-96 h-96 bg-[#6320EE]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 text-center">
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6CA85]/10 border border-[#E6CA85]/30 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
          <span className="text-xs font-semibold tracking-wider text-[#F5DE9C] uppercase">
            Global Intellectual Academy
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-300">Seoul & Hyderabad Synthesis</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading max-w-5xl mx-auto leading-[1.12]"
        >
          Where <span className="text-gold-gradient">Wisdom</span> Meets{' '}
          <span className="text-purple-gradient">Knowledge</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          JIHYEJNANA unites the contemplative discernment of Korean <em>Jihye</em> (지혜) with the illuminated structured intellect of ancient Telugu-Indic <em>Jñāna</em> (జ్ఞాన). Master frontier artificial intelligence, quantum systems, comparative epistemology, and geopolitical architecture.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/courses">
            <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
              Explore Masterclasses
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="secondary">
              Discover Our Heritage
            </Button>
          </Link>
          {onOpenPromptShowcase && (
            <Button
              size="lg"
              variant="outline"
              icon={Sparkles}
              iconPosition="left"
              onClick={onOpenPromptShowcase}
              className="text-xs border-[#8B5CF6]/40 text-[#D8B4FE] hover:border-[#8B5CF6]"
            >
              Prompt & Visual Suite
            </Button>
          )}
        </motion.div>

        {/* Statistics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {statistics.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#090E1A]/60 border border-slate-800/60">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-gold-gradient block">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1 block">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <Badge variant="purple" size="md" className="mb-2">
              Academic Faculties
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              Pillars of Contemporary Thought
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Cross-disciplinary curricula curated by endowed academic chairs and industry directors.
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E6CA85] hover:text-[#FFF1C6] transition-colors">
            <span>Browse Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Compass;
            return (
              <Link
                key={cat.id}
                to={`/courses?category=${encodeURIComponent(cat.id)}`}
                className="glass-card p-4 rounded-xl text-center group hover:border-[#E6CA85]/50 transition-all flex flex-col items-center justify-center min-h-[120px]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#6320EE]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#E6CA85] group-hover:scale-110 transition-transform mb-2">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-[#F5DE9C] transition-colors leading-tight">
                  {cat.name}
                </h4>
                <span className="text-[10px] text-slate-400 mt-1">
                  {cat.count} Programs
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Masterclasses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gold" size="md" className="mb-2">
            Flagship Masterclasses
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Curated Executive Curricula
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Intensive masterclasses designed for senior practitioners, researchers, and global executives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={onEnrollCourse}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button size="lg" variant="secondary" icon={ArrowRight} iconPosition="right">
              View All 8 Programs
            </Button>
          </Link>
        </div>
      </section>

      {/* The JihyeJnana Pedagogy / Learning Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="relative rounded-3xl overflow-hidden border border-[#E6CA85]/20 bg-gradient-to-b from-[#0B1222] to-[#050811] p-8 sm:p-14">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6CA85]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#E6CA85] uppercase">
              The JihyeJnana Pedagogy
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mt-1">
              Why the World's Keenest Minds Choose JIHYEJNANA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#070B14]/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#E6CA85]/10 border border-[#E6CA85]/30 flex items-center justify-center text-[#E6CA85] mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Dual Wisdom Philosophy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We combine Eastern intuitive discernment (Korean <em>Jihye</em>) with deep analytical logic (Indic <em>Jñāna</em>) for complete cognitive mastery.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B14]/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#6320EE]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Distinguished Faculty</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct mentorship from former university deans, sovereign wealth advisors, and leading AI research lab heads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B14]/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#E6CA85]/10 border border-[#E6CA85]/30 flex items-center justify-center text-[#E6CA85] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Executive Peer Masterminds</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engage in closed-door syndicate discussions with leaders from 62+ sovereign nations and Fortune 500 enterprises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B14]/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#6320EE]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Verified Fellowship</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cryptographically verifiable diplomas recognized across international research consortia and corporate boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="purple" size="md" className="mb-2">
            Scholar Voices
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Perspectives from Global Fellows
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Hear from corporate directors, scientific chiefs, and sovereign advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6CA85] text-[#E6CA85]" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#E6CA85]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-[#E6CA85]">{t.role}</p>
                  <p className="text-[11px] text-slate-400">{t.location} • <span className="text-slate-300">{t.course}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center border border-[#E6CA85]/30 bg-gradient-to-r from-[#0C1222] via-[#140D2B] to-[#0A0F1D] shadow-2xl shadow-[#6320EE]/20">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#E6CA85]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#6320EE]/25 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-2xl mx-auto">
            Begin Your Intellectual Odyssey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Admissions for the upcoming 2026 Executive Cohorts are now open. Secure your fellowship in the world's most distinguished transdisciplinary academy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                Explore All Curricula
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Consult with Admissions Dean
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
