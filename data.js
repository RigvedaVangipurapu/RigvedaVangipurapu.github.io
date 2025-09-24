// Projects Data
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        demoUrl: "https://your-demo-url.com",
        icon: "fas fa-laptop-code",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/task-manager",
        demoUrl: "https://your-task-app-demo.com",
        icon: "fas fa-mobile-alt",
        featured: true
    },
    {
        id: 3,
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard for analyzing business metrics with customizable charts, filters, and real-time data updates.",
        technologies: ["D3.js", "Python", "Flask", "Chart.js"],
        githubUrl: "https://github.com/yourusername/data-dashboard",
        demoUrl: "https://your-dashboard-demo.com",
        icon: "fas fa-chart-line",
        featured: true
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with vanilla HTML, CSS, and JavaScript, featuring a clean and minimalistic design.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        githubUrl: "https://github.com/yourusername/portfolio",
        demoUrl: "https://your-portfolio.com",
        icon: "fas fa-code",
        featured: false
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
