
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorPhoto?: string;
  image: string;
  slug: string;
  category: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "10 Proven SEO Strategies to Boost Your Website Traffic",
    excerpt: "Learn about the most effective SEO strategies that can help your website rank higher on search engines and drive more organic traffic. We explore key techniques used by industry experts.",
    date: "Apr 12, 2025",
    author: "Rahul Khanna",
    authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "seo-strategies-to-boost-website-traffic",
    category: "SEO",
    readTime: "8",
  },
  {
    title: "The Ultimate Guide to Email Marketing in 2025",
    excerpt: "Discover the latest email marketing trends, tools, and strategies that will help you create effective email campaigns in 2025. Focus on personalization and automation.",
    date: "Apr 8, 2025",
    author: "Priya Sharma",
    authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "ultimate-guide-to-email-marketing",
    category: "Email Marketing",
    readTime: "10",
  },
  {
    title: "How to Create a Social Media Strategy That Converts",
    excerpt: "Learn how to develop a social media marketing strategy that not only engages your audience but also drives conversions and sales. Includes platform-specific tactics.",
    date: "Apr 3, 2025",
    author: "Anita Roy",
    authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "social-media-strategy-that-converts",
    category: "Social Media",
    readTime: "7",
  },
  {
    title: "Web Development Trends You Need to Know in 2025",
    excerpt: "Stay ahead of the competition by keeping up with the latest web development trends that are shaping the digital landscape in 2025. From AI integration to performance optimization.",
    date: "Mar 28, 2025",
    author: "Vikram Patel",
    authorPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "web-development-trends-2025",
    category: "Web Development",
    readTime: "9",
  },
  {
    title: "The Power of Content Marketing: Why It Matters in 2025",
    excerpt: "Discover why content marketing remains one of the most effective digital marketing strategies and how to leverage it for your business. Learn content creation best practices.",
    date: "Mar 22, 2025",
    author: "Rahul Khanna",
    authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "power-of-content-marketing",
    category: "Content Marketing",
    readTime: "6",
  },
  {
    title: "How to Conduct a Comprehensive Website Audit",
    excerpt: "Learn the step-by-step process of conducting a website audit to identify issues and opportunities for improvement. Includes technical, SEO, and UX auditing techniques.",
    date: "Mar 15, 2025",
    author: "Priya Sharma",
    authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "how-to-conduct-website-audit",
    category: "Website Optimization",
    readTime: "12",
  },
  {
    title: "Mastering Pay-Per-Click Advertising for Small Businesses",
    excerpt: "Learn how small businesses can leverage PPC advertising to compete with larger companies and drive targeted traffic to their websites. Includes budget optimization tips.",
    date: "Mar 10, 2025",
    author: "Anita Roy",
    authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "mastering-ppc-for-small-businesses",
    category: "PPC",
    readTime: "8",
  },
  {
    title: "Analytics Tools Every Digital Marketer Should Know",
    excerpt: "Explore the essential analytics tools that help digital marketers make data-driven decisions to improve campaigns and drive better results. From Google Analytics to advanced platforms.",
    date: "Mar 5, 2025",
    author: "Vikram Patel",
    authorPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "analytics-tools-for-digital-marketers",
    category: "Analytics",
    readTime: "9",
  },
  {
    title: "E-commerce Optimization: Boosting Your Online Store Performance",
    excerpt: "Discover proven strategies to optimize your e-commerce store for better user experience, higher conversion rates, and increased sales. From product pages to checkout process.",
    date: "Feb 28, 2025",
    author: "Rahul Khanna",
    authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "ecommerce-optimization-strategies",
    category: "E-commerce",
    readTime: "11",
  },
];

export const featuredPost: BlogPost = {
  title: "Digital Marketing Trends to Watch in 2025",
  excerpt: "Explore the emerging digital marketing trends that are reshaping how businesses connect with their customers and drive growth in 2025. From AI-powered personalization to voice search optimization and interactive content experiences.",
  date: "Apr 15, 2025",
  author: "Rahul Khanna",
  authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  slug: "digital-marketing-trends-2025",
  category: "Digital Marketing",
  readTime: "15",
};

export const categories = [
  "All",
  "SEO",
  "Email Marketing",
  "Social Media",
  "Web Development",
  "Content Marketing",
  "Website Optimization",
  "Analytics",
  "PPC",
  "E-commerce",
  "Digital Marketing",
];
