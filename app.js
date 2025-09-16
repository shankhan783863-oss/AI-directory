// Tools Data - Using the exact data from the provided JSON
const toolsData = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        category: "ai",
        subcategory: "AI Assistant",
        description: "OpenAI's powerful conversational AI assistant for writing, coding, analysis, and creative tasks with advanced natural language processing.",
        shortDescription: "AI chatbot for writing, coding & analysis",
        features: ["Natural language conversations", "Code generation & debugging", "Creative writing assistance", "Complex problem solving", "Multi-language support"],
        pricing: "Freemium",
        rating: 4.8,
        url: "https://chat.openai.com",
        icon: "CG",
        color: "#10a37f",
        trending: true,
        tags: ["AI", "Writing", "Coding", "Analysis"]
    },
    {
        id: "claude",
        name: "Claude",
        category: "ai",
        subcategory: "AI Assistant",
        description: "Anthropic's AI assistant known for helpful, harmless, and honest responses with excellent reasoning capabilities.",
        shortDescription: "Ethical AI assistant with advanced reasoning",
        features: ["Advanced reasoning", "Code analysis", "Document processing", "Ethical AI responses", "Long-form content"],
        pricing: "Freemium",
        rating: 4.7,
        url: "https://claude.ai",
        icon: "CL",
        color: "#4ecdc4",
        tags: ["AI", "Ethics", "Reasoning", "Analysis"]
    },
    {
        id: "midjourney",
        name: "Midjourney",
        category: "ai",
        subcategory: "Image Generation",
        description: "Leading AI image generator creating stunning, artistic images from text descriptions with incredible detail and style.",
        shortDescription: "AI image generator for artistic creations",
        features: ["Photorealistic images", "Artistic styles", "High resolution output", "Community gallery", "Style variations"],
        pricing: "Paid",
        rating: 4.9,
        url: "https://www.midjourney.com",
        icon: "MJ",
        color: "#ff6b6b",
        trending: true,
        tags: ["AI", "Images", "Art", "Creative"]
    },
    {
        id: "dalle3",
        name: "DALL-E 3",
        category: "ai",
        subcategory: "Image Generation",
        description: "OpenAI's advanced image generator integrated with ChatGPT for precise image creation with text understanding.",
        shortDescription: "OpenAI's image generator with text integration",
        features: ["Text integration", "High accuracy", "ChatGPT integration", "Commercial usage rights", "Precise prompts"],
        pricing: "Paid",
        rating: 4.6,
        url: "https://openai.com/dall-e-3",
        icon: "DE",
        color: "#10a37f",
        tags: ["AI", "Images", "OpenAI", "Integration"]
    },
    {
        id: "synthesia",
        name: "Synthesia",
        category: "ai",
        subcategory: "Video Generation",
        description: "AI video generator with digital avatars for creating professional training and marketing videos.",
        shortDescription: "AI video creation with digital avatars",
        features: ["AI avatars", "Multi-language support", "Custom avatars", "Professional templates", "Voice synthesis"],
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.synthesia.io",
        icon: "SY",
        color: "#9b59b6",
        tags: ["AI", "Video", "Avatars", "Training"]
    },
    {
        id: "runway",
        name: "Runway",
        category: "ai",
        subcategory: "Video Generation",
        description: "AI-powered video editing and generation platform for creative professionals with cutting-edge tools.",
        shortDescription: "AI video editing & generation platform",
        features: ["Video-to-video", "Text-to-video", "AI editing tools", "Real-time collaboration", "Creative effects"],
        pricing: "Freemium",
        rating: 4.4,
        url: "https://runwayml.com",
        icon: "RW",
        color: "#e74c3c",
        tags: ["AI", "Video", "Editing", "Creative"]
    },
    {
        id: "elevenlabs",
        name: "ElevenLabs",
        category: "ai",
        subcategory: "Voice & Audio",
        description: "Advanced AI voice generator with realistic speech synthesis and voice cloning capabilities.",
        shortDescription: "AI voice generation & cloning",
        features: ["Voice cloning", "29+ languages", "Emotional range", "API access", "Real-time generation"],
        pricing: "Freemium",
        rating: 4.7,
        url: "https://elevenlabs.io",
        icon: "EL",
        color: "#8e44ad",
        tags: ["AI", "Voice", "Audio", "Cloning"]
    },
    {
        id: "jasper",
        name: "Jasper",
        category: "ai",
        subcategory: "Writing & Content",
        description: "AI writing platform for teams creating on-brand content at scale with advanced collaboration features.",
        shortDescription: "AI writing platform for teams",
        features: ["Brand voice training", "Team collaboration", "50+ templates", "SEO optimization", "Content planning"],
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.jasper.ai",
        icon: "JS",
        color: "#ff9f43",
        tags: ["AI", "Writing", "Content", "Teams"]
    },
    {
        id: "copyai",
        name: "Copy.ai",
        category: "ai",
        subcategory: "Writing & Content",
        description: "AI copywriter for marketing content, blogs, and social media posts with extensive template library.",
        shortDescription: "AI copywriting for marketing content",
        features: ["90+ copywriting tools", "Brand voice", "Team workspaces", "Chrome extension", "Social media content"],
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.copy.ai",
        icon: "CA",
        color: "#1abc9c",
        tags: ["AI", "Copywriting", "Marketing", "Social"]
    },
    {
        id: "github-copilot",
        name: "GitHub Copilot",
        category: "ai",
        subcategory: "Code & Development",
        description: "AI pair programmer providing intelligent code suggestions and completions across multiple languages.",
        shortDescription: "AI coding assistant by GitHub",
        features: ["Code completions", "Multi-language support", "Context awareness", "IDE integration", "Code explanations"],
        pricing: "Paid",
        rating: 4.6,
        url: "https://github.com/features/copilot",
        icon: "GC",
        color: "#24292f",
        tags: ["AI", "Coding", "GitHub", "Development"]
    },
    {
        id: "cursor",
        name: "Cursor",
        category: "ai",
        subcategory: "Code & Development",
        description: "AI-powered code editor designed for pair programming with AI, featuring intelligent code understanding.",
        shortDescription: "AI-powered code editor",
        features: ["AI chat in editor", "Code predictions", "Natural language edits", "Codebase understanding", "Smart refactoring"],
        pricing: "Freemium",
        rating: 4.5,
        url: "https://www.cursor.com",
        icon: "CR",
        color: "#2c3e50",
        trending: true,
        tags: ["AI", "Editor", "Coding", "IDE"]
    },
    {
        id: "perplexity",
        name: "Perplexity",
        category: "ai",
        subcategory: "AI Assistant",
        description: "AI-powered search engine that provides accurate answers with cited sources for research and fact-checking.",
        shortDescription: "AI search engine with source citations",
        features: ["Source citations", "Real-time search", "Follow-up questions", "Academic mode", "Multi-source answers"],
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.perplexity.ai",
        icon: "PX",
        color: "#2ecc71",
        tags: ["AI", "Search", "Research", "Citations"]
    },
    // Development Tools
    {
        id: "react",
        name: "React",
        category: "development",
        subcategory: "Frontend Framework",
        description: "Popular JavaScript library for building user interfaces with reusable components and virtual DOM.",
        shortDescription: "JavaScript library for building UIs",
        features: ["Virtual DOM", "Component-based architecture", "Large ecosystem", "Strong community", "JSX syntax"],
        pricing: "Free",
        rating: 4.8,
        url: "https://react.dev",
        icon: "RC",
        color: "#61dafb",
        trending: true,
        tags: ["JavaScript", "Frontend", "Components", "UI"]
    },
    {
        id: "vuejs",
        name: "Vue.js",
        category: "development",
        subcategory: "Frontend Framework",
        description: "Progressive JavaScript framework that's approachable and versatile for building modern web applications.",
        shortDescription: "Progressive JavaScript framework",
        features: ["Progressive adoption", "Template syntax", "Reactive data binding", "Easy learning curve", "Composition API"],
        pricing: "Free",
        rating: 4.7,
        url: "https://vuejs.org",
        icon: "VU",
        color: "#4fc08d",
        tags: ["JavaScript", "Frontend", "Progressive", "Templates"]
    },
    {
        id: "angular",
        name: "Angular",
        category: "development",
        subcategory: "Frontend Framework",
        description: "Comprehensive framework by Google for building large-scale applications with TypeScript by default.",
        shortDescription: "Google's comprehensive frontend framework",
        features: ["TypeScript by default", "Dependency injection", "Comprehensive tooling", "Enterprise-ready", "CLI tools"],
        pricing: "Free",
        rating: 4.5,
        url: "https://angular.io",
        icon: "NG",
        color: "#dd0031",
        tags: ["TypeScript", "Google", "Enterprise", "CLI"]
    },
    {
        id: "svelte",
        name: "Svelte",
        category: "development",
        subcategory: "Frontend Framework",
        description: "Compile-time framework that generates vanilla JavaScript for optimal performance and smaller bundles.",
        shortDescription: "Compile-time JavaScript framework",
        features: ["No virtual DOM", "Smaller bundle sizes", "Built-in state management", "Simple syntax", "Compile-time optimization"],
        pricing: "Free",
        rating: 4.6,
        url: "https://svelte.dev",
        icon: "SV",
        color: "#ff3e00",
        tags: ["Compiler", "Performance", "Small", "Simple"]
    },
    {
        id: "nodejs",
        name: "Node.js",
        category: "development",
        subcategory: "Backend Framework",
        description: "JavaScript runtime for building fast and scalable server-side applications with event-driven architecture.",
        shortDescription: "JavaScript runtime for server-side",
        features: ["Event-driven architecture", "NPM ecosystem", "Cross-platform", "High performance", "Non-blocking I/O"],
        pricing: "Free",
        rating: 4.7,
        url: "https://nodejs.org",
        icon: "ND",
        color: "#68a063",
        tags: ["JavaScript", "Server", "Runtime", "NPM"]
    },
    {
        id: "django",
        name: "Django",
        category: "development",
        subcategory: "Backend Framework",
        description: "High-level Python web framework for rapid development with security focus and batteries included approach.",
        shortDescription: "Python web framework with batteries",
        features: ["Batteries included", "ORM built-in", "Admin interface", "Security features", "Rapid development"],
        pricing: "Free",
        rating: 4.6,
        url: "https://www.djangoproject.com",
        icon: "DJ",
        color: "#092e20",
        tags: ["Python", "Security", "ORM", "Admin"]
    },
    {
        id: "laravel",
        name: "Laravel",
        category: "development",
        subcategory: "Backend Framework",
        description: "Elegant PHP framework with expressive syntax for web application development and rich ecosystem.",
        shortDescription: "Elegant PHP framework",
        features: ["Eloquent ORM", "Artisan CLI", "Built-in authentication", "Queue system", "Expressive syntax"],
        pricing: "Free",
        rating: 4.7,
        url: "https://laravel.com",
        icon: "LV",
        color: "#f55247",
        tags: ["PHP", "Eloquent", "Artisan", "Authentication"]
    },
    {
        id: "mongodb",
        name: "MongoDB",
        category: "development",
        subcategory: "Database",
        description: "NoSQL document database designed for modern applications and developers with flexible schema.",
        shortDescription: "NoSQL document database",
        features: ["Document-based", "Horizontal scaling", "Flexible schema", "Rich query language", "GridFS support"],
        pricing: "Freemium",
        rating: 4.5,
        url: "https://www.mongodb.com",
        icon: "MG",
        color: "#47a248",
        tags: ["NoSQL", "Documents", "Scaling", "Flexible"]
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        category: "development",
        subcategory: "Database",
        description: "Advanced open-source relational database with strong reliability, performance, and extensive features.",
        shortDescription: "Advanced relational database",
        features: ["ACID compliance", "Advanced indexing", "JSON support", "Extensions", "Full-text search"],
        pricing: "Free",
        rating: 4.8,
        url: "https://www.postgresql.org",
        icon: "PG",
        color: "#336791",
        tags: ["SQL", "ACID", "JSON", "Extensions"]
    },
    {
        id: "vscode",
        name: "VS Code",
        category: "development",
        subcategory: "IDE & Editor",
        description: "Free, powerful source code editor with rich ecosystem of extensions and integrated development tools.",
        shortDescription: "Popular code editor with extensions",
        features: ["IntelliSense", "Debugging", "Git integration", "Extensions marketplace", "Integrated terminal"],
        pricing: "Free",
        rating: 4.9,
        url: "https://code.visualstudio.com",
        icon: "VS",
        color: "#007acc",
        tags: ["Editor", "Extensions", "Debugging", "Git"]
    },
    {
        id: "github",
        name: "GitHub",
        category: "development",
        subcategory: "Version Control",
        description: "World's largest platform for version control and collaborative development with powerful project management.",
        shortDescription: "Git hosting & collaboration platform",
        features: ["Git repositories", "Pull requests", "Actions CI/CD", "Project management", "Code review"],
        pricing: "Freemium",
        rating: 4.8,
        url: "https://github.com",
        icon: "GH",
        color: "#24292f",
        tags: ["Git", "Collaboration", "CI/CD", "Projects"]
    },
    {
        id: "vercel",
        name: "Vercel",
        category: "development",
        subcategory: "Cloud & Hosting",
        description: "Frontend deployment platform with edge network and serverless functions for modern web applications.",
        shortDescription: "Frontend deployment platform",
        features: ["Zero-config deployment", "Edge network", "Serverless functions", "Preview deployments", "Analytics"],
        pricing: "Freemium",
        rating: 4.7,
        url: "https://vercel.com",
        icon: "VR",
        color: "#000000",
        tags: ["Deployment", "Edge", "Serverless", "Preview"]
    },
    // Design Tools
    {
        id: "figma",
        name: "Figma",
        category: "design",
        subcategory: "UI/UX Design",
        description: "Collaborative interface design tool with real-time collaboration, prototyping, and comprehensive design systems.",
        shortDescription: "Collaborative interface design tool",
        features: ["Real-time collaboration", "Design systems", "Prototyping", "Developer handoff", "Component libraries"],
        pricing: "Freemium",
        rating: 4.9,
        url: "https://www.figma.com",
        icon: "FG",
        color: "#f24e1e",
        trending: true,
        tags: ["Design", "Collaboration", "Prototyping", "UI/UX"]
    },
    {
        id: "photoshop",
        name: "Photoshop",
        category: "design",
        subcategory: "Graphic Design",
        description: "Industry-standard raster graphics editor for photo editing, digital art, and professional graphic design.",
        shortDescription: "Industry-standard photo editor",
        features: ["Advanced photo editing", "Digital painting", "AI-powered tools", "Layer management", "Creative filters"],
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.adobe.com/products/photoshop.html",
        icon: "PS",
        color: "#31a8ff",
        tags: ["Photo", "Editing", "Adobe", "Professional"]
    },
    {
        id: "canva",
        name: "Canva",
        category: "design",
        subcategory: "Graphic Design",
        description: "User-friendly design platform with templates, AI features, and collaboration tools for all skill levels.",
        shortDescription: "Easy-to-use design platform",
        features: ["Drag-and-drop editor", "Template library", "Brand kits", "Team collaboration", "AI design tools"],
        pricing: "Freemium",
        rating: 4.5,
        url: "https://www.canva.com",
        icon: "CV",
        color: "#00c4cc",
        tags: ["Templates", "Easy", "Collaboration", "AI"]
    },
    {
        id: "sketch",
        name: "Sketch",
        category: "design",
        subcategory: "UI/UX Design",
        description: "Vector-based design tool specifically built for digital product design with powerful plugins ecosystem.",
        shortDescription: "Vector design tool for digital products",
        features: ["Vector editing", "Symbols & libraries", "Plugin ecosystem", "Design handoff", "Responsive design"],
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.sketch.com",
        icon: "SK",
        color: "#fdb300",
        tags: ["Vector", "UI/UX", "Plugins", "Digital"]
    },
    {
        id: "illustrator",
        name: "Illustrator",
        category: "design",
        subcategory: "Graphic Design",
        description: "Vector graphics editor for creating logos, illustrations, and scalable artwork for print and digital media.",
        shortDescription: "Vector graphics editor by Adobe",
        features: ["Vector graphics", "Typography tools", "Logo design", "Scalable artwork", "Print & digital"],
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.adobe.com/products/illustrator.html",
        icon: "AI",
        color: "#ff9a00",
        tags: ["Vector", "Logos", "Adobe", "Scalable"]
    },
    {
        id: "framer",
        name: "Framer",
        category: "design",
        subcategory: "Prototyping",
        description: "Advanced prototyping tool for creating interactive and animated designs with code components support.",
        shortDescription: "Advanced prototyping & animation tool",
        features: ["Interactive prototypes", "Advanced animations", "Code components", "Responsive design", "Smart components"],
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.framer.com",
        icon: "FR",
        color: "#0055ff",
        tags: ["Prototyping", "Animation", "Interactive", "Code"]
    },
    // Video Tools
    {
        id: "premiere-pro",
        name: "Premiere Pro",
        category: "video",
        subcategory: "Professional",
        description: "Industry-standard video editing software for professional video production with comprehensive tools.",
        shortDescription: "Professional video editing software",
        features: ["Multi-format support", "Advanced color grading", "Audio editing", "Motion graphics", "Team collaboration"],
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.adobe.com/products/premiere.html",
        icon: "PR",
        color: "#9999ff",
        tags: ["Video", "Professional", "Adobe", "Color"]
    },
    {
        id: "davinci-resolve",
        name: "DaVinci Resolve",
        category: "video",
        subcategory: "Professional",
        description: "Professional video editing, color correction, and audio post-production suite with industry-leading tools.",
        shortDescription: "Professional video & color editing",
        features: ["Professional editing", "Advanced color grading", "Audio mixing", "Visual effects", "Collaborative workflow"],
        pricing: "Freemium",
        rating: 4.7,
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
        icon: "DV",
        color: "#233a54",
        tags: ["Professional", "Color", "Audio", "Effects"]
    },
    {
        id: "capcut",
        name: "CapCut",
        category: "video",
        subcategory: "Beginner-Friendly",
        description: "Free video editor with AI features, perfect for social media content creation and mobile editing.",
        shortDescription: "Free mobile video editor",
        features: ["AI-powered editing", "Template library", "Music library", "Easy sharing", "Mobile-first design"],
        pricing: "Free",
        rating: 4.4,
        url: "https://www.capcut.com",
        icon: "CC",
        color: "#000000",
        trending: true,
        tags: ["Mobile", "AI", "Social", "Free"]
    },
    {
        id: "filmora",
        name: "Filmora",
        category: "video",
        subcategory: "Beginner-Friendly",
        description: "User-friendly video editor with creative effects, AI tools, and intuitive interface for content creators.",
        shortDescription: "User-friendly video editor",
        features: ["Drag-and-drop editing", "Effects library", "AI portrait", "Screen recording", "Creative transitions"],
        pricing: "Paid",
        rating: 4.3,
        url: "https://filmora.wondershare.com",
        icon: "FM",
        color: "#01b8aa",
        tags: ["Beginner", "Effects", "AI", "Creative"]
    },
    // Productivity Tools
    {
        id: "notion",
        name: "Notion",
        category: "productivity",
        subcategory: "Note-taking",
        description: "All-in-one workspace combining notes, databases, tasks, and collaboration in a flexible block-based system.",
        shortDescription: "All-in-one workspace & notes",
        features: ["Flexible blocks", "Databases", "Templates", "Team collaboration", "API integration"],
        pricing: "Freemium",
        rating: 4.7,
        url: "https://www.notion.so",
        icon: "NO",
        color: "#000000",
        tags: ["Notes", "Workspace", "Databases", "Collaboration"]
    },
    {
        id: "slack",
        name: "Slack",
        category: "productivity",
        subcategory: "Communication",
        description: "Business communication platform with organized channels, direct messages, and extensive integrations.",
        shortDescription: "Business communication platform",
        features: ["Organized conversations", "File sharing", "App integrations", "Video calls", "Workflow automation"],
        pricing: "Freemium",
        rating: 4.6,
        url: "https://slack.com",
        icon: "SL",
        color: "#4a154b",
        tags: ["Communication", "Business", "Integration", "Team"]
    },
    {
        id: "trello",
        name: "Trello",
        category: "productivity",
        subcategory: "Project Management",
        description: "Simple, visual project management using Kanban boards, lists, and cards for team organization.",
        shortDescription: "Visual project management boards",
        features: ["Kanban boards", "Card-based system", "Team collaboration", "Power-ups", "Butler automation"],
        pricing: "Freemium",
        rating: 4.5,
        url: "https://trello.com",
        icon: "TR",
        color: "#026aa7",
        tags: ["Kanban", "Visual", "Cards", "Simple"]
    },
    {
        id: "jira",
        name: "Jira",
        category: "productivity",
        subcategory: "Project Management",
        description: "Powerful project management and issue tracking tool for agile teams with comprehensive reporting.",
        shortDescription: "Agile project management & tracking",
        features: ["Agile boards", "Issue tracking", "Advanced reporting", "Team collaboration", "Custom workflows"],
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.atlassian.com/software/jira",
        icon: "JR",
        color: "#0052cc",
        tags: ["Agile", "Issues", "Reporting", "Workflows"]
    },
    {
        id: "obsidian",
        name: "Obsidian",
        category: "productivity",
        subcategory: "Note-taking",
        description: "Powerful knowledge management app with linked notes, graph view, and extensive plugin ecosystem.",
        shortDescription: "Knowledge management with linked notes",
        features: ["Linked notes", "Graph visualization", "Plugin ecosystem", "Local files", "Markdown support"],
        pricing: "Freemium",
        rating: 4.6,
        url: "https://obsidian.md",
        icon: "OB",
        color: "#7c3aed",
        tags: ["Knowledge", "Linked", "Graph", "Markdown"]
    },
    {
        id: "asana",
        name: "Asana",
        category: "productivity",
        subcategory: "Project Management",
        description: "Team collaboration and project management platform with powerful organization, tracking, and goal features.",
        shortDescription: "Team collaboration & project tracking",
        features: ["Project tracking", "Team collaboration", "Timeline view", "Goal tracking", "Custom fields"],
        pricing: "Freemium",
        rating: 4.5,
        url: "https://asana.com",
        icon: "AS",
        color: "#f06a6a",
        tags: ["Collaboration", "Timeline", "Goals", "Tracking"]
    }
];

// Application State
let appState = {
    currentView: 'grid',
    sortBy: 'name',
    searchQuery: '',
    favorites: [],
    showFavoritesOnly: false,
    activeSubcategories: {
        ai: 'all',
        development: 'all',
        design: 'all',
        video: 'all',
        productivity: 'all'
    },
    currentPopupTool: null,
    popupTimeout: null,
    touchTimer: null
};

// Mobile and touch detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouch = 'ontouchstart' in window;

// Initialize favorites from localStorage (but don't use it for persistence as per requirements)
try {
    appState.favorites = [];
} catch (e) {
    console.error('Error loading favorites:', e);
    appState.favorites = [];
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function generateStars(rating) {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
}

function showMessage(message, type = 'info') {
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.toast-message');
    existingMessages.forEach(msg => msg.remove());

    const messageEl = document.createElement('div');
    messageEl.className = 'toast-message';
    messageEl.textContent = message;

    let bgColor = 'rgba(139, 92, 246, 0.9)';
    if (type === 'success') bgColor = 'rgba(16, 185, 129, 0.9)';
    if (type === 'error') bgColor = 'rgba(239, 68, 68, 0.9)';

    messageEl.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 2000;
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        animation: slideInRight 0.3s ease-out;
        font-size: 14px;
        font-weight: 500;
        max-width: 300px;
        word-wrap: break-word;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => messageEl.remove(), 300);
    }, 3000);
}

// Enhanced Mobile Sidebar Navigation
function openSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
        sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add haptic feedback on mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateAndClose(sectionId) {
    closeSidebar();
    setTimeout(() => {
        scrollToSection(sectionId);
    }, 300); // Wait for sidebar animation
}

function focusSearch() {
    closeSidebar();
    setTimeout(() => {
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.focus();
        }
    }, 300);
}

// Enhanced Tool Popup System
function showToolPopup(tool, event) {
    if (!tool || appState.currentPopupTool === tool.id) return;

    hideToolPopup();

    const popup = document.getElementById('tool-popup');
    if (!popup) return;

    appState.currentPopupTool = tool.id;

    // Populate popup content
    const popupIcon = popup.querySelector('.popup-icon');
    const popupTitle = popup.querySelector('.popup-title');
    const popupRating = popup.querySelector('.popup-rating');
    const popupDescription = popup.querySelector('.popup-description');
    const popupFeatures = popup.querySelector('.popup-features');
    const popupVisitBtn = popup.querySelector('.popup-visit-btn');

    if (popupIcon) {
        popupIcon.textContent = tool.icon;
        popupIcon.style.backgroundColor = tool.color;
    }

    if (popupTitle) {
        popupTitle.textContent = tool.name;
    }

    if (popupRating) {
        const stars = generateStars(tool.rating);
        popupRating.innerHTML = `
            <span class="stars">${stars}</span>
            <span>${tool.rating}/5</span>
            <span class="tool-pricing ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
        `;
    }

    if (popupDescription) {
        popupDescription.textContent = tool.shortDescription || tool.description;
    }

    if (popupFeatures) {
        const featuresList = tool.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join('');
        popupFeatures.innerHTML = `<ul>${featuresList}</ul>`;
    }

    if (popupVisitBtn) {
        popupVisitBtn.href = tool.url;
    }

    // Position popup
    let x = 0, y = 0;

    if (event) {
        if (event.touches && event.touches[0]) {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        } else {
            x = event.clientX || 0;
            y = event.clientY || 0;
        }
    }

    // Smart positioning to stay within viewport
    const popupRect = { width: 320, height: 400 }; // Estimated popup size
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // Adjust horizontal position
    if (x + popupRect.width > viewport.width - 20) {
        x = viewport.width - popupRect.width - 20;
    }
    if (x < 20) x = 20;

    // Adjust vertical position
    if (y + popupRect.height > viewport.height - 20) {
        y = y - popupRect.height - 20;
    }
    if (y < 20) y = 20;

    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    // Show popup with animation
    popup.classList.remove('hidden');
    requestAnimationFrame(() => {
        popup.classList.add('show');
    });

    // Auto-hide after delay on desktop
    if (!isMobile) {
        clearTimeout(appState.popupTimeout);
        appState.popupTimeout = setTimeout(() => {
            hideToolPopup();
        }, 5000);
    }
}

function hideToolPopup() {
    const popup = document.getElementById('tool-popup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.classList.add('hidden');
            appState.currentPopupTool = null;
        }, 250);
    }

    clearTimeout(appState.popupTimeout);
}

// Enhanced Tool Card Generation
function createToolCard(tool, index = 0) {
    const isFavorited = appState.favorites.includes(tool.id);

    const card = document.createElement('div');
    card.className = `tool-card ${tool.trending ? 'trending' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.opacity = '1';
    card.dataset.toolId = tool.id;

    const stars = generateStars(tool.rating);

    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon" style="background-color: ${tool.color}">${tool.icon}</div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <div class="tool-meta">
                    <span class="tool-category">${tool.subcategory}</span>
                    <span class="tool-pricing ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                </div>
                <div class="tool-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-number">${tool.rating}</span>
                </div>
            </div>
        </div>
        
        <p class="tool-description">${tool.shortDescription || tool.description}</p>
        
        <ul class="tool-features">
            ${tool.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <div class="tool-actions">
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                Visit Tool →
            </a>
            <div class="tool-actions-secondary">
                <button class="action-btn ${isFavorited ? 'favorited' : ''}" 
                        data-tool-id="${tool.id}" 
                        title="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}">
                    ${isFavorited ? '♥' : '♡'}
                </button>
                <button class="action-btn" data-tool-id="${tool.id}" data-action="details" title="View details">
                    ⓘ
                </button>
            </div>
        </div>
    `;

    // Enhanced Event Listeners for Desktop and Mobile
    const favoriteBtn = card.querySelector('.action-btn:not([data-action])');
    const detailsBtn = card.querySelector('.action-btn[data-action="details"]');

    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(tool.id);
        });
    }

    if (detailsBtn) {
        detailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showToolDetails(tool.id);
        });
    }

    // Desktop hover events
    if (!isMobile) {
        card.addEventListener('mouseenter', (e) => {
            clearTimeout(appState.popupTimeout);
            appState.popupTimeout = setTimeout(() => {
                showToolPopup(tool, e);
            }, 500);
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(appState.popupTimeout);
            appState.popupTimeout = setTimeout(() => {
                hideToolPopup();
            }, 200);
        });
    }

    // Mobile touch events for popup
    if (isMobile) {
        let touchStartTime = 0;
        let touchStartPos = { x: 0, y: 0 };

        card.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            if (e.touches[0]) {
                touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }

            clearTimeout(appState.touchTimer);
            appState.touchTimer = setTimeout(() => {
                showToolPopup(tool, e);
                // Haptic feedback
                if ('vibrate' in navigator) {
                    navigator.vibrate(100);
                }
            }, 500);
        });

        card.addEventListener('touchmove', (e) => {
            // Cancel long press if finger moves too much
            if (e.touches[0]) {
                const currentPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                const distance = Math.sqrt(
                    Math.pow(currentPos.x - touchStartPos.x, 2) +
                    Math.pow(currentPos.y - touchStartPos.y, 2)
                );

                if (distance > 20) {
                    clearTimeout(appState.touchTimer);
                    hideToolPopup();
                }
            }
        });

        card.addEventListener('touchend', (e) => {
            clearTimeout(appState.touchTimer);
            const touchDuration = Date.now() - touchStartTime;

            // If it was a quick tap (not long press), hide popup
            if (touchDuration < 300) {
                hideToolPopup();
            }
        });
    }

    return card;
}

// Render Functions
function renderToolsGrid(categoryId, tools) {
    const gridElement = document.getElementById(`${categoryId}-tools-grid`);
    if (!gridElement) {
        console.error(`Grid element not found: ${categoryId}-tools-grid`);
        return;
    }

    console.log(`Rendering ${tools.length} tools for category: ${categoryId}`);

    gridElement.innerHTML = '';

    if (tools.length === 0) {
        gridElement.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-secondary); padding: 3rem;">
                <h3>No tools found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    tools.forEach((tool, index) => {
        const toolCard = createToolCard(tool, index);
        gridElement.appendChild(toolCard);
    });

    // Apply view mode
    if (appState.currentView === 'list') {
        gridElement.classList.add('list-view');
    } else {
        gridElement.classList.remove('list-view');
    }
}

function renderCategoryTools(categoryId) {
    let categoryTools = toolsData.filter(tool => tool.category === categoryId);

    console.log(`Found ${categoryTools.length} tools for category: ${categoryId}`);

    // Apply subcategory filter
    const activeSubcat = appState.activeSubcategories[categoryId];
    if (activeSubcat && activeSubcat !== 'all') {
        categoryTools = categoryTools.filter(tool => tool.subcategory === activeSubcat);
        console.log(`After subcategory filter (${activeSubcat}): ${categoryTools.length} tools`);
    }

    // Apply global search
    if (appState.searchQuery.trim()) {
        const query = appState.searchQuery.toLowerCase();
        categoryTools = categoryTools.filter(tool =>
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.shortDescription?.toLowerCase().includes(query) ||
            tool.subcategory.toLowerCase().includes(query) ||
            tool.features.some(feature => feature.toLowerCase().includes(query)) ||
            tool.tags?.some(tag => tag.toLowerCase().includes(query))
        );
        console.log(`After search filter (${query}): ${categoryTools.length} tools`);
    }

    // Apply favorites filter
    if (appState.showFavoritesOnly) {
        categoryTools = categoryTools.filter(tool => appState.favorites.includes(tool.id));
        console.log(`After favorites filter: ${categoryTools.length} tools`);
    }

    // Sort tools
    categoryTools.sort((a, b) => {
        switch (appState.sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'category':
                return a.subcategory.localeCompare(b.subcategory);
            case 'pricing':
                return a.pricing.localeCompare(b.pricing);
            default:
                return a.name.localeCompare(b.name);
        }
    });

    renderToolsGrid(categoryId, categoryTools);
    updateCategoryCount(categoryId, categoryTools.length);
}

function renderAllTools() {
    console.log('Rendering all tools...');
    const categories = ['ai', 'development', 'design', 'video', 'productivity'];
    categories.forEach(category => {
        renderCategoryTools(category);
    });
}

function updateCategoryCount(categoryId, count) {
    const countElement = document.getElementById(`${categoryId}-tool-count`);
    if (countElement) {
        countElement.textContent = `${count} tools`;
    }
}

// Search and Filter Functions
function setupSearch() {
    const globalSearch = document.getElementById('global-search');

    if (globalSearch) {
        const debouncedSearch = debounce((query) => {
            appState.searchQuery = query;
            console.log(`Searching for: "${query}"`);
            renderAllTools();
        }, 300);

        globalSearch.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });

        // Enhanced mobile search experience
        if (isMobile) {
            globalSearch.addEventListener('focus', () => {
                // Scroll to search on mobile
                globalSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        console.log('Search functionality set up');
    } else {
        console.error('Search input not found');
    }
}

// Global function for subcategory filtering
function filterBySubcategory(categoryId, subcategory) {
    console.log(`Filtering ${categoryId} by ${subcategory}`);

    // Update active filter button
    const container = document.getElementById(`${categoryId}-subcategories`);
    if (container) {
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Find and activate the correct button
        const buttons = container.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            const btnText = btn.textContent.trim();
            if ((subcategory === 'all' && btnText.startsWith('All')) ||
                btnText === subcategory) {
                btn.classList.add('active');
            }
        });
    }

    // Update state
    appState.activeSubcategories[categoryId] = subcategory;
    renderCategoryTools(categoryId);
}

// Favorites Functions
function toggleFavorite(toolId) {
    const index = appState.favorites.indexOf(toolId);

    if (index > -1) {
        appState.favorites.splice(index, 1);
        showMessage('Removed from favorites', 'info');
    } else {
        appState.favorites.push(toolId);
        showMessage('Added to favorites', 'success');
    }

    updateFavoritesCount();
    renderAllTools();
}

function updateFavoritesCount() {
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
        countElement.textContent = appState.favorites.length;
    }
}

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function showToolDetails(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;

    const modal = document.getElementById('details-modal');
    const title = document.getElementById('details-title');
    const content = document.getElementById('details-content');

    if (!modal || !title || !content) {
        console.error('Modal elements not found');
        return;
    }

    appState.currentPopupTool = toolId;

    title.textContent = tool.name;
    content.innerHTML = `
        <div class="tool-details">
            <div class="tool-header">
                <div class="tool-icon" style="background-color: ${tool.color}">${tool.icon}</div>
                <div class="tool-info">
                    <h2>${tool.name}</h2>
                    <div class="tool-meta">
                        <span class="tool-category">${tool.subcategory}</span>
                        <span class="tool-pricing ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                        <div class="tool-rating">
                            <span class="stars">${generateStars(tool.rating)}</span>
                            <span class="rating-number">${tool.rating}/5</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-description" style="margin: 2rem 0;">
                <h3>Description</h3>
                <p>${tool.description}</p>
            </div>
            
            <div class="tool-features">
                <h3>Key Features</h3>
                <ul>
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            ${tool.tags ? `
                <div class="tool-tags" style="margin: 1.5rem 0;">
                    <h3>Tags</h3>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${tool.tags.map(tag => `
                            <span style="background: rgba(139, 92, 246, 0.2); color: #8B5CF6; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="tool-actions" style="margin-top: 2rem;">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit ${tool.name} →
                </a>
            </div>
        </div>
    `;

    showModal('details-modal');
    hideToolPopup(); // Hide any open popup
}

// Navigation Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = 70;
        const targetPosition = section.offsetTop - navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        console.log(`Scrolling to section: ${sectionId}`);
    } else {
        console.error(`Section not found: ${sectionId}`);
    }
}

function setupNavigation() {
    // Setup back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Setup desktop navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                scrollToSection(target.substring(1));
            }
        });
    });
}

// Control Functions
function setupControls() {
    const sortSelect = document.getElementById('sort-select');
    const viewButtons = document.querySelectorAll('.view-btn');
    const favoritesToggle = document.getElementById('favorites-toggle');

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            appState.sortBy = e.target.value;
            console.log(`Sorting by: ${e.target.value}`);
            renderAllTools();
        });
    }

    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.currentView = btn.dataset.view;
            console.log(`View changed to: ${btn.dataset.view}`);
            renderAllTools();
        });
    });

    if (favoritesToggle) {
        favoritesToggle.addEventListener('click', () => {
            appState.showFavoritesOnly = !appState.showFavoritesOnly;
            favoritesToggle.style.background = appState.showFavoritesOnly ?
                'rgba(139, 92, 246, 0.3)' : 'var(--glass-bg)';
            console.log(`Show favorites only: ${appState.showFavoritesOnly}`);
            renderAllTools();
        });
    }
}

// Floating Action Buttons
function setupFloatingActions() {
    const mainFab = document.getElementById('main-fab');
    const fabContainer = document.querySelector('.fab-container');
    const exportFab = document.getElementById('export-fab');
    const shareFab = document.getElementById('share-fab');

    let fabExpanded = false;

    if (mainFab && fabContainer) {
        mainFab.addEventListener('click', () => {
            fabExpanded = !fabExpanded;
            fabContainer.classList.toggle('expanded', fabExpanded);
            mainFab.style.transform = fabExpanded ? 'rotate(45deg)' : 'rotate(0deg)';

            // Haptic feedback
            if ('vibrate' in navigator && isMobile) {
                navigator.vibrate(50);
            }
        });
    }

    if (exportFab) {
        exportFab.addEventListener('click', exportFavorites);
    }

    if (shareFab) {
        shareFab.addEventListener('click', shareCollection);
    }
}

// Export and Share Functions
function exportFavorites() {
    if (appState.favorites.length === 0) {
        showMessage('No favorites to export', 'error');
        return;
    }

    const favoriteTools = appState.favorites.map(id => toolsData.find(t => t.id === id)).filter(Boolean);
    const exportData = {
        exported_at: new Date().toISOString(),
        total_tools: favoriteTools.length,
        tools: favoriteTools.map(tool => ({
            name: tool.name,
            category: tool.category,
            subcategory: tool.subcategory,
            description: tool.description,
            url: tool.url,
            pricing: tool.pricing,
            rating: tool.rating
        }))
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'devtools-favorites.json';
    link.click();

    URL.revokeObjectURL(url);
    showMessage('Favorites exported successfully', 'success');
}

function shareCollection() {
    const message = `Check out DevTools Universe 2025 - Ultimate Developer & Creator Tools Directory! I've found ${appState.favorites.length} amazing tools.`;

    if (navigator.share && isMobile) {
        navigator.share({
            title: 'DevTools Universe 2025',
            text: message,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: copy URL to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showMessage('URL copied to clipboard', 'success');
            }).catch(() => {
                showMessage('Could not copy URL', 'error');
            });
        } else {
            showMessage('Share not supported', 'error');
        }
    }
}

// Enhanced Scroll Effects
function setupScrollEffects() {
    const backToTopBtn = document.getElementById('back-to-top');
    const navbar = document.querySelector('.navbar');

    let ticking = false;

    function updateScrollEffects() {
        const scrollTop = window.pageYOffset;

        // Back to top button
        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', scrollTop > 300);
        }

        // Navbar background
        if (navbar) {
            const opacity = scrollTop > 50 ? 0.95 : 0.9;
            navbar.style.background = `rgba(15, 15, 35, ${opacity})`;
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Enhanced Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // ESC to close modals and popups
        if (e.key === 'Escape') {
            closeModal('details-modal');
            hideToolPopup();
            closeSidebar();
        }

        // Numbers 1-5 to jump to categories
        const num = parseInt(e.key);
        if (num >= 1 && num <= 5 && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
            const categoryIds = ['ai-tools', 'development', 'design', 'video', 'productivity'];
            scrollToSection(categoryIds[num - 1]);
        }

        // Focus search with /
        if (e.key === '/' && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            const searchInput = document.getElementById('global-search');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // M to open mobile menu
        if (e.key === 'm' && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
            if (isMobile) {
                openSidebar();
            }
        }
    });
}

// Touch Gesture Enhancements
function setupTouchGestures() {
    if (!isTouch) return;

    let startY = 0;
    let isScrolling = false;

    // Pull to refresh gesture (optional enhancement)
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            startY = e.touches[0].pageY;
            isScrolling = false;
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && !isScrolling) {
            const currentY = e.touches[0].pageY;
            const diffY = currentY - startY;

            // Detect if user is scrolling
            if (Math.abs(diffY) > 10) {
                isScrolling = true;
            }
        }
    });

    // Hide popup when clicking outside
    document.addEventListener('touchstart', (e) => {
        const popup = document.getElementById('tool-popup');
        if (popup && !popup.classList.contains('hidden') && !popup.contains(e.target)) {
            hideToolPopup();
        }
    });
}

// Initialize Application
function initializeApp() {
    console.log('Initializing Enhanced DevTools Universe...');
    console.log(`Loaded ${toolsData.length} tools`);
    console.log(`Mobile device: ${isMobile}, Touch support: ${isTouch}`);

    // Setup all functionality
    setupNavigation();
    setupSearch();
    setupControls();
    setupFloatingActions();
    setupScrollEffects();
    setupKeyboardShortcuts();
    setupTouchGestures();

    // Add category card click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.category;
            if (categoryId) {
                scrollToSection(categoryId === 'ai' ? 'ai-tools' : categoryId);
            }
        });
    });

    // Global popup close handler
    document.addEventListener('click', (e) => {
        const popup = document.getElementById('tool-popup');
        if (popup && !popup.classList.contains('hidden') && !popup.contains(e.target)) {
            const toolCard = e.target.closest('.tool-card');
            if (!toolCard || !toolCard.dataset.toolId) {
                hideToolPopup();
            }
        }
    });

    // Update favorites count
    updateFavoritesCount();

    // Render all tools
    renderAllTools();

    console.log('Enhanced app initialized successfully!');

    // Show welcome message on mobile
    if (isMobile) {
        setTimeout(() => {
            showMessage('Tap and hold tool cards for quick preview!', 'info');
        }, 2000);
    }
}

// Add CSS animations for toast messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Make functions globally available for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.filterBySubcategory = filterBySubcategory;
window.toggleFavorite = toggleFavorite;
window.showToolDetails = showToolDetails;
window.showModal = showModal;
window.closeModal = closeModal;
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.navigateAndClose = navigateAndClose;
window.focusSearch = focusSearch;
window.hideToolPopup = hideToolPopup;