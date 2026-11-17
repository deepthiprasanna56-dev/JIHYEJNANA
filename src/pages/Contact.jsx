import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Admissions & Executive Fellowships',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full legal or preferred name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject heading is required.';
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your detailed inquiry or inquiry context.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
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
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Admissions & Executive Fellowships',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="relative pt-24 sm:pt-28 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-radial-midnight pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
        <Badge variant="gold" size="md" className="mb-3">
          Admissions & Academic Liaison
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto">
          Connect with the <span className="text-gold-gradient">JIHYEJNANA</span> Directorate
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Inquire regarding fellowship admissions, executive sponsorships, academic partnerships, or schedule a confidential meeting with an admissions dean.
        </p>
      </section>

      {/* Form + Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090E1A] border border-[#E6CA85]/20 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-heading text-white">
                    Admissions Dossier Inquiry
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    All inquiries are held under strict institutional confidentiality.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6CA85]/10 border border-[#E6CA85]/30 text-xs font-semibold text-[#F5DE9C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
                  <span>24-Hour Review</span>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Legal Name"
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
                      required
                      placeholder="fellow@institution.org"
                      value={formData.email}
                      error={errors.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Contact Telephone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Inquiry Track <span className="text-[#E6CA85]">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded-lg bg-[#070B14]/80 border border-slate-800 py-2.5 px-3.5 text-sm text-slate-100 focus:outline-none focus:border-[#E6CA85] focus:ring-2 focus:ring-[#E6CA85]/30 transition-all"
                      >
                        <option value="Admissions & Executive Fellowships">
                          Admissions & Executive Fellowships
                        </option>
                        <option value="Corporate Enterprise Cohorts">
                          Corporate & Institutional Enterprise Cohorts
                        </option>
                        <option value="Faculty & Research Collaborations">
                          Faculty & Epistemic Lab Collaborations
                        </option>
                        <option value="Chancellor's Office & Media">
                          Office of the Chancellor & Diplomatic Media
                        </option>
                      </select>
                    </div>
                  </div>

                  <Input
                    label="Subject Heading"
                    required
                    placeholder="e.g. Candidacy inquiry for Cognitive Architecture Masterclass"
                    value={formData.subject}
                    error={errors.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                  />

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your In-Depth Message <span className="text-[#E6CA85]">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Please outline your background, institutional affiliation, and objectives..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      className={`block w-full rounded-lg bg-[#070B14]/80 border ${
                        errors.message
                          ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
                          : 'border-slate-800 focus:border-[#E6CA85] focus:ring-[#E6CA85]/30'
                      } py-2.5 px-3.5 text-sm text-slate-100 placeholder-slate-500 transition-all focus:outline-none focus:ring-2`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 font-medium">
                        ⚠ {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      className="w-full"
                      icon={Send}
                      iconPosition="right"
                    >
                      Transmit Admissions Inquiry
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Transmitted over TLS 1.3 encrypted diplomatic channels.</span>
                  </p>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Inquiry Successfully Lodged
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5DE9C]">{formData.name}</strong>. Your correspondence regarding "<span className="text-white">{formData.subject}</span>" has been dispatched to the Office of Admissions.
                  </p>
                  <p className="text-xs text-slate-400">
                    A formal response will be delivered to <span className="font-mono text-slate-200">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button variant="secondary" onClick={handleReset}>
                      Submit Additional Correspondence
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & Global Campus Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct contact cards */}
            <div className="p-6 rounded-2xl bg-[#090E1A] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold font-heading text-white">
                Direct Communications
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E6CA85] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">General Admissions</span>
                    <a href="mailto:admissions@jihyejnana.org" className="text-slate-200 hover:text-[#E6CA85] font-mono">
                      admissions@jihyejnana.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Executive Concierge</span>
                    <span className="text-slate-200 font-mono">+82 (2) 589-2026 (Seoul) / +91 40 6820 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E6CA85] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Directorate Office Hours</span>
                    <span className="text-slate-300">Monday – Friday: 08:00 – 20:00 (KST / IST / CET)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Locations */}
            <div className="p-6 rounded-2xl bg-[#090E1A] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold font-heading text-white">
                Global Campus Hubs
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-[#050811] border border-slate-800">
                  <span className="font-bold text-[#F5DE9C] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Seoul Campus & Epistemic Lab
                  </span>
                  <p className="text-slate-400 mt-1">Teheran-ro 152, Gangnam-gu, Seoul 06236, South Korea</p>
                </div>

                <div className="p-3 rounded-xl bg-[#050811] border border-slate-800">
                  <span className="font-bold text-[#C084FC] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Hyderabad Indic Research Center
                  </span>
                  <p className="text-slate-400 mt-1">Mindspace Madhapur, HITEC City, Hyderabad 500081, India</p>
                </div>

                <div className="p-3 rounded-xl bg-[#050811] border border-slate-800">
                  <span className="font-bold text-[#F5DE9C] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Geneva Diplomatic Executive Suite
                  </span>
                  <p className="text-slate-400 mt-1">Rue du Rhône 42, 1204 Geneva, Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-3xl overflow-hidden border border-[#E6CA85]/20 shadow-2xl bg-[#090E1A] p-2 sm:p-4">
          <div className="p-4 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 mb-3">
            <div>
              <h3 className="text-base font-bold font-heading text-white">
                Global Academic Hub Coordinates
              </h3>
              <p className="text-xs text-slate-400">
                Gangnam Innovation Corridor, Seoul • Direct Metro & Helipad Access
              </p>
            </div>
            <span className="text-xs font-mono text-[#E6CA85] bg-[#E6CA85]/10 px-3 py-1 rounded-md border border-[#E6CA85]/20 self-start">
              37.5000° N, 127.0365° E
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden relative">
            <iframe
              title="JIHYEJNANA Seoul Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3444439148386!2d127.0343!3d37.5008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f9829910d5%3A0x6b9d6eb34f786d70!2sTeheran-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1700000000000!5m2!1sen!2skr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
