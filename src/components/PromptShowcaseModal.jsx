import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Sparkles, Image as ImageIcon, Terminal, ExternalLink } from 'lucide-react';
import Button from './Button';

export default function PromptShowcaseModal({ isOpen, onClose }) {
  const [copiedTab, setCopiedTab] = useState(null);
  const [activeTab, setActiveTab] = useState('website'); // 'website' | 'images'

  if (!isOpen) return null;

  const websitePrompt = `Act as an elite UI/UX designer and senior React frontend developer. Design and develop a complete, high-prestige, responsive education platform named "JIHYEJNANA".

BRAND IDENTITY:
- Name: JIHYEJNANA
- Concept: Korean 'Jihye' (지혜 - intuitive wisdom & experiential insight) + Telugu/Sanskrit 'Jñāna' (జ్ఞాన - illuminated knowledge & deep intellect)
- Tagline: "Where Wisdom Meets Knowledge"
- Personality: Ultra-luxury, intelligent, innovative, trustworthy, global, and transcendent.
- Visual Palette: Deep Obsidian Black (#050811), Midnight Navy (#0A0F1D), Royal Violet (#6320EE, #8B5CF6), Champagne Gold (#E6CA85, #F5DE9C, #B89230).

TECHNICAL ARCHITECTURE:
- React.js with Vite
- Tailwind CSS with custom glassmorphism and gold/violet gradients
- React Router DOM for clean multi-page client routing
- Lucide React icons
- Framer Motion for subtle luxury animations and responsive transitions

PAGES REQUIRED:
1. Home: Luxury navigation, cinematic hero with stat highlights, featured disciplines, masterclasses catalog preview, "The JihyeJnana Pedagogy", executive testimonials, and global footer.
2. About Us: Dual-origin brand story (Korean Jihye + Telugu Jñāna), institutional mission, core values, chancellor & distinguished academic leadership.
3. Courses: Searchable & category-filtered catalog, level filters, interactive search query matching, price ratings, and responsive course cards.
4. Course Details: Dynamic routing (/courses/:id), course syllabus accordion, instructor biography & credentials, prerequisites, outcomes, and functional Enrollment Modal.
5. Contact Us: Validated multi-field contact form with real-time feedback, global campus addresses (Seoul, Hyderabad, Geneva), and custom dark-themed interactive map embed.
6. Login & Sign Up: Validated forms, password visibility toggle, password strength meters, and institutional SSO options.

ADDITIONAL FUNCTIONALITY:
- Full responsive design (mobile drawer, tablet, desktop).
- Accessible form validation with clear inline error messages.
- Active enrollment flow with admission dossier generation.
- Clean modular component structure: Navbar, Footer, CourseCard, Button, Input, Badge, Modals.`;

  const imagePrompts = [
    {
      title: "Hero Banner Visual (Atmospheric Wisdom & Intellect)",
      category: "Cinematic Hero",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      altPrompt: "Abstract 3D architectural ribbon of luminous champagne gold and iridescent royal purple floating in an infinite midnight obsidian void, subtle holographic celestial geometric nodes, volumetric cinematic lighting, photorealistic, 8k octane render, luxury museum aesthetic --ar 16:9 --v 6.0"
    },
    {
      title: "Brand Emblem & Monogram (Korean & Telugu Synthesis)",
      category: "Logo / Brand Identity",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
      altPrompt: "Minimalist luxury emblem combining Korean geometric Hangul '지' (Ji) geometry with ancient Telugu/Sanskrit sacred syllable 'జ్ఞా' (Jña), crafted in brushed champagne gold and titanium purple, dark slate glass background, studio lighting, vector precision, Apple design award aesthetic --ar 1:1"
    },
    {
      title: "Executive Scholar & Faculty Portrait",
      category: "Scholars & Testimonials",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      altPrompt: "Editorial portrait of a distinguished Asian scholar and AI researcher in modern bespoke navy blazer, contemplative expression, soft rim lighting in champagne gold and deep indigo, warm subtle bokeh of modern glass campus library in background, Hasselblad 80mm portrait photography --ar 4:5"
    },
    {
      title: "Course Cover: Frontier AI & Quantum Systems",
      category: "Curriculum Artwork",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80",
      altPrompt: "Holographic quantum neural network mesh glowing over an obsidian global topography, delicate filaments of golden light connecting continents, deep royal purple cosmic nebula background, ultra-detailed architectural concept art, cinematic widescreen --ar 16:9"
    }
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(id);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E6CA85]/30 bg-[#070B14] p-6 sm:p-8 text-left shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-[#E6CA85]/15 text-[#F5DE9C] border border-[#E6CA85]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
              AI Prompt & Image Selection Suite
            </span>
          </div>

          <h2 className="text-2xl font-bold font-heading text-white">
            Prompts & Curated Imagery Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
            Use these production-grade prompts to reproduce or generate matching website code and Midjourney / DALL-E image assets.
          </p>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 gap-4 mb-6">
            <button
              onClick={() => setActiveTab('website')}
              className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-all relative ${
                activeTab === 'website'
                  ? 'text-[#F5DE9C] border-b-2 border-[#E6CA85]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-4 h-4" />
              Website Generation Prompt
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-all relative ${
                activeTab === 'images'
                  ? 'text-[#F5DE9C] border-b-2 border-[#E6CA85]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              AI Image Prompts & Visual Preview
            </button>
          </div>

          {activeTab === 'website' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Full Architecture & Design Prompt</span>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleCopy(websitePrompt, 'prompt')}
                >
                  {copiedTab === 'prompt' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Website Prompt</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="relative rounded-xl bg-[#03060E] border border-slate-800 p-4 overflow-x-auto max-h-[380px] text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-[#E6CA85]/30">
                {websitePrompt}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Below are the 4 recommended imagery archetypes for JIHYEJNANA with their ready-to-run image generator prompts. Click any card to copy the Midjourney/DALL-E prompt!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {imagePrompts.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-[#0A0F1D] p-3 hover:border-[#E6CA85]/40 transition-all group"
                  >
                    <div className="relative h-36 w-full rounded-lg overflow-hidden mb-3">
                      <img
                        src={img.imageUrl}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold rounded bg-black/70 text-[#F5DE9C] backdrop-blur-sm border border-[#E6CA85]/30">
                        {img.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-1">{img.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-3 font-mono bg-[#050811] p-2 rounded border border-slate-800 mb-2">
                      {img.altPrompt}
                    </p>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      onClick={() => handleCopy(img.altPrompt, `img-${idx}`)}
                    >
                      {copiedTab === `img-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Prompt Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Image Prompt</span>
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
            <Button variant="primary" onClick={onClose}>
              Close & Continue Exploring
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
