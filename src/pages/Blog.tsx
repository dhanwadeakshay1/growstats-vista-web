
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, User, Calendar, ArrowRight, ArrowLeft, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogPostProps {
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

const BlogCard = ({ title, excerpt, date, author, authorPhoto, image, slug, category, readTime }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-shadow hover:shadow-xl transition-shadow duration-300">
      <div className="h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>
      <CardHeader className="pt-5 pb-2">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-growstats-red/10 text-growstats-red rounded-full">
            {category}
          </span>
          {readTime && (
            <span className="ml-2 text-xs font-medium px-2 py-1 bg-growstats-purple/10 text-growstats-purple rounded-full">
              {readTime} min read
            </span>
          )}
        </div>
        <CardTitle className="text-xl font-display text-growstats-purple">
          <Link to={`/blog/${slug}`} className="hover:text-growstats-red transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-700">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          {authorPhoto ? (
            <img src={authorPhoto} alt={author} className="w-6 h-6 rounded-full object-cover" />
          ) : (
            <User size={14} />
          )}
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const FeaturedPost = ({ title, excerpt, date, author, authorPhoto, image, slug, category, readTime }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden mb-12 card-shadow hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex space-x-2 mb-4">
            <span className="text-xs font-medium px-2 py-1 bg-growstats-red/20 text-growstats-red rounded-full">
              Featured
            </span>
            <span className="text-xs font-medium px-2 py-1 bg-growstats-purple/20 text-growstats-purple rounded-full">
              {category}
            </span>
            {readTime && (
              <span className="text-xs font-medium px-2 py-1 bg-growstats-blue/20 text-growstats-blue rounded-full">
                {readTime} min read
              </span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-growstats-purple">{title}</h2>
          <p className="text-muted-foreground mb-6 text-gray-700">
            {excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              {authorPhoto ? (
                <img src={authorPhoto} alt={author} className="w-6 h-6 rounded-full object-cover" />
              ) : (
                <User size={14} />
              )}
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>
          <Button asChild className="self-start bg-growstats-blue hover:bg-growstats-blue/90 text-white">
            <Link to={`/blog/${slug}`} className="flex items-center">
              Read Article
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Blog = () => {
  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
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

  const featuredPost = {
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

  const categories = [
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

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Blog & Resources"
        subtitle="Insights, strategies, and industry updates from our digital marketing experts"
        bgClass="bg-gradient-to-r from-growstats-purple to-growstats-blue"
      />

      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-6 text-growstats-purple">Filter by Topic</h2>
            <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex flex-nowrap overflow-x-auto pb-2 bg-white p-1 border rounded-lg space-x-1 mb-4">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="bg-white data-[state=active]:bg-growstats-red/10 data-[state=active]:text-growstats-red whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Featured Post */}
          <FeaturedPost {...featuredPost} />

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-growstats-blue text-growstats-blue"
                disabled={activePage === 1}
                onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <Button 
                variant={activePage === 1 ? "default" : "outline"}
                className={activePage === 1 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(1)}
              >
                1
              </Button>
              
              <Button 
                variant={activePage === 2 ? "default" : "outline"}
                className={activePage === 2 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(2)}
              >
                2
              </Button>
              
              <Button 
                variant={activePage === 3 ? "default" : "outline"}
                className={activePage === 3 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(3)}
              >
                3
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="border-growstats-blue text-growstats-blue"
                disabled={activePage === 3}
                onClick={() => setActivePage(prev => Math.min(prev + 1, 3))}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-xl text-center shadow-lg border border-growstats-purple/10">
            <h3 className="text-2xl font-bold mb-4 font-display text-growstats-purple">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-gray-700">
              Stay updated with the latest digital marketing insights, trends, and tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-300 px-4 py-2 w-full focus:border-growstats-blue focus:ring-1 focus:ring-growstats-blue focus:outline-none"
              />
              <Button className="bg-growstats-red hover:bg-growstats-red/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
