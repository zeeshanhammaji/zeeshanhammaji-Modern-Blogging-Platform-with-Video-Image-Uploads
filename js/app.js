// ============================================
// BlogVista - Main Application
// ============================================

(function() {
  'use strict';

  // ============================================
  // Data Store
  // ============================================
  
  const STORAGE_KEYS = {
    USER: 'blogvista_user',
    POSTS: 'blogvista_posts',
    COMMENTS: 'blogvista_comments',
    MEDIA: 'blogvista_media'
  };

  // Initial sample data
  const samplePosts = [
    {
      id: '1',
      title: 'The Art of Mindful Photography',
      slug: 'art-of-mindful-photography',
      excerpt: 'Discover how being present in the moment can transform your photography from mere snapshots into meaningful works of art.',
      content: `<p>Photography has always been more than just capturing moments—it's about seeing the world through a different lens. When we approach photography mindfully, we begin to notice the interplay of light and shadow, the stories waiting to be told in everyday scenes.</p>

<p>Mindful photography isn't about having the most expensive camera or the latest gear. It's about slowing down and truly seeing what surrounds you. The way morning light filters through a window, the weathered hands of an elderly craftsman, the playful chase of children in a park—these are the moments that matter.</p>

<h2>The Power of Patience</h2>

<p>One of the most valuable lessons in mindful photography is patience. Great photographs often come to those who wait, who observe, and who are ready to capture the decisive moment when it arrives.</p>

<blockquote>The best camera is the one that's with you when the moment happens.</blockquote>

<p>This doesn't mean you should spend hours waiting for the perfect shot. Rather, it means being in a state of openness and awareness, ready to recognize and capture beauty when it appears.</p>

<h2>Technical Skills vs. Vision</h2>

<p>While understanding exposure, composition, and focus are essential technical skills, they should serve your vision, not dominate it. The most powerful photographs tell stories, evoke emotions, and connect us to our shared human experience.</p>

<p>Start by setting constraints. Use only one lens for a week. Shoot in black and white. Limit yourself to 10 frames per day. These constraints force creativity and help you develop a distinctive visual voice.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=800&fit=crop',
      category: 'photography',
      tags: ['photography', 'mindfulness', 'creativity', 'art'],
      authorId: '1',
      author: {
        name: 'Zeeshan Hammaji',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      status: 'published',
      readTime: 8,
      views: 2847,
      likes: 156,
      createdAt: '2026-03-15T10:30:00Z'
    },
    {
      id: '2',
      title: 'Building a Sustainable Morning Routine',
      slug: 'sustainable-morning-routine',
      excerpt: 'Transform your mornings from chaotic to calm with these evidence-based strategies for starting your day right.',
      content: `<p>The way we start our morning sets the tone for the entire day. Yet in our rush to tackle our to-do lists, we often neglect the rituals that could bring us more energy, focus, and peace.</p>

<p>A sustainable morning routine isn't about adding more tasks to an already busy schedule. It's about creating intentional space for activities that nourish your body, mind, and spirit.</p>

<h2>The 90-Minute Morning Window</h2>

<p>Research suggests that the first 90 minutes after waking are crucial for setting your circadian rhythm. During this time, your cortisol levels are naturally rising, making it an ideal window for activities that require alertness and focus.</p>

<p>Consider this simple framework:</p>

<ul>
<li><strong>First 30 minutes:</strong> Movement and hydration</li>
<li><strong>Next 30 minutes:</strong> Nourishment and mindfulness</li>
<li><strong>Final 30 minutes:</strong> Planning and intention-setting</li>
</ul>

<h2>Start Small</h2>

<p>The biggest mistake people make is trying to overhaul their entire morning at once. Instead, add one new element every week. Maybe this week it's drinking a full glass of water before checking your phone. Next week, add five minutes of stretching.</p>

<blockquote>Small consistent actions create lasting change.</blockquote>

<p>Remember, the goal isn't perfection—it's progress. Some mornings will be chaos, and that's okay. What matters is returning to your routine without judgment.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop',
      category: 'lifestyle',
      tags: ['wellness', 'morning', 'routine', 'productivity'],
      authorId: '2',
      author: {
        name: 'James Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      status: 'published',
      readTime: 5,
      views: 1923,
      likes: 89,
      createdAt: '2026-03-12T08:00:00Z'
    },
    {
      id: '3',
      title: 'Why Remote Work Is Here to Stay',
      slug: 'remote-work-here-to-stay',
      excerpt: 'An in-depth look at how the pandemic reshaped our work culture and why hybrid models are the future.',
      content: `<p>When the pandemic forced millions of workers to set up home offices almost overnight, skeptics predicted a mass return to the office once restrictions lifted. They were wrong.</p>

<p>What began as an emergency measure has evolved into a fundamental shift in how we think about work. Remote and hybrid models have moved from experimental to expected, becoming a key factor in talent attraction and retention.</p>

<h2>The Numbers Don't Lie</h2>

<p>A recent survey of Fortune 500 companies found that 65% plan to maintain or expand their remote work policies. More tellingly, 87% of employees who worked remotely during the pandemic want to continue doing so in some capacity.</p>

<p>This isn't just about preference—it's about results. Studies show remote workers are often more productive, more engaged, and less likely to burn out than their office-bound counterparts.</p>

<h2>Challenges Remain</h2>

<p>Of course, remote work isn't without its challenges. Building company culture, mentoring junior employees, and fostering spontaneous collaboration require intentional effort in a distributed environment.</p>

<blockquote>The office isn't dead—it's just being redefined.</blockquote>

<p>The winners in this new landscape will be companies that embrace flexibility while investing in tools and practices that keep teams connected and engaged.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&h=800&fit=crop',
      category: 'business',
      tags: ['remote work', 'future of work', 'productivity', 'work-life balance'],
      authorId: '3',
      author: {
        name: 'Sarah Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      status: 'published',
      readTime: 6,
      views: 3421,
      likes: 234,
      createdAt: '2026-03-10T14:20:00Z'
    },
    {
      id: '4',
      title: 'Hidden Gems of the Pacific Northwest',
      slug: 'hidden-gems-pacific-northwest',
      excerpt: 'Venture beyond the tourist trails to discover the serene beauty and rich culture of this enchanting region.',
      content: `<p>While Seattle and Portland draw millions of visitors each year, the Pacific Northwest's true magic lies in its hidden corners—places where ancient forests meet pristine coastline and small towns preserve traditions unchanged for generations.</p>

<p>This guide takes you off the beaten path to experience the region's natural wonders and local culture in ways most tourists never will.</p>

<h2>The Olympic Peninsula</h2>

<p>Start with a loop around the Olympic Peninsula, where temperate rainforests receive over 170 inches of rainfall annually. The Hoh Rain Forest, with its towering Sitka spruce and elk wandering through moss-covered groves, feels like stepping into another world.</p>

<p>Continue to the peninsula's western edge, where sea stacks rise from churning waters and gray whales migrate past during winter months. Cape Flattery, the northwesternmost point in the contiguous United States, offers views that rival any coastal vista on Earth.</p>

<h2>Willamette Valley Wine Country</h2>

<p>Skip Napa—Oregon's Willamette Valley produces world-class Pinot Noir at a fraction of the price and none of the crowds. Family-owned wineries dot rolling hillsides, many welcoming visitors for tastings by appointment.</p>

<blockquote>In wine, there's a sense of place that can't be replicated anywhere else in the world.</blockquote>

<p>Pair your tastings with farm-to-table dining at one of the valley's many acclaimed restaurants, where chefs source ingredients from surrounding fields and orchards.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      category: 'travel',
      tags: ['travel', 'pacific northwest', 'adventure', 'nature'],
      authorId: '1',
      author: {
        name: 'Zeeshan Hammaji',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      status: 'published',
      readTime: 10,
      views: 1856,
      likes: 142,
      createdAt: '2026-03-08T09:15:00Z'
    },
    {
      id: '5',
      title: 'The Future of Web Development in 2026',
      slug: 'future-web-development-2026',
      excerpt: 'From AI-assisted coding to edge computing, explore the technologies shaping the next generation of the web.',
      content: `<p>The web development landscape has transformed dramatically. What once required teams of specialists can now be accomplished by smaller groups leveraging increasingly powerful tools and frameworks.</p>

<p>As we navigate through 2026, several trends are reshaping how we build and deploy web applications.</p>

<h2>AI as Your Coding Partner</h2>

<p>AI coding assistants have moved from novelty to necessity. They're not replacing developers—they're amplifying their capabilities. Code suggestions, automated testing, and even architecture recommendations are now common features in modern development workflows.</p>

<p>The key is learning to work with AI effectively: knowing when to accept suggestions, when to refine them, and when to ignore them entirely.</p>

<h2>Edge Computing Goes Mainstream</h2>

<p>Serverless architectures have evolved into edge computing, pushing computation closer to users. Applications that once took 200ms to respond now respond in under 50ms, enabling real-time experiences that weren't possible before.</p>

<blockquote>Speed isn't just a feature—it's the foundation of user experience.</blockquote>

<h2>The Rise of Server Components</h2>

<p>React Server Components, Next.js App Router, and similar technologies are fundamentally changing how we think about the client-server boundary. By rendering more on the server and streaming UI to the client, we're building faster, more resilient applications.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      category: 'technology',
      tags: ['web development', 'AI', 'technology', 'future'],
      authorId: '3',
      author: {
        name: 'Sarah Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      status: 'published',
      readTime: 7,
      views: 4521,
      likes: 312,
      createdAt: '2026-03-05T16:45:00Z'
    },
    {
      id: '6',
      title: 'Finding Balance in a Digital World',
      slug: 'finding-balance-digital-world',
      excerpt: 'Practical strategies for cultivating mindfulness and presence in an age of constant connectivity.',
      content: `<p>Our devices are designed to capture attention—but at what cost? Learning to maintain balance with technology is perhaps the most important skill of our time.</p>

<p>This isn't about rejecting technology or returning to some mythical analog past. It's about being intentional with our digital habits, ensuring technology serves our goals rather than hijacking our attention.</p>

<h2>The Attention Economy</h2>

<p>Understanding how apps and platforms are designed to be addictive is the first step toward reclaiming autonomy. Behind every engaging feature lies a team of designers working to maximize engagement metrics.</p>

<p>When you recognize these patterns, you can make conscious choices about when and how you engage.</p>

<h2>Practical Boundaries</h2>

<p>Start with physical boundaries. Charge your phone in another room at night. Use a dedicated device for work. Create phone-free zones in your home.</p>

<p>Then move to temporal ones. Set specific times for checking email and social media. Use app timers to limit usage. Practice the art of single-tasking—give your full attention to one thing at a time.</p>

<blockquote>presence is a practice, not a destination.</blockquote>

<p>Most importantly, remember that balance isn't a static achievement but an ongoing negotiation. What works today may need adjustment tomorrow. The goal isn't perfection but progress.</p>`,
      featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop',
      category: 'health',
      tags: ['digital wellness', 'mindfulness', 'technology', 'balance'],
      authorId: '2',
      author: {
        name: 'James Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      status: 'published',
      readTime: 6,
      views: 2134,
      likes: 178,
      createdAt: '2026-03-02T11:30:00Z'
    }
  ];

  const sampleComments = [
    {
      id: '1',
      postId: '1',
      authorId: '2',
      author: {
        name: 'James Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      content: 'This really resonated with me. I\'ve been trying to be more present when I photograph, and it\'s amazing how different the results are. Thank you for sharing!',
      createdAt: '2026-03-16T08:30:00Z',
      likes: 12
    },
    {
      id: '2',
      postId: '1',
      authorId: '3',
      author: {
        name: 'Sarah Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      content: 'The point about patience really hit home. I used to rush through photo walks trying to capture everything, but slowing down has been transformative.',
      createdAt: '2026-03-16T14:20:00Z',
      likes: 8
    },
    {
      id: '3',
      postId: '3',
      authorId: '1',
      author: {
        name: 'Zeeshan Hammaji',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a'
      },
      content: 'Great insights! We\'ve implemented a hybrid model at our company and the results have been incredible. The key for us was investing in async communication tools.',
      createdAt: '2026-03-11T10:15:00Z',
      likes: 15
    }
  ];

  const sampleUsers = [
    {
      id: '1',
      email: 'demo@blogvista.com',
      password: 'demo123',
      displayName: 'Zeeshan Hammaji',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a',
      bio: 'Photographer and writer exploring the intersection of mindfulness and creativity.',
      createdAt: '2026-01-15T00:00:00Z'
    },
    {
      id: '2',
      email: 'james@example.com',
      password: 'james123',
      displayName: 'James Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zeeshan&backgroundColor=c45d3a',
      bio: 'Wellness coach helping people build sustainable healthy habits.',
      createdAt: '2026-01-20T00:00:00Z'
    },
    {
      id: '3',
      email: 'sarah@example.com',
      password: 'sarah123',
      displayName: 'Sarah Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      bio: 'Tech writer and developer passionate about the future of work.',
      createdAt: '2026-02-01T00:00:00Z'
    }
  ];

  // ============================================
  // State Management
  // ============================================
  
  const state = {
    user: null,
    posts: [],
    comments: [],
    currentView: 'home',
    currentCategory: 'all',
    currentPost: null
  };

  // ============================================
  // Utility Functions
  // ============================================

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  function timeAgo(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
    return 'Just now';
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  function calculateReadTime(content) {
    const text = stripHtml(content);
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200);
  }

  function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ============================================
  // Storage Functions
  // ============================================

  function loadFromStorage(key, defaultValue) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save to storage:', e);
    }
  }

  function initializeData() {
    const posts = loadFromStorage(STORAGE_KEYS.POSTS, samplePosts);
    const comments = loadFromStorage(STORAGE_KEYS.COMMENTS, sampleComments);
    
    state.posts = posts;
    state.comments = comments;
    state.user = loadFromStorage(STORAGE_KEYS.USER, null);
  }

  // ============================================
  // Toast Notifications
  // ============================================

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' 
          ? '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
        }
      </svg>
      <span class="toast-message">${escapeHtml(message)}</span>
      <button class="toast-close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    setTimeout(() => removeToast(toast), 4000);
  }

  function removeToast(toast) {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }

  // ============================================
  // Auth Functions
  // ============================================

  function getUsers() {
    return loadFromStorage('blogvista_users', sampleUsers);
  }

  function saveUsers(users) {
    saveToStorage('blogvista_users', users);
  }

  function login(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      state.user = userWithoutPassword;
      saveToStorage(STORAGE_KEYS.USER, userWithoutPassword);
      updateAuthUI();
      showToast(`👋 Welcome back, ${user.displayName}!`);
      return true;
    }
    return false;
  }

  function register(email, password, displayName) {
    const users = getUsers();
    
    if (users.some(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }

    const newUser = {
      id: generateId(),
      email,
      password,
      displayName,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(displayName)}&backgroundColor=c45d3a`,
      bio: '',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    const { password: _, ...userWithoutPassword } = newUser;
    state.user = userWithoutPassword;
    saveToStorage(STORAGE_KEYS.USER, userWithoutPassword);
    
    showToast(`🎉 Welcome to BlogVista, ${displayName}!`);
    return { success: true };
  }

  function logout() {
    state.user = null;
    localStorage.removeItem(STORAGE_KEYS.USER);
    updateAuthUI();
    navigateTo('home');
    showToast('👋 You have been signed out');
  }

  function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const mobileAuth = document.getElementById('mobile-auth');
    const mobileUser = document.getElementById('mobile-user');

    if (state.user) {
      authButtons.classList.add('hidden');
      userMenu.classList.remove('hidden');
      mobileAuth.classList.add('hidden');
      mobileUser.classList.remove('hidden');
      
      userAvatar.textContent = getInitials(state.user.displayName);
      userName.textContent = state.user.displayName;
      
      if (state.user.avatar) {
        userAvatar.innerHTML = `<img src="${state.user.avatar}" alt="">`;
      }
    } else {
      authButtons.classList.remove('hidden');
      userMenu.classList.add('hidden');
      mobileAuth.classList.remove('hidden');
      mobileUser.classList.add('hidden');
    }
  }

  // ============================================
  // Navigation
  // ============================================

  function navigateTo(view, params = {}) {
    state.currentView = view;
    state.currentPost = params.post || null;
    state.currentCategory = params.category || 'all';
    
    // Update active nav link
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
      const linkCategory = link.dataset.category;
      if ((view === 'posts' && linkCategory === state.currentCategory) ||
          (view === 'home' && link.dataset.link === 'home')) {
        link.classList.add('active');
      }
    });

    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  }

  function handleNavClick(e) {
    const link = e.target.closest('[data-link]');
    if (!link) return;
    
    e.preventDefault();
    const view = link.dataset.link;
    const category = link.dataset.category || 'all';
    navigateTo(view, { category });
  }

  // ============================================
  // View Rendering
  // ============================================

  function renderCurrentView() {
    const main = document.getElementById('main-content');
    
    switch (state.currentView) {
      case 'home':
        main.innerHTML = renderHomeView();
        break;
      case 'posts':
        main.innerHTML = renderPostsView();
        break;
      case 'post':
        main.innerHTML = renderSinglePostView();
        initializeReadingProgress();
        break;
      case 'dashboard':
        main.innerHTML = renderDashboardView();
        break;
      case 'create':
        if (!state.user) {
          openAuthModal('login');
          navigateTo('home');
          return;
        }
        main.innerHTML = renderCreateView();
        initializeEditor();
        break;
      default:
        main.innerHTML = renderHomeView();
    }

    attachViewEventListeners();
  }

  function renderHomeView() {
    const publishedPosts = state.posts.filter(p => p.status === 'published');
    const featuredPost = publishedPosts[0];
    const recentPosts = publishedPosts.slice(1, 7);

    return `
      <!-- Hero -->
      <section class="hero">
        <div class="hero-bg">
          <img src="${featuredPost.featuredImage}" alt="${featuredPost.title}">
        </div>
        <div class="hero-content">
          <span class="hero-category">${featuredPost.category}</span>
          <h1 class="hero-title">${featuredPost.title}</h1>
          <p class="hero-excerpt">${featuredPost.excerpt}</p>
          <div class="hero-meta">
            <div class="hero-author">
              <img src="${featuredPost.author.avatar}" alt="${featuredPost.author.name}">
              <div class="hero-author-info">
                <div class="hero-author-name">${featuredPost.author.name}</div>
                <div class="hero-author-date">${formatDate(featuredPost.createdAt)} · ${featuredPost.readTime} min read</div>
              </div>
            </div>
          </div>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary btn-hero" data-link="post" data-post-id="${featuredPost.id}">Read Article</a>
            <a href="#" class="btn btn-secondary btn-hero" style="background: transparent; border: 2px solid white; color: white;" data-link="posts">Browse All</a>
          </div>
        </div>
      </section>

      <!-- Category Pills -->
      <div class="category-pills section-container" style="padding-left: 0; padding-right: 0;">
        <button class="category-pill ${state.currentCategory === 'all' ? 'active' : ''}" data-category="all">All Posts</button>
        <button class="category-pill ${state.currentCategory === 'technology' ? 'active' : ''}" data-category="technology">Technology</button>
        <button class="category-pill ${state.currentCategory === 'lifestyle' ? 'active' : ''}" data-category="lifestyle">Lifestyle</button>
        <button class="category-pill ${state.currentCategory === 'travel' ? 'active' : ''}" data-category="travel">Travel</button>
        <button class="category-pill ${state.currentCategory === 'photography' ? 'active' : ''}" data-category="photography">Photography</button>
        <button class="category-pill ${state.currentCategory === 'business' ? 'active' : ''}" data-category="business">Business</button>
        <button class="category-pill ${state.currentCategory === 'health' ? 'active' : ''}" data-category="health">Health</button>
      </div>

      <!-- Latest Posts -->
      <section class="section" style="padding-top: 0;">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">📖 Latest Stories</h2>
            <a href="#" class="section-link" data-link="posts">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div class="posts-grid">
            ${recentPosts.map((post, i) => `
              <article class="post-card ${i === 0 ? 'featured' : ''}" data-post-id="${post.id}">
                <div class="post-card-image">
                  <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
                  <span class="post-card-category">${post.category}</span>
                </div>
                <div class="post-card-content">
                  <h3 class="post-card-title">${post.title}</h3>
                  <p class="post-card-excerpt">${post.excerpt}</p>
                  <div class="post-card-meta">
                    <div class="post-card-author">
                      <img src="${post.author.avatar}" alt="${post.author.name}">
                      <span>${post.author.name}</span>
                    </div>
                    <span>${formatDate(post.createdAt)}</span>
                    <span>${post.readTime} min</span>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="section newsletter">
        <div class="section-container">
          <div class="newsletter-content">
            <h2>🚀 Stay Inspired</h2>
            <p>Get the best stories delivered to your inbox every week. No spam, just great content.</p>
            <form class="newsletter-form" id="newsletter-form">
              <input type="email" placeholder="Enter your email" required>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  function renderPostsView() {
    let posts = state.posts.filter(p => p.status === 'published');
    
    if (state.currentCategory !== 'all') {
      posts = posts.filter(p => p.category === state.currentCategory);
    }

    const categories = ['all', 'technology', 'lifestyle', 'travel', 'photography', 'business', 'health'];

    return `
      <div class="section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title" style="text-transform: capitalize;">${state.currentCategory === 'all' ? 'All Posts' : state.currentCategory}</h2>
          </div>
          
          <!-- Category Pills -->
          <div class="category-pills" style="padding-left: 0; padding-right: 0; margin-bottom: 32px;">
            ${categories.map(cat => `
              <button class="category-pill ${state.currentCategory === cat ? 'active' : ''}" data-category="${cat}">
                ${cat === 'all' ? 'All Posts' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            `).join('')}
          </div>

          ${posts.length === 0 ? `
            <div style="text-align: center; padding: 80px 20px; color: var(--color-slate);">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 16px; opacity: 0.5;">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <h3 style="margin-bottom: 8px;">📭 No posts found</h3>
              <p>No posts in this category yet. Check back soon!</p>
            </div>
          ` : `
            <div class="posts-grid">
              ${posts.map((post, i) => `
                <article class="post-card" data-post-id="${post.id}">
                  <div class="post-card-image">
                    <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
                    <span class="post-card-category">${post.category}</span>
                  </div>
                  <div class="post-card-content">
                    <h3 class="post-card-title">${post.title}</h3>
                    <p class="post-card-excerpt">${post.excerpt}</p>
                    <div class="post-card-meta">
                      <div class="post-card-author">
                        <img src="${post.author.avatar}" alt="${post.author.name}">
                        <span>${post.author.name}</span>
                      </div>
                      <span>${formatDate(post.createdAt)}</span>
                      <span>${post.readTime} min</span>
                    </div>
                  </div>
                </article>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }

  function renderSinglePostView() {
    const post = state.currentPost;
    if (!post) return '<div class="section"><p>Post not found</p></div>';

    const postComments = state.comments.filter(c => c.postId === post.id);

    return `
      <!-- Reading Progress -->
      <div class="reading-progress">
        <div class="reading-progress-bar" id="reading-progress-bar"></div>
      </div>

      <!-- Post Hero -->
      <div class="post-hero">
        <img src="${post.featuredImage}" alt="${post.title}">
      </div>

      <!-- Post Container -->
      <div class="post-container">
        <header class="post-header">
          <span class="post-category">${post.category}</span>
          <h1 class="post-title">${post.title}</h1>
          <p class="post-excerpt">${post.excerpt}</p>
          <div class="post-meta">
            <div class="post-author">
              <img src="${post.author.avatar}" alt="${post.author.name}">
              <div>
                <div class="post-author-name">${post.author.name}</div>
                <div class="post-author-date">${formatDate(post.createdAt)}</div>
              </div>
            </div>
            <div class="post-stats">
              <span class="post-stat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${post.readTime} min read
              </span>
              <span class="post-stat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                ${post.views.toLocaleString()}
              </span>
            </div>
          </div>
        </header>

        <!-- Post Content -->
        <article class="post-content">
          ${post.content}
          
          <div class="post-actions">
            <div class="share-buttons">
              <button class="share-btn" title="Share on Twitter" onclick="shareOnTwitter()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </button>
              <button class="share-btn" title="Share on Facebook" onclick="shareOnFacebook()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </button>
              <button class="share-btn" title="Copy link" onclick="copyPostLink()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
              </button>
            </div>
            <button class="btn btn-secondary" id="bookmark-btn" onclick="toggleBookmark()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
              Bookmark
            </button>
          </div>

          <!-- Author Card -->
          <div class="author-card">
            <img src="${post.author.avatar}" alt="${post.author.name}">
            <div class="author-card-content">
              <h4>Written by ${post.author.name}</h4>
              <p>A passionate writer sharing insights on ${post.category} and beyond. Follow for more stories that inspire and inform.</p>
            </div>
          </div>
        </article>

        <!-- Comments Section -->
        <section class="comments-section">
          <div class="comments-header">
            <h3>
              💬 Comments
              <span class="comment-count">${postComments.length}</span>
            </h3>
          </div>

          ${state.user ? `
            <form class="comment-form" id="comment-form">
              <img src="${state.user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(state.user.displayName)}&backgroundColor=c45d3a`}" alt="Your avatar" class="comment-avatar">
              <div style="flex: 1;">
                <textarea name="comment" placeholder="Share your thoughts..." maxlength="1000" id="comment-input"></textarea>
                <div class="comment-form-actions">
                  <span class="comment-char-count"><span id="char-count">0</span>/1000</span>
                  <button type="submit" class="btn btn-primary">Post Comment</button>
                </div>
              </div>
            </form>
          ` : `
            <div style="padding: 24px; background: var(--color-pearl); border-radius: var(--radius-md); text-align: center; margin-bottom: 32px;">
              <p style="margin-bottom: 16px; color: var(--color-slate);">Sign in to join the conversation</p>
              <button class="btn btn-primary" onclick="openAuthModal('login')">Sign In</button>
            </div>
          `}

          <div class="comments-list">
            ${postComments.length === 0 ? `
              <div class="no-comments">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 16px; opacity: 0.3;">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                <p>💭 No comments yet. Be the first to share your thoughts!</p>
              </div>
            ` : postComments.map(comment => `
              <div class="comment" data-comment-id="${comment.id}">
                <img src="${comment.author.avatar}" alt="${comment.author.name}" class="comment-avatar">
                <div class="comment-body">
                  <div class="comment-header">
                    <span class="comment-author">${comment.author.name}</span>
                    ${comment.authorId === post.authorId ? '<span class="comment-author-badge">Author</span>' : ''}
                    <span class="comment-date">${timeAgo(comment.createdAt)}</span>
                  </div>
                  <p class="comment-content">${escapeHtml(comment.content)}</p>
                  <div class="comment-actions">
                    <button class="comment-action" onclick="likeComment('${comment.id}')">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
                      ${comment.likes || 0}
                    </button>
                    ${state.user && state.user.id === comment.authorId ? `
                      <button class="comment-action" onclick="deleteComment('${comment.id}')" style="color: var(--color-error);">Delete</button>
                    ` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  }

  function renderDashboardView() {
    if (!state.user) {
      openAuthModal('login');
      navigateTo('home');
      return '<div class="section"><p>Please sign in to view your dashboard.</p></div>';
    }

    const userPosts = state.posts.filter(p => p.authorId === state.user.id);
    const totalViews = userPosts.reduce((sum, p) => sum + (p.views || 0), 0);
    const totalLikes = userPosts.reduce((sum, p) => sum + (p.likes || 0), 0);
    const publishedCount = userPosts.filter(p => p.status === 'published').length;

    return `
      <div class="dashboard">
        <div class="dashboard-container">
          <div class="dashboard-header">
            <h1 class="dashboard-title">👋 Welcome back, ${state.user.displayName}</h1>
            <button class="btn btn-primary" id="create-post-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              Create Post
            </button>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div class="stat-card-value">${userPosts.length}</div>
              <div class="stat-card-label">📄 Total Posts</div>
            </div>
            <div class="stat-card">
              <div class="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div class="stat-card-value">${totalViews.toLocaleString()}</div>
              <div class="stat-card-label">👁️ Total Views</div>
            </div>
            <div class="stat-card">
              <div class="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <div class="stat-card-value">${totalLikes}</div>
              <div class="stat-card-label">❤️ Total Likes</div>
            </div>
            <div class="stat-card">
              <div class="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div class="stat-card-value">${publishedCount}</div>
              <div class="stat-card-label">✅ Published</div>
            </div>
          </div>

          <div class="posts-table">
            ${userPosts.length === 0 ? `
              <div style="text-align: center; padding: 64px;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 16px; opacity: 0.3;">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
                <h3 style="margin-bottom: 8px;">📝 No posts yet</h3>
                <p style="color: var(--color-slate); margin-bottom: 24px;">Start sharing your stories with the world</p>
                <button class="btn btn-primary" id="empty-create-btn">Create Your First Post</button>
              </div>
            ` : `
              <table>
                <thead>
                  <tr>
                    <th>Post</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${userPosts.map(post => `
                    <tr>
                      <td>
                        <div class="post-title-cell">
                          <img src="${post.featuredImage}" alt="" class="post-thumb">
                          <span class="post-name">${post.title}</span>
                        </div>
                      </td>
                      <td style="text-transform: capitalize;">${post.category}</td>
                      <td><span class="status-badge status-${post.status}">${post.status}</span></td>
                      <td class="post-date">${formatDate(post.createdAt)}</td>
                      <td>
                        <div class="post-actions-cell">
                          <button class="edit-btn" onclick="editPost('${post.id}')">Edit</button>
                          <button class="delete-btn" onclick="deletePost('${post.id}')">Delete</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `}
          </div>
        </div>
      </div>
    `;
  }

  function renderCreateView() {
    return `
      <div class="section">
        <div class="section-container" style="max-width: 900px;">
          <div class="section-header">
            <h2 class="section-title">✍️ Create New Post</h2>
          </div>

          <form id="create-form" style="background: var(--color-white); padding: 32px; border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
            <div class="form-group">
              <label for="post-title">Title</label>
              <input type="text" id="post-title" name="title" placeholder="Your compelling title..." required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="post-category">Category</label>
                <select id="post-category" name="category">
                  <option value="technology">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="travel">Travel</option>
                  <option value="photography">Photography</option>
                  <option value="business">Business</option>
                  <option value="health">Health</option>
                </select>
              </div>
              <div class="form-group">
                <label for="post-tags">Tags (comma separated)</label>
                <input type="text" id="post-tags" name="tags" placeholder="web, design, tutorial">
              </div>
            </div>

            <div class="form-group">
              <label for="post-excerpt">Excerpt</label>
              <textarea id="post-excerpt" name="excerpt" rows="2" placeholder="A brief summary of your post..." required></textarea>
            </div>

            <div class="form-group">
              <label>Featured Image</label>
              <div class="upload-zone" id="featured-upload">
                <svg class="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <p class="upload-text">Drag & drop or click to upload</p>
                <p class="upload-hint">JPG, PNG, WebP up to 10MB</p>
                <input type="file" accept="image/*" class="upload-input" id="featured-input">
                <div class="featured-preview hidden" id="featured-preview">
                  <img src="" alt="Featured preview" id="featured-img">
                  <button type="button" class="remove-featured" id="remove-featured">Remove</button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Content</label>
              <div class="editor-toolbar">
                <button type="button" class="toolbar-btn" data-format="bold" title="Bold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6zM6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="italic" title="Italic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="h2" title="Heading 2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8M4 18V6M12 18V6M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="h3" title="Heading 3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8M4 18V6M12 18V6M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 01-2 2M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 00-2-2"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="quote" title="Quote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v4z"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="image" title="Insert Image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </button>
                <button type="button" class="toolbar-btn" data-format="ul" title="Bullet List">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </button>
              </div>
              <div class="editor-wrapper">
                <div class="editor-content" id="editor-content" contenteditable="true" placeholder="Start writing your story..."></div>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-ghost" id="save-draft-btn">Save Draft</button>
              <button type="submit" class="btn btn-primary">Publish</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  // ============================================
  // Event Listeners
  // ============================================

  function attachViewEventListeners() {
    // Navigation clicks
    document.querySelectorAll('[data-link]').forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Post card clicks
    document.querySelectorAll('.post-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const postId = card.dataset.postId;
        const post = state.posts.find(p => p.id === postId);
        if (post) navigateTo('post', { post });
      });
    });

    // Category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const category = pill.dataset.category;
        navigateTo('posts', { category });
      });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        if (input.value) {
          showToast('🎉 Thanks for subscribing!');
          input.value = '';
        }
      });
    }

    // Create post button
    const createBtn = document.getElementById('create-post-btn');
    if (createBtn) {
      createBtn.addEventListener('click', () => navigateTo('create'));
    }

    const emptyCreateBtn = document.getElementById('empty-create-btn');
    if (emptyCreateBtn) {
      emptyCreateBtn.addEventListener('click', () => navigateTo('create'));
    }

    // Comment form
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
      const commentInput = document.getElementById('comment-input');
      const charCount = document.getElementById('char-count');
      
      if (commentInput && charCount) {
        commentInput.addEventListener('input', () => {
          charCount.textContent = commentInput.value.length;
        });
      }

      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textarea = commentForm.querySelector('textarea');
        if (textarea.value.trim()) {
          addComment(textarea.value);
          textarea.value = '';
          if (charCount) charCount.textContent = '0';
        }
      });
    }

    // Image lightbox
    document.querySelectorAll('.post-content img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src));
    });

    // Create form
    const createForm = document.getElementById('create-form');
    if (createForm) {
      initializeUploadZone();
      initializeToolbar();
      
      createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitPost('published');
      });

      const draftBtn = document.getElementById('save-draft-btn');
      if (draftBtn) {
        draftBtn.addEventListener('click', () => submitPost('draft'));
      }
    }
  }

  function initializeUploadZone() {
    const uploadZone = document.getElementById('featured-upload');
    const fileInput = document.getElementById('featured-input');
    const preview = document.getElementById('featured-preview');
    const previewImg = document.getElementById('featured-img');
    const removeBtn = document.getElementById('remove-featured');

    if (!uploadZone || !fileInput) return;

    ['dragenter', 'dragover'].forEach(event => {
      uploadZone.addEventListener(event, (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragging');
      });
    });

    ['dragleave', 'drop'].forEach(event => {
      uploadZone.addEventListener(event, (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragging');
      });
    });

    uploadZone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
      }
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) handleImageUpload(file);
    });

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        preview.classList.add('hidden');
        uploadZone.querySelector('.upload-icon').classList.remove('hidden');
        uploadZone.querySelector('.upload-text').classList.remove('hidden');
        fileInput.value = '';
      });
    }

    window.featuredImage = null;

    function handleImageUpload(file) {
      if (!file) {
        showToast('No file selected', 'error');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        showToast('Please select an image file (JPG, PNG, WebP, GIF)', 'error');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) {
        showToast('Image must be less than 10MB', 'error');
        return;
      }

      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && e.target.result) {
            window.featuredImage = e.target.result;
            previewImg.src = e.target.result;
            preview.classList.remove('hidden');
            uploadZone.querySelector('.upload-icon').classList.add('hidden');
            uploadZone.querySelector('.upload-text').classList.add('hidden');
            showToast('Image uploaded successfully!');
          } else {
            showToast('Error reading image file', 'error');
          }
        };
        reader.onerror = () => {
          showToast('Error reading image file', 'error');
        };
        reader.readAsDataURL(file);
      } catch (error) {
        showToast('Error uploading image: ' + error.message, 'error');
      }
    }
  }

  function initializeToolbar() {
    const toolbarBtns = document.querySelectorAll('.toolbar-btn');
    const editor = document.getElementById('editor-content');

    if (!editor) return;

    toolbarBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const format = btn.dataset.format;
        applyFormat(format);
      });
    });

    function applyFormat(format) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;

      switch (format) {
        case 'bold':
          document.execCommand('bold');
          break;
        case 'italic':
          document.execCommand('italic');
          break;
        case 'h2':
          document.execCommand('formatBlock', false, '<h2>');
          break;
        case 'h3':
          document.execCommand('formatBlock', false, '<h3>');
          break;
        case 'quote':
          document.execCommand('formatBlock', false, '<blockquote>');
          break;
        case 'image':
          const url = prompt('Enter image URL:');
          if (url) {
            document.execCommand('insertImage', false, url);
          }
          break;
        case 'ul':
          document.execCommand('insertUnorderedList');
          break;
      }
      editor.focus();
    }
  }

  function initializeEditor() {
    const editor = document.getElementById('editor-content');
    if (!editor) return;

    editor.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertText', false, text);
    });
  }

  // ============================================
  // Modal Functions
  // ============================================

  function openAuthModal(tab = 'login') {
    const modal = document.getElementById('auth-modal');
    const tabs = modal.querySelectorAll('.modal-tab');
    const form = document.getElementById('auth-form');
    const title = document.getElementById('auth-modal-title');
    const subtitle = document.getElementById('auth-modal-subtitle');
    const nameGroup = document.getElementById('display-name-group');
    const submitBtn = document.getElementById('auth-submit');
    const errorDiv = document.getElementById('auth-error');

    errorDiv.classList.add('hidden');
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
      tabs[0].classList.add('active');
      title.textContent = 'Welcome Back';
      subtitle.textContent = 'Sign in to continue reading and creating 📚';
      nameGroup.classList.add('hidden');
      submitBtn.textContent = 'Sign In';
    } else {
      tabs[1].classList.add('active');
      title.textContent = '🚀 Create Account';
      subtitle.textContent = 'Join our community of storytellers ✨';
      nameGroup.classList.remove('hidden');
      submitBtn.textContent = 'Create Account';
    }

    modal.classList.add('active');
    form.reset();
  }

  function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('active');
  }

  // ============================================
  // Lightbox Functions
  // ============================================

  function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
  }

  // ============================================
  // Reading Progress
  // ============================================

  function initializeReadingProgress() {
    const progressBar = document.getElementById('reading-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    });
  }

  // ============================================
  // Post Actions
  // ============================================

  function submitPost(status) {
    const title = document.getElementById('post-title')?.value;
    const category = document.getElementById('post-category')?.value;
    const tags = document.getElementById('post-tags')?.value;
    const excerpt = document.getElementById('post-excerpt')?.value;
    const editor = document.getElementById('editor-content');
    const content = editor?.innerHTML;

    if (!title || !excerpt || !content) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const post = {
      id: generateId(),
      title,
      slug: slugify(title),
      excerpt,
      content,
      featuredImage: window.featuredImage || `https://picsum.photos/seed/${Date.now()}/1200/800`,
      category,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      authorId: state.user.id,
      author: {
        name: state.user.displayName,
        avatar: state.user.avatar
      },
      status,
      readTime: calculateReadTime(content),
      views: 0,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    state.posts.unshift(post);
    saveToStorage(STORAGE_KEYS.POSTS, state.posts);

    showToast(status === 'published' ? '🎉 Post published successfully!' : '💾 Draft saved!');
    navigateTo('dashboard');
  }

  function editPost(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    navigateTo('create');
    
    setTimeout(() => {
      const titleInput = document.getElementById('post-title');
      const categorySelect = document.getElementById('post-category');
      const tagsInput = document.getElementById('post-tags');
      const excerptInput = document.getElementById('post-excerpt');
      const editor = document.getElementById('editor-content');

      if (titleInput) titleInput.value = post.title;
      if (categorySelect) categorySelect.value = post.category;
      if (tagsInput) tagsInput.value = post.tags.join(', ');
      if (excerptInput) excerptInput.value = post.excerpt;
      if (editor) editor.innerHTML = post.content;

      window.editingPostId = postId;
    }, 100);
  }

  function deletePost(postId) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    state.posts = state.posts.filter(p => p.id !== postId);
    state.comments = state.comments.filter(c => c.postId !== postId);
    
    saveToStorage(STORAGE_KEYS.POSTS, state.posts);
    saveToStorage(STORAGE_KEYS.COMMENTS, state.comments);
    
    showToast('🗑️ Post deleted');
    renderCurrentView();
  }

  // ============================================
  // Comment Actions
  // ============================================

  function addComment(content) {
    if (!state.user || !state.currentPost) return;

    const comment = {
      id: generateId(),
      postId: state.currentPost.id,
      authorId: state.user.id,
      author: {
        name: state.user.displayName,
        avatar: state.user.avatar
      },
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likes: 0
    };

    state.comments.push(comment);
    saveToStorage(STORAGE_KEYS.COMMENTS, state.comments);
    
    showToast('💬 Comment posted!');
    renderCurrentView();
  }

  function deleteComment(commentId) {
    if (!confirm('Delete this comment?')) return;

    state.comments = state.comments.filter(c => c.id !== commentId);
    saveToStorage(STORAGE_KEYS.COMMENTS, state.comments);
    
    showToast('🗑️ Comment deleted');
    renderCurrentView();
  }

  function likeComment(commentId) {
    const comment = state.comments.find(c => c.id === commentId);
    if (comment) {
      comment.likes = (comment.likes || 0) + 1;
      saveToStorage(STORAGE_KEYS.COMMENTS, state.comments);
      renderCurrentView();
    }
  }

  // ============================================
  // Share Functions
  // ============================================

  window.shareOnTwitter = function() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(state.currentPost?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  window.shareOnFacebook = function() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  window.copyPostLink = function() {
    navigator.clipboard.writeText(window.location.href);
    showToast('📋 Link copied to clipboard!');
  };

  window.toggleBookmark = function() {
    showToast('🔖 Post bookmarked!');
  };

  // ============================================
  // Mobile Menu
  // ============================================

  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
  }

  function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    menu.classList.remove('active');
    btn.classList.remove('active');
  }

  // ============================================
  // Initialize Application
  // ============================================

  function init() {
    initializeData();
    updateAuthUI();
    navigateTo('home');

    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Auth modal events
    document.getElementById('login-btn')?.addEventListener('click', () => openAuthModal('login'));
    document.getElementById('register-btn')?.addEventListener('click', () => openAuthModal('register'));
    document.getElementById('mobile-login-btn')?.addEventListener('click', () => openAuthModal('login'));
    document.getElementById('mobile-register-btn')?.addEventListener('click', () => openAuthModal('register'));
    document.getElementById('modal-close')?.addEventListener('click', closeAuthModal);
    document.getElementById('auth-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'auth-modal') closeAuthModal();
    });

    // Auth tabs
    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        openAuthModal(tab.dataset.tab);
      });
    });

    // Auth form
    document.getElementById('auth-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const displayName = form.displayName?.value;
      const errorDiv = document.getElementById('auth-error');

      const activeTab = document.querySelector('.modal-tab.active');
      
      if (activeTab.dataset.tab === 'login') {
        if (login(email, password)) {
          closeAuthModal();
        } else {
          errorDiv.textContent = 'Invalid email or password';
          errorDiv.classList.remove('hidden');
        }
      } else {
        if (!displayName) {
          errorDiv.textContent = 'Please enter your name';
          errorDiv.classList.remove('hidden');
          return;
        }
        const result = register(email, password, displayName);
        if (result.success) {
          closeAuthModal();
        } else {
          errorDiv.textContent = result.error;
          errorDiv.classList.remove('hidden');
        }
      }
    });

    // Logout buttons
    document.getElementById('logout-btn')?.addEventListener('click', logout);
    document.getElementById('mobile-logout-btn')?.addEventListener('click', logout);

    // Mobile menu
    document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileMenu);

    // Lightbox
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') closeLightbox();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAuthModal();
        closeLightbox();
      }
    });

    // Global post link handler
    document.addEventListener('click', (e) => {
      const postLink = e.target.closest('[data-post-id]');
      if (postLink && !postLink.classList.contains('post-card')) {
        const postId = postLink.dataset.postId;
        const post = state.posts.find(p => p.id === postId);
        if (post) {
          e.preventDefault();
          navigateTo('post', { post });
        }
      }
    });
  }

  // Start the app
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
