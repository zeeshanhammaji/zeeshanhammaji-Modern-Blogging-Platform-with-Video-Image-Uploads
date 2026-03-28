 BlogVista

> A modern multimedia blogging platform with video and image upload capability

![BlogVista Screenshot](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop)

## Features

- **User Authentication** - Secure login and registration system with persistent sessions
- **Rich Text Editor** - Format content with bold, italic, headings, blockquotes, and lists
- **Image Upload** - Drag-and-drop image upload with instant preview
- **Video Embedding** - Embed videos from URLs in your blog posts
- **Media Management** - Organize and manage all uploaded media
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Comments** - Threaded comments with likes and author badges
- **Social Sharing** - Share posts on Twitter, Facebook, or copy link
- **Reading Progress** - Track your reading progress through articles
- **User Dashboard** - View post statistics and manage your content

## Design

BlogVista features an **Editorial Luxe** aesthetic inspired by publications like Kinfolk and Cereal Magazine:

- Clean, minimalist design with generous whitespace
- Playfair Display serif headings for editorial authority
- Source Sans 3 for highly readable body text
- Warm terracotta accent color (#c45d3a)
- Smooth animations and micro-interactions
- Lightbox for full-size image viewing

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (recommended) or direct file access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/blogvista.git
cd blogvista
```

2. Open `index.html` in your browser, or serve with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

### Demo Account

| Email | Password |
|-------|----------|
| demo@blogvista.com | demo123 |

## Project Structure

```
blogvista/
├── index.html          # Main application (HTML structure)
├── css/
│   └── styles.css       # Complete styling
├── js/
│   └── app.js           # Application logic
├── SPEC.md              # Design specification
└── README.md            # This file
```

## Key Features Explained

### Post Creation
- Click "Create Post" in the dashboard or user menu
- Add a compelling title and excerpt
- Select a category and add tags
- Upload a featured image with drag-and-drop
- Write content using the rich text editor
- Save as draft or publish immediately

### Image Upload
- Drag and drop images onto the upload zone
- Supports JPG, PNG, WebP, and GIF (up to 10MB)
- Instant preview after upload
- Images are converted to base64 for local storage

### Comments
- Sign in to leave comments on posts
- Comments support up to 1000 characters
- Like comments to show appreciation
- Post authors get an "Author" badge

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript** - Vanilla ES6+, localStorage API
- **Google Fonts** - Playfair Display, Source Sans 3

## Data Storage

BlogVista uses browser localStorage for data persistence:
- User sessions
- Posts and drafts
- Comments
- Media references

Data persists across browser sessions but is specific to each browser/device.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
