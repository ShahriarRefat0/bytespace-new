# ByteSpace 🚀

> **ByteSpace** is a modern, full-featured online learning marketplace and creator platform built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It bridges ambitious learners with industry-leading creators through curated courses, interactive curricula, and modern UI/UX design.

🔗 **Live Deployment:** [https://bytespace-new-five-delta.vercel.app/](https://bytespace-new-five-delta.vercel.app/)

---

## 🌟 Highlights & Features

### 1. 🏠 Engaging Landing Experience (`/`)
- **Hero Section**: High-impact hero banner with animated search bar, interactive progress cards, student social proof badges, and 3D decorative shapes.
- **Brand Trust Bar**: Partner and creator studios marquee showcase (`Logoipsum`).
- **Curated Courses Showcase**: Top-rated courses with dynamic rating badges, pricing, student avatar stacks, and instant course navigation.
- **Learning Paths**: Category cards spanning Design, Development, IT & Software, Business, Marketing, and Photography.
- **Dual Growth Features**:
  - *For Learners*: Learning trajectory tracking, interactive course previews, and real-time completion status.
  - *For Creators*: Revenue metrics, community size, and earnings management preview.
- **Ambient Glow Lighting**: Custom radial `GlowLight` backdrop system with vibrant lime and royal blue ambient lighting.
- **Creator Call-to-Action (CTA)**: Dedicated creator onboarding section with floating abstract 3D geometry and interactive signup trigger.
- **Community Testimonials**: Authentic feedback from learners and instructors presented in responsive glassmorphic cards.

### 2. 📚 Course Catalog & Pagination (`/courses`)
- **100+ Production-Ready Courses**: Rich catalog across multiple disciplines.
- **Client-Side Filtering & Search**: Filter by subject, difficulty level, and keywords.
- **12 Cards per Page Pagination**: Fast, token-efficient pagination controls with seamless page transitions.
- **Detailed Course Cards**: Displays instructor details, enrolled student count, rating stars, and lifetime access pricing.

### 3. 🎓 Course Details (`/course/[slug]`)
- **Course Header & Meta**: Category breadcrumbs, title, author info, enrolled count, and last updated timestamps.
- **Course Sneak Peek Gallery**: 5-column responsive visual sneak-peek gallery highlighting course slides and materials.
- **Curriculum & Lesson Player**: Comprehensive syllabus with expandable modules, lesson duration, preview access, and resource links.
- **Instructor Spotlight**: Creator bio, stats, and direct links to their full profile.
- **Reviews & Rating Breakdown**: Student review distribution, star ratings, and community reviews.
- **Sticky Enrollment Sidebar**: Lifetime pricing, "Enroll Now" CTA, guarantee badges, and course highlights.

### 4. 👩‍🏫 Creator Profiles (`/creators/[slug]`)
- **Creator Showcase**: Detailed instructor profile with bio, avatar, expertise, and verified creator badges.
- **Instructor Stats**: Total students mentored, active courses published, and average rating score.
- **Creator Course Grid**: Direct access to all courses published by the instructor.

### 5. 🔐 Authentication Suite (`/login` & `/register`)
- **Bespoke Auth Layout**: Distinctive brand-blue blueprint grid background with floating 3D course card visualizers.
- **Sign In (`/login`)**: Email/password credentials input with password visibility toggles, "Remember me", and social login (Google, Facebook).
- **Sign Up (`/register`)**: Fast onboarding form with field validation, terms agreement, and direct redirect to sign-in.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Compiler** | React Compiler (`babel-plugin-react-compiler`) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
bytespace-new/
├── public/
│   ├── images/
│   │   ├── branding/         # Brand logos and icons
│   │   ├── courses/          # Course thumbnails (1-6)
│   │   ├── creators/         # Creator avatars & studio banners
│   │   ├── home/             # Hero, growth, and CTA visual assets
│   │   ├── Sneak/            # Course sneak peek preview images (1-5)
│   │   └── students/         # Student avatar photos (1-5)
├── src/
│   ├── app/
│   │   ├── (auth)/           # Authentication route group
│   │   │   ├── login/        # Login page
│   │   │   └── register/     # Registration page
│   │   ├── (website)/        # Public website route group
│   │   │   ├── course/       # Dynamic course details ([slug])
│   │   │   ├── courses/      # Course catalog & pagination
│   │   │   ├── creators/     # Creator profile pages ([slug])
│   │   │   ├── layout.tsx    # Main website header & footer layout
│   │   │   └── page.tsx      # Home page
│   │   ├── components/       # UI & section components
│   │   │   ├── auth/         # Login & Register forms, visuals, brand
│   │   │   ├── brand/        # Logo marquee section
│   │   │   ├── course-details/# Sneak peeks, lessons, reviews, sidebar
│   │   │   ├── courses/      # Course grids, cards, filters, pagination
│   │   │   ├── creator-cta/  # Creator signup promotional CTA
│   │   │   ├── creators/     # Creator filters & profile components
│   │   │   ├── GrowthFeature/# Growth section, student & creator visuals
│   │   │   ├── hero/         # Hero visual, search, progress cards
│   │   │   ├── layout/       # Navbar, Footer, Mobile Navigation
│   │   │   ├── learning-paths/# Learning path category cards
│   │   │   ├── testimonial/  # Community testimonial cards
│   │   │   └── ui/           # GlowLight, GridBackground, reusable widgets
│   │   ├── types/            # TypeScript interfaces (Course, Creator)
│   │   ├── globals.css       # Tailwind v4 theme & global resets
│   │   └── layout.tsx        # Root HTML layout with fonts & metadata
│   └── data/                 # Static data layer
│       ├── categories.ts     # Course category definitions
│       ├── courses/
│       │   ├── courses.ts        # 100 catalog courses with metadata
│       │   ├── course-details.ts # In-depth course syllabus & sneak peeks
│       │   ├── course-lessons.ts # 500+ structured curriculum lessons
│       │   ├── course-reviews.ts # 300+ authentic user reviews
│       │   └── course-students.ts# Student enrollment datasets
│       └── creators/
│           └── creators.ts       # 10 comprehensive creator profiles
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or higher
- **pnpm**: `v9.x` or `v11.x` (Recommended)
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShahriarRefat0/bytespace-new.git
   cd bytespace-new
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) (or visit the live deployment at [https://bytespace-new-five-delta.vercel.app/](https://bytespace-new-five-delta.vercel.app/)) to explore the platform.

---

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **Development** | `pnpm dev` | Starts the Next.js development server on `localhost:3000` with hot-reloading |
| **Build** | `pnpm build` | Compiles and builds the production bundle |
| **Start** | `pnpm start` | Runs the compiled production server |
| **Lint** | `pnpm lint` | Runs Next.js ESLint verification |
| **Type Check** | `npx tsc --noEmit` | Runs the TypeScript compiler to check for type errors |

---

## 🎨 Design & Aesthetic Features

- **Tailwind CSS v4**: Leveraging modern CSS variables and color utilities.
- **Curated Palette**:
  - Primary Electric Blue: `#1450E5` / `#0b43e8`
  - Accent Lime Glow: `#C7FF00` / `#D8FF00`
  - Neutral Dark: `#080D24` / `#111827`
  - Subtle Borders & Cards: Neutral grays with soft drop shadows.
- **Ambient GlowLight Engine**: Dynamic blurred radial lighting effect (`GlowLight`) adding subtle depth behind characters, stats, and dark/light section transitions.
- **Grid Blueprint Backing**: High-tech blueprint grid backdrop (`GridBackground`) giving an edtech digital workspace vibe.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ShahriarRefat0/bytespace-new/issues).

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
