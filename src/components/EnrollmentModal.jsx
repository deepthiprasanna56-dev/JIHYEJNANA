import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';
import Button from './Button';
import Input from './Input';

export default function EnrollmentModal({ isOpen, onClose, course }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cohort: 'Executive Live Cohort (Recommended)',
    acknowledgment: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [admissionId, setAdmissionId] = useState('');

  if (!isOpen || !course) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setAdmissionId(`JJ-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSuccess(false);
    setLoading(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      cohort: 'Executive Live Cohort (Recommended)',
      acknowledgment: false
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#E6CA85]/30 bg-[#090E1A] p-6 sm:p-8 text-left shadow-2xl shadow-[#E6CA85]/10 z-10"
        >
          {/* Top ambient glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#8B5CF6]/25 blur-3xl pointer-events-none rounded-full" />
          
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!success ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-[#E6CA85]/10 text-[#F5DE9C] border border-[#E6CA85]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
                  Admissions Application
                </span>
                <span className="text-xs text-slate-400">Class of 2026</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Enroll in <span className="text-gold-gradient">{course.title}</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Join an elite cohort of global scholars and industry directors.
              </p>

              {/* Course Brief Banner */}
              <div className="my-5 p-3.5 rounded-xl bg-[#0D1527] border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Tuition Investment</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#F5DE9C]">${course.price} USD</span>
                    {course.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400 space-y-0.5">
                  <div className="flex items-center justify-end gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#E6CA85]" />
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-emerald-400 font-medium">Includes Verified Fellowship</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Legal Name"
                  required
                  placeholder="e.g. Dr. Jennifer Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                  label="Corporate or Academic Email"
                  type="email"
                  required
                  placeholder="scholar@organization.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Select Enrollment Track <span className="text-[#E6CA85]">*</span>
                  </label>
                  <select
                    value={formData.cohort}
                    onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                    className="w-full rounded-lg bg-[#070B14]/80 border border-slate-800 py-2.5 px-3.5 text-sm text-slate-100 focus:outline-none focus:border-[#E6CA85] focus:ring-2 focus:ring-[#E6CA85]/30 transition-all"
                  >
                    <option value="Executive Live Cohort (Recommended)">
                      Executive Live Cohort (Faculty Workshops + Masterminds)
                    </option>
                    <option value="Accelerated Independent Scholar (Self-paced)">
                      Accelerated Independent Scholar (Immediate Self-Paced Access)
                    </option>
                    <option value="Enterprise Team License (5+ Seats)">
                      Enterprise Team License (Direct Invoicing & Custom Labs)
                    </option>
                  </select>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="ack"
                    required
                    checked={formData.acknowledgment}
                    onChange={(e) => setFormData({ ...formData, acknowledgment: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-[#E6CA85] focus:ring-[#E6CA85]"
                  />
                  <label htmlFor="ack" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                    I agree to the JIHYEJNANA Academic Honor Code, Intellectual Property Charter, and 30-day money-back satisfaction guarantee.
                  </label>
                </div>

                <div className="pt-3 flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-1/3"
                    onClick={handleResetAndClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    className="w-2/3"
                  >
                    Confirm & Complete Enrollment
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-Bit Encrypted Academic Portal • Instant Access</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#E6CA85]/15 text-[#F5DE9C] border border-[#E6CA85]/30 mb-2">
                Official Admission Granted
              </span>

              <h3 className="text-2xl font-bold font-heading text-white">
                Welcome to JIHYEJNANA
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                Congratulations, <strong className="text-[#F5DE9C]">{formData.name}</strong>. Your enrollment in <strong className="text-white">{course.title}</strong> has been confirmed.
              </p>

              <div className="my-6 p-4 rounded-xl bg-[#0D1527] border border-[#E6CA85]/20 text-left space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Admission Dossier ID:</span>
                  <span className="font-mono text-[#E6CA85] font-bold">{admissionId}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Registered Email:</span>
                  <span className="text-slate-200">{formData.email}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Track:</span>
                  <span className="text-slate-200">{formData.cohort}</span>
                </div>
                <div className="flex justify-between text-xs pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Orientation Access:</span>
                  <span className="text-emerald-400 font-medium">Dispatched to your Inbox</span>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={handleResetAndClose}
              >
                Access Scholar Dashboard
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
