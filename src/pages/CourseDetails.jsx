import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Clock,
  BarChart3,
  Globe,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  Share2,
  ShieldCheck,
  BookOpen,
  ArrowLeft,
  FileCheck,
  Sparkles
} from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function CourseDetails({ onEnrollCourse }) {
  const { id } = useParams();
  const [expandedModule, setExpandedModule] = useState(0); // first module open by default
  const [copiedShare, setCopiedShare] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const course = courses.find((c) => c.id === id || c.slug === id) || courses[0];

  const relatedCourses = courses
    .filter((c) => c.id !== course.id && (c.category === course.category || c.featured))
    .slice(0, 2);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? -1 : index);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="relative pt-24 sm:pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-midnight pointer-events-none -z-10" />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 text-left">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-[#E6CA85] font-medium truncate max-w-xs">{course.title}</span>
        </div>
      </div>

      {/* Course Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-left">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="gold" size="sm">{course.badge || 'Executive Program'}</Badge>
          <Badge variant="navy" size="sm">{course.category}</Badge>
          <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Admissions Open
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white max-w-4xl leading-tight">
          {course.title}
        </h1>
        <p className="mt-3 text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light">
          {course.subtitle}
        </p>

        {/* Rating and Cohort Metrics */}
        <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1 text-[#F5DE9C] font-semibold bg-[#E6CA85]/10 px-2.5 py-1 rounded-md border border-[#E6CA85]/20">
            <Star className="w-4 h-4 fill-[#E6CA85] text-[#E6CA85]" />
            <span>{course.rating}</span>
            <span className="text-slate-400 font-normal">({course.reviewCount} verified reviews)</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <BookOpen className="w-4 h-4 text-[#E6CA85]" />
            <span>{course.enrolledCount.toLocaleString()} Global Scholars</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <Clock className="w-4 h-4 text-[#C084FC]" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <BarChart3 className="w-4 h-4 text-[#E6CA85]" />
            <span>{course.level}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout (2 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Media, Overview, Outcomes, Syllabus, Faculty */}
          <div className="lg:col-span-2 space-y-10 text-left">
            
            {/* Visual Preview Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0A0F1D] aspect-video group shadow-2xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="w-16 h-16 rounded-full bg-[#E6CA85]/90 hover:bg-[#FFF1C6] text-[#0A0F1D] flex items-center justify-center shadow-xl shadow-[#E6CA85]/30 group-hover:scale-110 transition-transform pl-1"
                  aria-label="Play course overview preview"
                >
                  <Play className="w-7 h-7 fill-current" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white">
                Syllabus Preview & Faculty Orientation (3:45 mins)
              </div>
            </div>

            {/* Course Overview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A] border border-slate-800/80 space-y-4">
              <h2 className="text-xl font-bold font-heading text-white">
                Masterclass Overview
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {course.overview}
              </p>
              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E6CA85]" />
                <span>Certification: <strong className="text-slate-200">{course.certification}</strong></span>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A] border border-slate-800/80 space-y-5">
              <h2 className="text-xl font-bold font-heading text-white">
                Core Competencies & Strategic Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Syllabus Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold font-heading text-white">
                    Comprehensive Curriculum & Modules
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {course.syllabus.length} Modules • Rigorous academic & applied laboratory sessions
                  </p>
                </div>
                <button
                  onClick={() => setExpandedModule(expandedModule === -1 ? 0 : -1)}
                  className="text-xs text-[#E6CA85] hover:underline"
                >
                  {expandedModule === -1 ? "Expand First Module" : "Collapse All"}
                </button>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => {
                  const isOpen = expandedModule === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-800 bg-[#090E1A] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-[#E6CA85]/10 border border-[#E6CA85]/30 flex items-center justify-center text-xs font-bold text-[#F5DE9C]">
                            {mod.module}
                          </span>
                          <div>
                            <h3 className="text-sm font-bold text-white">{mod.title}</h3>
                            <span className="text-xs text-slate-400">{mod.duration}</span>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 border-t border-slate-800/80 bg-[#050811]/60 space-y-2.5">
                          {mod.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#0D1527]/50 border border-slate-800"
                            >
                              <div className="flex items-center gap-2">
                                <Play className="w-3 h-3 text-[#E6CA85]" />
                                <span className="text-slate-200">{lesson.title}</span>
                              </div>
                              <span className="text-slate-500 font-mono">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructor Profile Dossier */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A] border border-slate-800/80 space-y-4">
              <h2 className="text-xl font-bold font-heading text-white">
                Faculty & Course Directors
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E6CA85]/40 shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white">{course.instructor.name}</h3>
                  <p className="text-xs font-semibold text-[#E6CA85]">{course.instructor.role}</p>
                  <p className="text-xs text-slate-400 font-mono">{course.instructor.credentials}</p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="p-6 rounded-2xl bg-[#090E1A] border border-slate-800 text-xs text-slate-300 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#C084FC]" />
                Academic Prerequisites & Candidacy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Enrollment Box */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0F1D] border border-[#E6CA85]/30 shadow-2xl shadow-[#E6CA85]/10 text-left space-y-6">
                
                {/* Pricing Block */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                    Tuition Investment
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gold-gradient">
                      ${course.price}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">USD</span>
                    {course.originalPrice && (
                      <span className="text-sm text-slate-500 line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-emerald-400 font-medium mt-1">
                    Institutional Scholarship & Cohort Grant Applied
                  </p>
                </div>

                {/* Primary Enrollment Action */}
                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full text-base font-bold"
                    onClick={() => onEnrollCourse(course)}
                  >
                    Enroll in Masterclass
                  </Button>
                  <Button
                    size="md"
                    variant="secondary"
                    className="w-full text-xs"
                    onClick={handleShare}
                  >
                    <Share2 className="w-3.5 h-3.5 mr-1" />
                    <span>{copiedShare ? "Link Copied to Clipboard!" : "Share Syllabus with Team"}</span>
                  </Button>
                </div>

                {/* What's included */}
                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Fellowship Inclusions
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span>Direct Live Mastermind Seminars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span>Verifiable Cryptographic Fellowship Credential</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span>Lifetime Access to Course Revisions & Labs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span>Closed Executive Scholar Network (Alumni Syndicate)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span>Full 30-Day Money-Back Honor Guarantee</span>
                    </li>
                  </ul>
                </div>

                {/* Guarantee notice */}
                <div className="p-3 rounded-xl bg-[#050811] border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Admissions review within 24 hours of application.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Curricula */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-left mb-8">
          <Badge variant="purple" size="sm" className="mb-2">Explore Related Disciplines</Badge>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Complementary Fellowships
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedCourses.map((c) => (
            <CourseCard
              key={c.id}
              course={c}
              onEnroll={onEnrollCourse}
            />
          ))}
        </div>
      </section>

      {/* Video Preview Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#090E1A] border border-[#E6CA85]/30 rounded-2xl overflow-hidden shadow-2xl p-6 text-center">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-white mb-2">
              Orientation Teaser: {course.title}
            </h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-800 text-slate-400 text-xs space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#E6CA85]/20 border border-[#E6CA85]/40 flex items-center justify-center text-[#E6CA85]">
                <Play className="w-8 h-8 fill-current pl-1" />
              </div>
              <p>Faculty Lecture & Syllabus Teaser Simulated Player</p>
              <p className="text-[11px] text-slate-400">Resolution: 4K UHD • High-Fidelity Audio</p>
            </div>
            <div className="mt-4 flex justify-end">
              <Button size="sm" variant="primary" onClick={() => setVideoModalOpen(false)}>
                Return to Overview
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
