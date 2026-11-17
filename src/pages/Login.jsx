import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Sparkles, CheckCircle2, Lock, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
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

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (forgotEmail && forgotEmail.includes('@')) {
      setForgotSuccess(true);
      setTimeout(() => {
        setForgotSuccess(false);
        setForgotModal(false);
        setForgotEmail('');
      }, 2500);
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-16 flex items-center justify-center px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#E6CA85]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md rounded-3xl bg-[#090E1A]/90 backdrop-blur-xl border border-[#E6CA85]/25 p-7 sm:p-9 shadow-2xl shadow-black/60 text-left z-10">
        
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E0F38] via-[#0D1527] to-[#0A0F1D] border border-[#E6CA85]/40 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M12 28V14C12 11.7909 13.7909 10 16 10H17" stroke="#E6CA85" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M28 12V26C28 28.2091 26.2091 30 24 30H23" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2.5" fill="#E6CA85" />
              </svg>
            </div>
          </Link>
          <h1 className="text-2xl font-bold font-heading text-white">
            Scholar Portal Authentication
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Access your executive dashboard, masterclasses, and syndicate labs.
          </p>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Authentication Successful</h3>
            <p className="text-xs text-slate-300">
              Welcome back to JIHYEJNANA. Redirecting to your academic portal...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Registered Email"
              type="email"
              icon={Mail}
              required
              placeholder="scholar@domain.org"
              value={formData.email}
              error={errors.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
            />

            <Input
              label="Password"
              type="password"
              icon={Lock}
              required
              placeholder="••••••••••••"
              value={formData.password}
              error={errors.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: null });
              }}
            />

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="rounded border-slate-700 bg-slate-900 text-[#E6CA85] focus:ring-[#E6CA85]"
                />
                <span>Remember session</span>
              </label>

              <button
                type="button"
                onClick={() => setForgotModal(true)}
                className="text-[#E6CA85] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                Sign In to Portal
              </Button>
            </div>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-[#090E1A] px-2 text-slate-500">Institutional SSO</span>
              </div>
            </div>

            {/* SSO Mock Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setFormData({ email: 'fellow@oxford.edu', password: 'Password123!', rememberMe: true });
                }}
                className="w-full py-2 px-3 rounded-lg border border-slate-800 bg-[#050811] hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Fill Demo Scholar Credentials</span>
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 pt-3">
              Don't have an admitted dossier yet?{' '}
              <Link to="/signup" className="text-[#E6CA85] font-semibold hover:underline">
                Apply for Admission
              </Link>
            </p>
          </form>
        )}
      </div>

      {/* Forgot Password Modal */}
      {forgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-[#090E1A] border border-[#E6CA85]/30 rounded-2xl p-6 text-left shadow-2xl">
            <button
              onClick={() => setForgotModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold font-heading text-white">Password Recovery</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Enter your registered institutional email to receive cryptographic password reset instructions.
            </p>

            {forgotSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 text-center">
                Recovery instructions dispatched. Please check your inbox.
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3">
                <Input
                  label="Registered Email"
                  type="email"
                  required
                  placeholder="scholar@domain.org"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
                <Button type="submit" variant="primary" className="w-full text-xs">
                  Send Recovery Link
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
