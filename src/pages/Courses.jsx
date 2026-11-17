import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { courses, categories } from '../data/courses';

export default function Courses({ onEnrollCourse }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('highest-rated');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSortBy('highest-rated');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'all' || course.category === selectedCategory;

        // Level filter
        const matchesLevel =
          selectedLevel === 'all' ||
          course.level.toLowerCase().includes(selectedLevel.toLowerCase());

        // Search text matching
        const query = searchTerm.toLowerCase().trim();
        const matchesSearch =
          query === '' ||
          course.title.toLowerCase().includes(query) ||
          course.subtitle.toLowerCase().includes(query) ||
          course.overview.toLowerCase().includes(query) ||
          course.tags.some(tag => tag.toLowerCase().includes(query)) ||
          course.instructor.name.toLowerCase().includes(query);

        return matchesCategory && matchesLevel && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'highest-rated') return b.rating - a.rating;
        if (sortBy === 'most-popular') return b.enrolledCount - a.enrolledCount;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className="relative pt-24 sm:pt-28 pb-20 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-midnight pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 text-center">
        <Badge variant="gold" size="md" className="mb-3">
          Academic Catalogue
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto">
          Executive Masterclasses & Fellowships
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Immerse yourself in rigorous curricula led by distinguished researchers, sovereign advisors, and university chairs.
        </p>
      </section>

      {/* Search, Filters & Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-4 sm:p-6 rounded-2xl bg-[#080D1A] border border-slate-800 shadow-xl space-y-4">
          
          {/* Top row: Search input & Dropdown controls */}
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search masterclasses, topics, professors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#050811] text-white text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-[#E6CA85] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dropdown Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Level Filter */}
              <div className="w-1/2 md:w-44">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full bg-[#050811] text-slate-200 text-xs py-2.5 px-3 rounded-xl border border-slate-700/80 focus:outline-none focus:border-[#E6CA85]"
                >
                  <option value="all">All Difficulty Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced & Executive</option>
                </select>
              </div>

              {/* Sort By Filter */}
              <div className="w-1/2 md:w-44">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-[#050811] text-slate-200 text-xs py-2.5 px-3 rounded-xl border border-slate-700/80 focus:outline-none focus:border-[#E6CA85]"
                >
                  <option value="highest-rated">Highest Rated</option>
                  <option value="most-popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom row: Category filter pills */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#E6CA85] text-[#0A0F1D] font-bold shadow-md shadow-[#E6CA85]/20'
                    : 'bg-[#0E1626] text-slate-300 hover:bg-[#16233B] hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Counter strip */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
          <span>
            Showing <strong className="text-white">{filteredCourses.length}</strong> of {courses.length} Masterclasses
          </span>
          {(searchTerm || selectedCategory !== 'all' || selectedLevel !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-[#E6CA85] hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={onEnrollCourse}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-[#090E1A] border border-slate-800 max-w-xl mx-auto p-8">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              No matching courses found
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              We couldn't find any curriculum matching your current search query or active filter combination.
            </p>
            <div className="mt-6">
              <Button variant="primary" onClick={handleResetFilters}>
                Clear Filters & Show All
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
