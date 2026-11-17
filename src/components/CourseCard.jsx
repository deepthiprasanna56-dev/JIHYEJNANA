import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, BarChart3, ArrowRight, User } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';

export default function CourseCard({ course, onEnroll }) {
  return (
    <div className="glass-card flex flex-col rounded-2xl overflow-hidden group border border-slate-800/80 hover:border-[#E6CA85]/40 transition-all duration-300">
      {/* Course Image & Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-transparent to-black/30" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {course.badge && (
            <Badge variant="gold" size="sm">
              {course.badge}
            </Badge>
          )}
          <Badge variant="navy" size="sm">
            {course.category}
          </Badge>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs text-[#F5DE9C] font-semibold">
          <Star className="w-3.5 h-3.5 fill-[#E6CA85] text-[#E6CA85]" />
          <span>{course.rating}</span>
          <span className="text-slate-400 font-normal">({course.reviewCount})</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E6CA85]" />
              {course.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
              {course.level}
            </span>
          </div>

          <Link to={`/courses/${course.id}`}>
            <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#F5DE9C] transition-colors line-clamp-1">
              {course.title}
            </h3>
          </Link>
          <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {course.subtitle || course.overview}
          </p>

          {/* Instructor snippet */}
          <div className="mt-4 flex items-center gap-2.5 pt-3 border-t border-slate-800/80">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover border border-[#E6CA85]/30"
            />
            <div className="text-left overflow-hidden">
              <p className="text-xs font-medium text-slate-200 truncate">{course.instructor.name}</p>
              <p className="text-[11px] text-slate-500 truncate">{course.instructor.credentials.split(';')[0]}</p>
            </div>
          </div>
        </div>

        {/* Pricing and Action CTAs */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Tuition</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-[#F5DE9C]">${course.price}</span>
              {course.originalPrice && (
                <span className="text-xs text-slate-500 line-through">${course.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/courses/${course.id}`}
              className="text-xs font-semibold text-slate-300 hover:text-[#E6CA85] px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onEnroll && onEnroll(course)}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
