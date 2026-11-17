import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Sparkles, CheckCircle2, Lock, Mail, User, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    track: 'AI & Cognitive Architecture',
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // Password strength calculation
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: 'None', color: 'bg-slate-700' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 25, label: 'Weak', color: 'bg-rose-500' };
    if (score === 2 || score === 3) return { score: 65, label: 'Medium', color: 'bg-amber-400' };
    return { score: 100, label: 'Strong & Secure', color: 'bg-emerald-400' };
  };

  const strength = getPasswordStrength(formData.password);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmation password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the JIHYEJNANA Academic Honor Code.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/courses');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 flex items-center justify-center px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#E6CA85]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-lg rounded-3xl bg-[#090E1A]/90 backdrop-blur-xl border border-[#E6CA85]/25 p-7 sm:p-9 shadow-2xl shadow-black/60 text-left z-10">
        
        {/* Brand header */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2 mb-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E0F38] via-[#0D1527] to-[#0A0F1D] border border-[#E6CA85]/40 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M12 28V14C12 11.7909 13.7909 10 16 10H17" stroke="#E6CA85" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M28 12V26C28 28.2091 26.2091 30 24 30H23" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2.5" fill="#E6CA85" />
              </svg>
            </div>
          </Link>
          <h1 className="text-2xl font-bold font-heading text-white">
            Register for Fellowship Candidacy
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Create your unified identity for global masterclasses, peer syndicates, and research archives.
          </p>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Fellowship Account Activated</h3>
            <p className="text-xs text-slate-300">
              Welcome, <strong className="text-[#F5DE9C]">{formData.name}</strong>. Redirecting to course directory...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Legal Name"
              icon={User}
              required
              placeholder="Dr. / Prof. / Scholar..."
              value={formData.name}
              error={errors.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: null });
              }}
            />

            <Input
              label="Academic or Corporate Email"
              type="email"
              icon={Mail}
              required
              placeholder="scholar@institution.org"
              value={formData.email}
              error={errors.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
            />

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Primary Field of Focus <span className="text-[#E6CA85]">*</span>
              </label>
              <select
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className="w-full rounded-lg bg-[#070B14]/80 border border-slate-800 py-2.5 px-3.5 text-sm text-slate-100 focus:outline-none focus:border-[#E6CA85] focus:ring-2 focus:ring-[#E6CA85]/30 transition-all"
              >
                <option value="AI & Cognitive Architecture">AI & Frontier Cognitive Architecture</option>
                <option value="Philosophy & Epistemology">Comparative Philosophy & Asian Epistemology</option>
                <option value="Strategic Leadership & Geopolitics">Global Geopolitics & Geo-Economics</option>
                <option value="Quantum Systems & Cryptography">Quantum Computation & Cryptography</option>
                <option value="Private Capital & Macro Finance">Sovereign Wealth & Private Markets</option>
                <option value="Creative Directorship">Haute Creative Directorship & Narrative</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  label="Secure Password"
                  type="password"
                  icon={Lock}
                  required
                  placeholder="Min 8 characters"
                  value={formData.password}
                  error={errors.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    if (errors.password) setErrors({ ...errors, password: null });
                  }}
                />
                {/* Password strength indicator */}
                {formData.password && (
                  <div className="mt-1.5">
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strength.color} transition-all duration-300`}
                        style={{ width: `${strength.score}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      Strength: <strong className="text-slate-200">{strength.label}</strong>
                    </span>
                  </div>
                )}
              </div>

              <Input
                label="Confirm Password"
                type="password"
                icon={Lock}
                required
                placeholder="Repeat password"
                value={formData.confirmPassword}
                error={errors.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                }}
              />
            </div>

            <div className="pt-1">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={(e) => {
                    setFormData({ ...formData, terms: e.target.checked });
                    if (errors.terms) setErrors({ ...errors, terms: null });
                  }}
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-[#E6CA85] focus:ring-[#E6CA85]"
                />
                <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                  I pledge allegiance to the JIHYEJNANA Academic Honor Code, Intellectual Property Treaty, and Global Fellowship Ethics.
                </label>
              </div>
              {errors.terms && (
                <p className="mt-1 text-xs text-red-400 font-medium">⚠ {errors.terms}</p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                Create Scholar Account
              </Button>
            </div>

            <p className="text-center text-xs text-slate-400 pt-3">
              Already admitted?{' '}
              <Link to="/login" className="text-[#E6CA85] font-semibold hover:underline">
                Sign in to your portal
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
