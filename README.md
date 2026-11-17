# JIHYEJNANA — Premium Multi-Page Education Platform
> *"Where Wisdom Meets Knowledge"*

**JIHYEJNANA** is an elite, responsive, modern education web platform uniting the contemplative discernment of Korean **Jihye** (지혜, intuitive wisdom) with the illuminated structured intellect of ancient Telugu-Indic **Jñāna** (జ్ఞాన, higher knowledge).

Designed with a luxury midnight aesthetic utilizing obsidian navy, deep royal violet, and radiant champagne gold.

---

## 🌟 Key Features & Pages

1. **Home Page (`/`)**
   - Cinematic Hero with dynamic typography and ambient gradient lighting
   - Key institutional metrics (98.7% completion, 45,000+ global scholars, 85+ faculty)
   - Popular disciplines & categories breakdown
   - Featured executive masterclasses with direct enrollment action
   - *The JihyeJnana Pedagogy* (4 core pillars of excellence)
   - Scholar & executive testimonials from Zurich, Seoul, Hyderabad, and Geneva
   - High-impact admissions call-to-action banner

2. **About Us Page (`/about`)**
   - Dual-civilizational origin story (Korean *Jihye* + Telugu *Jñāna*)
   - Institutional mission, vision, and guiding creed
   - 4 foundational philosophical tenets with original Korean and Telugu typography
   - Chancellor's Office & distinguished faculty profiles with credentials and academic lineage

3. **Courses Catalogue (`/courses`)**
   - Real-time search query filter (matching title, subtitle, instructor, overview, tags)
   - Category filtering pills (All, AI & Technology, Philosophy & Ethics, Strategic Leadership, Finance & Architecture, Arts & Culture)
   - Level filters (Beginner, Intermediate, Advanced & Executive)
   - Sort dropdown (Highest Rated, Most Popular, Price: Low to High, Price: High to Low)
   - Active results counter & clear-filter empty state

4. **Course Details Page (`/courses/:id`)**
   - Dynamic client routing with detailed syllabus breakdown
   - Key learning outcomes and competencies checklist
   - Interactive accordion syllabus with expandable lesson modules and duration
   - Faculty & course director dossier
   - Sticky tuition investment card with **working "Enroll Now" CTA** that launches the interactive admissions application modal
   - Video orientation preview player modal

5. **Contact & Admissions Concierge (`/contact`)**
   - Validated multi-field form (Name, Email, Phone, Category, Subject, Message)
   - Real-time inline error checking and validation states
   - Instant submission confirmation dossier
   - Global campus directory: Seoul (Gangnam-gu), Hyderabad (HITEC City), Geneva (Rue du Rhône)
   - Responsive dark-themed embedded Google Map

6. **Authentication Suite (`/login` & `/signup`)**
   - **Login**: Email/Password validation, show/hide password toggle, Remember Me, and Password Recovery modal. Demo credentials auto-fill button.
   - **Sign Up**: Full name, email, password strength calculation (Weak / Medium / Strong), password match confirmation, discipline focus selector, and Academic Honor Code pledge.

7. **Interactive AI Prompt & Image Suite Modal**
   - Directly accessible from the Navbar and Hero
   - Contains the complete Website Prompt and 4 curated Midjourney/DALL-E image prompts with visual previews and one-click copy buttons.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Glassmorphism & Custom Luxury Gradients
- **Routing**: React Router DOM v7 (SPA with `_redirects` and `vercel.json` rewrite support)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: Cinzel (Serif Heading), Plus Jakarta Sans (Clean Modern Sans), Space Grotesk (Mono Numbers)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed:
```bash
node -v
npm -v
```

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/jihyejnana.git
cd jihyejnana

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the live application.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` folder.

---

## 🚢 Deployment Guide

### Deploying to Netlify
1. Run `npm run build`
2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop), OR
3. Connect your GitHub repository to Netlify:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - The included `public/_redirects` ensures all client-side routes (`/courses`, `/about`, etc.) work seamlessly.

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root, OR
3. Import the repository in the [Vercel Dashboard](https://vercel.com/new).
   - The included `vercel.json` handles SPA routing automatically.

---

## 📝 GitHub Upload Commands

```bash
git add .
git commit -m "feat: complete JIHYEJNANA luxury education platform"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/jihyejnana.git
git push -u origin main
```
