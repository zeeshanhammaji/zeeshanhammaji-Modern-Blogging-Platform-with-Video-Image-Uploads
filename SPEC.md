# BlogVista - Modern Multimedia Blogging Platform

## 1. Concept & Vision

BlogVista is a premium content creation platform that feels like reading a beautifully designed magazine while empowering creators with seamless multimedia tools. The experience should evoke the tactile pleasure of flipping through a high-end publication—generous whitespace, striking typography, and images that breathe. Every interaction whispers sophistication while remaining effortlessly intuitive.

## 2. Design Language

### Aesthetic Direction
**Editorial Luxe** — Inspired by publications like Kinfolk, Cereal Magazine, and The Gentlewoman. Clean, confident, with a reverence for content and craft. The design disappears to let the writing and imagery shine.

### Color Palette
```css
--color-ink: #1a1a1a;           /* Primary text */
--color-charcoal: #3d3d3d;      /* Secondary text */
--color-slate: #6b6b6b;         /* Tertiary/muted text */
--color-silver: #a8a8a8;        /* Borders, dividers */
--color-pearl: #f5f5f3;         /* Subtle backgrounds */
--color-cream: #faf9f7;         /* Main background */
--color-white: #ffffff;         /* Cards, elevated surfaces */
--color-terracotta: #c45d3a;    /* Primary accent - warm, confident */
--color-terracotta-dark: #a84d2e;/* Accent hover */
--color-sage: #7d9a8c;          /* Secondary accent - calm, natural */
--color-sage-light: #e8f0eb;     /* Accent backgrounds */
```

### Typography
- **Display/Headings:** `Playfair Display` (serif) — Elegant, editorial authority
- **Body/UI:** `Source Sans 3` (sans-serif) — Clean, highly readable, professional
- **Monospace (code):** `JetBrains Mono` — For any code snippets in posts

### Spatial System
- Base unit: 8px
- Content max-width: 720px (reading), 1200px (full layout)
- Generous vertical rhythm: 32px minimum between sections
- Asymmetric layouts to create visual interest

### Motion Philosophy
- **Entrances:** Elements fade up (translateY: 20px → 0) with opacity 0 → 1, staggered 80ms
- **Hover states:** Subtle lift (translateY: -2px) with soft shadow expansion
- **Page transitions:** Cross-fade between routes, 200ms
- **Micro-interactions:** Button press (scale: 0.98), input focus glow
- All easing: `cubic-bezier(0.4, 0, 0.2, 1)` — smooth, natural deceleration

### Visual Assets
- **Icons:** Lucide React — clean, consistent 1.5px stroke weight
- **Photography:** Unsplash for hero images and placeholder content
- **Decorative:** Subtle grain texture overlay on hero sections, thin geometric dividers
- **Media:** Custom upload zones with dashed borders, progress indicators

## 3. Layout & Structure

### Page Architecture

#### Homepage
1. **Hero Section** — Full-width featured post with large image, dramatic typography
2. **Latest Posts Grid** — Asymmetric 3-column masonry-style layout
3. **Category Navigation** — Horizontal scroll pills
4. **Newsletter CTA** — Elegant section break with terracotta accent
5. **Footer** — Minimal with social links and copyright

#### Blog Post View
1. **Hero Image** — Full-width with parallax scroll effect
2. **Post Meta** — Category, date, read time, author avatar
3. **Article Body** — Centered, optimal reading width (720px)
4. **Embedded Media** — Videos and images with lightbox capability
5. **Author Bio Card** — At article end
6. **Comments Section** — Clean threaded discussion

#### Create/Edit Post
1. **Rich Text Editor** — Clean minimal interface
2. **Media Upload Panel** — Sidebar with drag-drop zones
3. **Preview Toggle** — Switch between editor and preview
4. **Publish Controls** — Category, tags, publish/draft status

#### User Dashboard
1. **Stats Overview** — Posts count, views, engagement metrics
2. **Posts Table** — Sortable, filterable list
3. **Media Library** — Grid view of all uploaded assets

### Responsive Strategy
- Desktop (1200px+): Full layouts, sidebar panels
- Tablet (768px-1199px): Collapsed sidebars, 2-column grids
- Mobile (<768px): Single column, bottom navigation, full-width media

## 4. Features & Interactions

### Authentication
- **Login/Register:** Modal overlay with tabbed interface
- **Form fields:** Email, password, display name (register only)
- **Validation:** Real-time with inline error messages
- **Session:** JWT stored in httpOnly cookie, 7-day expiry
- **Protected routes:** Redirect to login modal if unauthenticated

### Post Creation & Editing
- **Rich Text:** Bold, italic, headings (H2, H3), blockquotes, lists, links
- **Video Upload:** 
  - Drag-drop zone or click to select
  - Accepted: MP4, WebM (max 100MB)
  - Progress bar during upload
  - Preview thumbnail after upload
- **Image Upload:**
  - Multi-file support
  - Click to insert at cursor position
  - Inline crop/resize tools after upload
  - Accepted: JPG, PNG, WebP, GIF (max 10MB each)
- **Auto-save:** Draft saved every 30 seconds
- **Publish flow:** Preview → Confirm → Live

### Media Management
- **Library View:** Grid of all uploaded media
- **Actions:** Rename, delete, view usage (which posts)
- **Organization:** Filter by type (images/videos), date range
- **Storage:** Local filesystem in `/public/uploads/`

### Reading Experience
- **Estimated read time:** Calculated from word count (200 WPM)
- **Progress indicator:** Thin terracotta bar at top of viewport
- **Social sharing:** Copy link, Twitter, Facebook, LinkedIn
- **Bookmark:** Save posts to reading list (requires auth)

### Comments
- **Threaded:** One level of replies
- **Moderation:** Author can delete any comment on their posts
- **Reply notifications:** Simulated (console log for demo)
- **Character limit:** 1000 characters with counter

## 5. Component Inventory

### Navigation Bar
- **Default:** Logo left, nav links center, auth buttons right
- **Logged in:** User avatar dropdown replaces auth buttons
- **Scrolled:** Subtle shadow, slightly reduced height
- **Mobile:** Hamburger menu with slide-out drawer

### Post Card
- **Default:** Image thumbnail, title, excerpt, meta info
- **Hover:** Image scale 1.02, shadow lift, title color → terracotta
- **Featured:** Larger size, full-width on mobile

### Button
- **Primary:** Terracotta bg, white text, rounded-lg
- **Secondary:** White bg, ink border, ink text
- **Ghost:** Transparent, ink text, hover bg pearl
- **States:** Default → Hover (darken) → Active (scale 0.98) → Disabled (opacity 0.5)

### Input Fields
- **Default:** White bg, silver border, rounded-md
- **Focus:** Terracotta border, subtle glow shadow
- **Error:** Red border, error message below
- **Disabled:** Pearl bg, reduced opacity

### Media Upload Zone
- **Default:** Dashed border, upload icon, helper text
- **Hover:** Border color → terracotta, bg → sage-light
- **Dragging:** Pulsing border, "Drop files here" text
- **Uploading:** Progress bar overlay
- **Complete:** Success checkmark, thumbnail preview

### Video Player
- **Default:** Native HTML5 video with custom controls
- **Playing:** Pause icon overlay on hover
- **Fullscreen:** Standard fullscreen toggle

### Comment Component
- **Default:** Avatar, name, date, content, reply button
- **Author badge:** Terracotta "Author" tag if post author
- **Reply:** Indented, slightly smaller avatar

### Modal
- **Backdrop:** Black 50% opacity with blur
- **Container:** White bg, rounded-xl, max-width 480px
- **Animation:** Scale 0.95 → 1, opacity 0 → 1

### Toast Notifications
- **Success:** Sage bg with checkmark
- **Error:** Red bg with X
- **Position:** Bottom-right, stacked
- **Animation:** Slide in from right, auto-dismiss 4s

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS custom properties
- **State:** React Context for auth, local state for UI
- **Database:** JSON files for demo (posts.json, users.json, comments.json)
- **File uploads:** Local filesystem storage

### API Design

#### Authentication
- `POST /api/auth/register` — Create user account
  - Body: `{ email, password, displayName }`
  - Response: `{ user, token }`
- `POST /api/auth/login` — User login
  - Body: `{ email, password }`
  - Response: `{ user, token }`
- `GET /api/auth/me` — Get current user
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ user }`

#### Posts
- `GET /api/posts` — List all posts
  - Query: `?category=&author=&page=&limit=`
  - Response: `{ posts, total, page }`
- `GET /api/posts/:slug` — Get single post
  - Response: `{ post }`
- `POST /api/posts` — Create post (auth required)
  - Body: `{ title, content, excerpt, category, featuredImage, media, status }`
  - Response: `{ post }`
- `PUT /api/posts/:id` — Update post (author only)
- `DELETE /api/posts/:id` — Delete post (author only)

#### Media
- `POST /api/media/upload` — Upload file
  - Body: `FormData` with file
  - Response: `{ url, filename, type, size }`
- `DELETE /api/media/:filename` — Delete file (owner only)

#### Comments
- `GET /api/posts/:id/comments` — Get comments for post
- `POST /api/posts/:id/comments` — Add comment (auth required)
- `DELETE /api/comments/:id` — Delete comment (author or comment owner)

### Data Models

```typescript
interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  media: MediaItem[];
  authorId: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  readTime: number;
}

interface MediaItem {
  id: string;
  filename: string;
  url: string;
  type: 'image' | 'video';
  size: number;
  width?: number;
  height?: number;
}

interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  parentId?: string;
  createdAt: string;
}
```

### File Structure
```
/app
  /page.tsx                 # Homepage
  /posts/[slug]/page.tsx    # Single post view
  /create/page.tsx          # Create post
  /dashboard/page.tsx       # User dashboard
  /api/...                  # API routes
/components
  /ui/                      # Reusable UI components
  /layout/                  # Header, Footer, etc.
  /posts/                   # Post-specific components
  /media/                   # Upload, gallery components
/lib
  /db.ts                    # JSON file operations
  /auth.ts                  # Auth utilities
  /utils.ts                 # Helpers
/data
  /posts.json
  /users.json
  /comments.json
/public/uploads/           # Uploaded media files
```

## 7. Demo Data

### Sample Posts
1. "The Art of Mindful Photography" — Photography, 8 min read
2. "Building a Sustainable Morning Routine" — Lifestyle, 5 min read
3. "Why Remote Work Is Here to Stay" — Work, 6 min read
4. "Hidden Gems of the Pacific Northwest" — Travel, 10 min read
5. "The Future of Web Development" — Tech, 7 min read

### Sample Categories
- Technology
- Lifestyle
- Travel
- Photography
- Business
- Health

### Demo User
- Email: demo@blogvista.com
- Password: demo123
