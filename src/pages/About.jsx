import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Shield, BookOpen, Compass, Award, ArrowRight } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { leadershipTeam, values } from '../data/team';

export default function About() {
  return (
    <div className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-midnight pointer-events-none -z-10" />

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 text-center">
        <Badge variant="gold" size="md" className="mb-4">
          Institutional Heritage & Philosophy
        </Badge>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto">
          The Sacred Confluence of <span className="text-gold-gradient">Wisdom</span> & <span className="text-purple-gradient">Knowledge</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The genesis, guiding ethos, and academic vision behind the world's premier transdisciplinary executive academy.
        </p>
      </section>

      {/* The Brand Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left space-y-5">
            <span className="text-xs font-bold tracking-widest text-[#E6CA85] uppercase">
              Our Origin Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              Two Ancient Civilizations. One Frontier Vision.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>
                In an era dominated by superficial data and cognitive fragmentation, <strong className="text-white">JIHYEJNANA</strong> was founded as an antidote to intellectual noise.
              </p>
              <p>
                The name is born from the harmonious marriage of two sacred intellectual traditions:
              </p>
              <div className="p-4 rounded-xl bg-[#0B1222] border-l-4 border-[#E6CA85] space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-[#F5DE9C]">
                    지혜 (Jihye) — Korean Wisdom & Intuitive Discernment
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    The capacity to perceive essence beyond outward form; situational awareness, contemplative calm, and the pragmatic art of living harmoniously with natural truth.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <h4 className="text-sm font-bold text-[#C084FC]">
                    జ్ఞానం (Jñāna) — Telugu & Indic Illuminated Intellect
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    The Sanskrit and classical Telugu realization of ultimate reality; rigorous syllogistic deduction, linguistic perfection, and structural mastery of universal principles.
                  </p>
                </div>
              </div>
              <p>
                Together, <span className="text-[#F5DE9C] font-semibold">JIHYEJNANA</span> stands for a higher order of intellect: <em>Where Wisdom Meets Knowledge</em>. We refuse the false dichotomy between scientific empirical rigor and philosophical depth.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E6CA85]/30 relative shadow-2xl shadow-[#6320EE]/20 group">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                alt="JIHYEJNANA Library & Heritage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070B14]/80 backdrop-blur-md border border-white/10 text-left">
                <p className="text-xs font-semibold text-[#F5DE9C]">Seoul • Hyderabad Epistemic Corridor</p>
                <p className="text-xs text-slate-300 mt-1">
                  "Knowledge without wisdom is reckless power; wisdom without knowledge is powerless contemplation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-2xl border border-[#E6CA85]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#E6CA85]/10 border border-[#E6CA85]/30 flex items-center justify-center text-[#E6CA85] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To cultivate an elite transnational community of scholars, technological architects, and geopolitical leaders who master sovereign technologies while remaining rooted in timeless philosophical ethics and human dignity.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-[#8B5CF6]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#6320EE]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become the world's preeminent intellectual sanctuary where artificial cognition, quantum physics, comparative Asian metaphysics, and international jurisprudence converge to steer humanity through the next century.
            </p>
          </div>
        </div>
      </section>

      {/* Guiding Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="purple" size="md" className="mb-2">
            Foundational Creed
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Core Values & Epistemic Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#090E1A] border border-slate-800 hover:border-[#E6CA85]/40 transition-all">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-base font-bold text-[#F5DE9C]">{val.concept}</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>{val.korean}</span>
                  <span>•</span>
                  <span>{val.telugu}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chancellor & Academic Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gold" size="md" className="mb-2">
            Academic Leadership
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Office of the Chancellor & Distinguished Faculty
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Meet the academic leaders shaping JIHYEJNANA's transdisciplinary curricula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 text-left flex flex-col justify-between"
            >
              <div>
                <div className="h-56 w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#E6CA85] mt-0.5">{member.role}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{member.title}</p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/80 mt-2">
                <p className="text-[10px] text-slate-400 font-mono">
                  {member.degrees}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090E1A] border border-[#E6CA85]/20 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Join the Global Academy
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Applications are evaluated holistically. Connect with our admissions dean to discuss your candidacy.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/courses">
              <Button variant="primary">Browse Curricula</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Admissions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
