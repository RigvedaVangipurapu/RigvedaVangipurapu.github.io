// Projects Data
// NOTE: This array is managed automatically by the portfolio sync workflow.
// Keep values JSON-compatible (double quotes, no trailing commas).
const projectsData = [
    {
        "id": 1,
        "title": "MCP AI Calendar Agent",
        "description": "An intelligent calendar management system using Model Context Protocol (MCP) to automate scheduling, meeting coordination, and calendar optimization with AI-powered insights.",
        "technologies": [
            "Python",
            "AI/ML",
            "MCP"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/MCP-AI-Calendar-Agent",
        "demoUrl": "",
        "icon": "fas fa-robot",
        "featured": true
    },
    {
        "id": 2,
        "title": "Job Search Assistant",
        "description": "An AI-powered job search automation tool that monitors career boards, analyzes job postings, and helps optimize application strategies for better success rates.",
        "technologies": [
            "Python",
            "Web Scraping",
            "AI"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/Job-Search-Assistant-2",
        "demoUrl": "",
        "icon": "fas fa-search",
        "featured": true
    },
    {
        "id": 3,
        "title": "Air Quality Analytics",
        "description": "Comprehensive data analysis project processing air quality datasets to identify patterns, trends, and correlations using advanced statistical methods and visualization techniques.",
        "technologies": [
            "Python",
            "Data Analysis",
            "Visualization"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/Air-Quality-Analytics",
        "demoUrl": "",
        "icon": "fas fa-chart-bar",
        "featured": true
    },
    {
        "id": 7,
        "title": "Neural Networks Course",
        "description": "Implementation of Andrej Karpathy's neural networks course, featuring hands-on projects in deep learning, backpropagation, and modern AI architectures.",
        "technologies": [
            "Python",
            "Neural Networks",
            "Deep Learning"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/Neural-Networks-course",
        "demoUrl": "",
        "icon": "fas fa-brain",
        "featured": true
    },
    {
        "id": 5,
        "title": "Stack Overflow Data Analysis",
        "description": "Large-scale data processing project using Spark for data ingestion, cleaning, and SQL querying to extract meaningful insights from Stack Overflow's massive XML datasets.",
        "technologies": [
            "Spark",
            "SQL",
            "Big Data"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/Stack-Overflow-Data-Analysis",
        "demoUrl": "",
        "icon": "fas fa-database",
        "featured": true
    },
    {
        "id": 6,
        "title": "Secure File Sharing Application",
        "description": "A secure file sharing platform with encryption, access controls, and audit trails, built with Python and modern security best practices.",
        "technologies": [
            "Python",
            "Security",
            "Encryption"
        ],
        "githubUrl": "https://github.com/RigvedaVangipurapu/Secure-File-Sharing-application",
        "demoUrl": "",
        "icon": "fas fa-shield-alt",
        "featured": true
    },
    {
        "id": 4,
        "title": "portfolio agent",
        "description": "CI/CD agent that auto-syncs your GitHub projects to your portfolio - push code, portfolio updates itself",
        "technologies": [],
        "githubUrl": "https://github.com/RigvedaVangipurapu/portfolio-agent",
        "demoUrl": "",
        "icon": "fas fa-code",
        "featured": true
    }
];

// Blog Posts Data
const blogPostsData = [
    {
        id: 1,
        title: "Building Scalable React Applications",
        excerpt: "Learn the best practices for structuring and scaling React applications, from component architecture to state management strategies.",
        content: "blog-template.html", // Link to full blog post
        date: "2024-12-15",
        category: "Development",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "The Art of Minimalist UI Design",
        excerpt: "Exploring the principles of minimalist design and how to create clean, functional interfaces that users love.",
        content: "blog-minimalist-design.html",
        date: "2024-12-10",
        category: "Design",
        readTime: "4 min read",
        featured: true
    },
    {
        id: 3,
        title: "The Future of Web Development",
        excerpt: "My thoughts on emerging technologies and trends that will shape the future of web development in the coming years.",
        content: "blog-future-web-dev.html",
        date: "2024-12-05",
        category: "Technology",
        readTime: "6 min read",
        featured: true
    },
    {
        id: 4,
        title: "Getting Started with TypeScript",
        excerpt: "A beginner's guide to TypeScript, covering the basics and how it can improve your JavaScript development experience.",
        content: "blog-typescript-guide.html",
        date: "2024-11-28",
        category: "Development",
        readTime: "7 min read",
        featured: false
    },
    {
        id: 5,
        title: "CSS Grid vs Flexbox: When to Use What",
        excerpt: "Understanding the differences between CSS Grid and Flexbox, and choosing the right layout method for your projects.",
        content: "blog-css-layouts.html",
        date: "2024-11-20",
        category: "CSS",
        readTime: "5 min read",
        featured: false
    }
];

// Skills Data
const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Node.js",
    "Python",
    "HTML5",
    "CSS3",
    "SASS",
    "Git",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "Next.js"
];

// Contact Information
const contactData = {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourusername",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
};

// Personal Information
const personalData = {
    name: "Rigveda Vangipurapu",
    title: "Developer, Writer & Creative Thinker",
    description: "I build digital experiences and share insights through code and words. Welcome to my corner of the internet.",
    about: "I'm a passionate developer who loves creating meaningful digital experiences. When I'm not coding, you'll find me writing about technology, design, and the intersection of creativity and innovation. I believe in the power of clean code, thoughtful design, and continuous learning. This portfolio is where I share my journey, projects, and thoughts.",
    location: "San Francisco, CA",
    availability: "Available for freelance work"
};

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        blogPostsData,
        skillsData,
        contactData,
        personalData
    };
}
